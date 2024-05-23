import './App.css';
import Navigation from './cutomer/components/navigation/navigation';
import Product from './cutomer/components/Product/Product';
import ProductDetails from './cutomer/components/ProductDetails/productDetails';
import Cart from './cutomer/components/Cart/Cart';
import Checkout from './cutomer/components/Checkout/Checkout';
import OrderPage from './cutomer/components/Order/OrderPage';
import OrderDetail from './cutomer/components/Order/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';


function App() {
  return (
    <div className=''>

<Routes>
<Route path='/*' element={<CustomerRouter/>}></Route>
</Routes>

    </div>
  );
}

export default App;
