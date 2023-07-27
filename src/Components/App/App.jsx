import MasterLayout from '../MasterLayout/MasterLayout';
import HomePage from '../Pages/HomePage';
import Products from '../Products/Products';
import './../App/App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Category from './../Category/Category'
import Brands from '../Brands/Brands';
import ProductDetailes from '../ProductDetailes/ProductDetailes';
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import Register from '../Register/Register'
import { ToastContainer } from 'react-toastify';
import CartContextProvider from '../../Context/CartContext';
import Cart from '../Cart/Cart';
import CheckOut from '../CheckOut/CheckOut';



function App() {
  let routes = createHashRouter([{
    path: "",
    element: <MasterLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <Products /> },
      { path: 'categories', element: <Category /> },
      { path: 'brands', element: <Brands /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <CheckOut /> },
      { path: 'login', element: <Login /> },
      { path: 'logout', element: <Logout /> },
      { path: 'register', element: <Register /> },
      { path: 'product-details/:id', element: <ProductDetailes /> },
    ]
  }])
  return (
    <>
      {/* <ToastContainer theme='colored'/> */}
      <ToastContainer />
      <CartContextProvider>
        <RouterProvider router={routes} />
      </CartContextProvider>
    </>
  );
}

export default App;
