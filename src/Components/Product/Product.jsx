import React, { useContext  } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { notify } from '../../Utils/notify';
import { CartContext } from '../../Context/CartContext.jsx';


export default function Product({ products }) {

  let { addToCart , getCartCount } = useContext(CartContext);

  async function addProduct(productId) {

    let token = localStorage.getItem('token');
    if (token) {
      let response = await addToCart(token, productId);
      if(response.status !==200){
        getCartCount();
        notify('product added successfuly' , 'success')
      }
      console.log(response);

    } else {
      alert(' u r not loggedIn')
    }
  }
  
 
  return (
    <>
    <div className="buttons d-flex justify-content-center mb-5 pb-5 mt-5">
    <NavLink to="">
    <button className="btn btn-outline-dark me-2"  >Men`s Clothing</button>
   </NavLink>
   <NavLink to="">
    <button className="btn btn-outline-dark me-2"  >Women`s Clothing</button>
    </NavLink>
    <NavLink to="">
    <button className="btn btn-outline-dark me-2"  >Jewelery</button>
   </NavLink>
   <NavLink to="">
    <button className="btn btn-outline-dark me-2" >Electronic</button>
 </NavLink>
  </div>
      {products.map((product) => (
        <div className="col-md-3 mb-4 " key={product._id}>
          <div className="product my-4 h-100 text-center p-4">
            <Link to={`product-details/` + product._id}>
              <img src={product.imageCover} className='w-100 card-img-top' alt={product.title} />
               <h6 className='text-main'>{product.subcategory.name}</h6> 
              <p className='fw-bolder card-text lead '>{product.title.split(' ').slice(0, 3).join(' ')}</p>
              <div className='d-flex justify-content-evenly align-items-center my-3'>
                <span>{product.price} EGP</span>
                <div>
                  <i className='fa fa-star rating-color'></i>
                  {product.ratingsAverage}
                </div>
              </div>
            </Link>
            <button onClick={() => addProduct(product._id)} className='btn btn-success bg-main text-white w-100'>Add to Cart</button>
          </div>
        </div>
      ))}
    </>
  )
}
