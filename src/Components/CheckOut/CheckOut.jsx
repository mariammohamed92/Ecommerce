import { useFormik } from 'formik'
import React from 'react'

export default function CheckOut() {
    let checkoutFormik = useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:''
        },
        onSubmit:(values) =>{
            console.log(values);
        }
    })
  return (
    <>
    <div className="w-50 m-auto my-5">
        <form onSubmit={checkoutFormik.handleSubmit}>
            <label htmlFor="details" className='my-3'>Details</label>
            <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur} type="text" name='details' id='details' className='form-control' />

            <label htmlFor="phone" className='my-3'>phone</label>
            <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur} type="number" name='phone' id='phone' className='form-control' />

            <label htmlFor="city" className='my-3'>city</label>
            <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur} type="text" name='city' id='city' className='form-control' />

            <button className='my-5 btn w-25 bg-main text-white'>Place Order</button>
        </form>
    </div>
    </>
  )
}
