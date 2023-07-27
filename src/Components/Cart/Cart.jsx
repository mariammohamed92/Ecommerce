import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext';
import { notify } from '../../Utils/notify';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';


export default function Cart() {
    let { getUserCart, removeCart , updateCart , getCartCount } = useContext(CartContext);
    const [carts, setCarts] = useState([])
    const [totalPrice, setTotalPrice] = useState([])


    async function getCart() {
        let token = localStorage.getItem('token');
        if (token) {
            let response = await getUserCart(token);
            console.log(response);
            setCarts(response.data.data.products)
            setTotalPrice(response.data.data.totalCartPrice)
        }

        getUserCart()
    }

    async function deleteCart(productId) {
        let token = localStorage.getItem('token');
        if (token) {
            let response = await removeCart(token, productId);
            console.log(response);
            setCarts(response.data.data.products)
            setTotalPrice(response.data.data.totalCartPrice)
            notify('product deleted', 'success')
            getCartCount();
        }

        getUserCart()
    }

    
    async function updateProductQy(productId , count) {
        let token = localStorage.getItem('token');
        if (token) {
            let response = await updateCart(token, productId , count);
            console.log(response);
            setCarts(response.data.data.products)
            setTotalPrice(response.data.data.totalCartPrice)
            notify('product updated', 'success')
        }

        getUserCart()
    }

    useEffect(() => {
        getCart()
    }, [])



    return (
        <>
            {/* <Loading/> */}

            {carts.length != 0 ? <div className="container">
                <div className="bg-main-light p-3 my-4">
                    <h3>Shop Cart</h3>
                    <h6 className='my-3 text-main fw-bold'>Total Cart Price : {totalPrice} EGP</h6>
                    {carts.map((cart) => {
                        return (
                            <div className="row my-3 border-bottom py-3 " key={cart._id}>
                                <div className="col-md-1">
                                    <img src={cart.product.imageCover} alt="" className='w-100' />
                                </div>
                                <div className="col-md-11">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <div>
                                                    <h6>{cart.product.title}</h6>
                                                    <h6 className='text-main mx-2 fw-bolder'>{cart.price} EGP</h6>
                                                    <button onClick={() => deleteCart(cart.product._id)} className='text-danger btn'>Remove <i className='fa-solid fa-trash'></i></button>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div>
                                                    <button onClick={() => updateProductQy(cart.product._id ,cart.count +1)} className='btn btn-brdr'>+</button>
                                                    <span className='mx-2'>{cart.count}</span>
                                                    <button onClick={() => updateProductQy(cart.product._id ,cart.count -1)}  className='btn btn-brdr'>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )
                    })}
                    <Link to='/checkout' className='btn bg-main text-white'>Check Out</Link>
                </div>
            </div> : <div className='mt-5 pt-5'>
                <Loading />
            </div>}
        </>
    )
}
