import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl } from '../Components/Utilities/BaseUrl'


export let CartContext = createContext(0);

export default function CartContextProvider({ children }) {

    const [Count, setCount] = useState(0)

    function addToCart(token, productId) {

        return axios.post(`${baseUrl}/cart`, { productId }, {
            headers: { token }
        })
            .then(data => data)
            .catch(error => error)
    }

    function getUserCart(token) {

        return axios.get(`${baseUrl}/cart`, {
            headers: { token }
        })
            .then(data => data)
            .catch(error => error)
    }

    function removeCart(token, productId) {

        return axios.delete(`${baseUrl}/cart/${productId}`, {
            headers: { token }
        })
            .then(data => data)
            .catch(error => error)
    }


    function updateCart(token, productId, count) {

        return axios.put(`${baseUrl}/cart/${productId}`, { count }, {
            headers: { token }
        })
            .then(data => data)
            .catch(error => error)
    }

    function getCartCount() {
        let token = localStorage.getItem('token')
        axios.get(`${baseUrl}/cart`, {
            headers: { token }
        }).then(data => {
            console.log(data.data.numOfCartItems);
                setCount(data.data.numOfCartItems)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getCartCount()
    }, [])


    return <CartContext.Provider value={{ addToCart, getUserCart, removeCart, updateCart, Count ,getCartCount }}>
        {children}
    </CartContext.Provider>
}