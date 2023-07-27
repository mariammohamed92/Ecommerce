import React, { useContext } from 'react'
import logo from '../../images/freshcart-logo.svg'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export default function Navbar() {
    let{Count} = useContext(CartContext)
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-main-light">
            <div className="container">
                <NavLink className="navbar-brand" href='#'>
                    <img src={logo} alt="" />
                </NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="categories">Categories</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="brands">Brands</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">

                        <li className="nav-item position-relative px-4">
                            <NavLink className="nav-link " to="cart">
                                Cart
                                <i className="fa-solid fa-cart-shopping "></i>
                                <span className="position-absolute top-0 end-0 translate-small badge rounded-pill bg-success">
                                    {Count}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="https://www.google.com.eg/?hl=ar">Logout</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="login">Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="register">Register</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}
