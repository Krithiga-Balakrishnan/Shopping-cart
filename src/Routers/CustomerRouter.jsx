import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../cutomer/pages/HomePage/HomePage';
import Cart from '../cutomer/components/Cart/Cart'
import Footer from '../cutomer/components/Footer/Footer';
import Product from '../cutomer/components/Product/Product';
import ProductDetails from '../cutomer/components/ProductDetails/productDetails';
import Navigation from '../cutomer/components/navigation/navigation';
import Checkout from '../cutomer/components/Checkout/Checkout';
import OrderDetail from '../cutomer/components/Order/OrderDetail';

const CustomerRouter = () => {
  return (
    <div>
              <div>
      <Navigation/>
      </div>
        <Routes>
            <Route path='/' element={<HomePage/>} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>} ></Route>
            <Route path='/checkout' element={<Checkout/>} ></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>} ></Route>

{/* <OrderDetail/> */}
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouter