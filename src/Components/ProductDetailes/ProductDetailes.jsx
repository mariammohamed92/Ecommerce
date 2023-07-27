import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../Utilities/BaseUrl'
import { NavLink, useParams } from 'react-router-dom'

export default function ProductDetailes() {
   
      
    
    let { id } = useParams()

    const [product, setProduct] = useState([])

    let getAllProduct = async () => {
        let { data } = await axios.get(`${baseUrl}/products/${id}`)
        // console.log(data.data);
        setProduct(data.data)
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-md-4 ">
                        <img src={product.imageCover} className='w-100 border-black' alt="" />
                    </div>
                    <div className="col-md-8 mt-5">
                        <h6 className=' fw-bold'>{product.title}</h6>
                        <p className=' '>{product.description}</p>
                            <h3>{product.price} EGP</h3>
                            <h3>
                  <i className='fa fa-star rating-color'></i>
                  {product.ratingsAverage}
                  </h3>
                  <NavLink to='/cart'>
                  <button  className='btn btn-success bg-main text-white w-25 text-center mt-2'>Add to Cart</button>
                 </NavLink>
                </div>
              </div>
         
                    </div>
        </>
    )
}
