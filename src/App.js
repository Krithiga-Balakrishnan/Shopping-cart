import './App.css';
import Navigation from './cutomer/components/navigation/navigation';
import HomePage from './cutomer/pages/HomePage/HomePage';
import Footer from './cutomer/components/Footer/Footer';
import Product from './cutomer/components/Product/Product';
import ProductDetails from './cutomer/components/ProductDetails/productDetails';
import Cart from './cutomer/components/Cart/Cart';
import Checkout from './cutomer/components/Checkout/Checkout';
import OrderPage from './cutomer/components/Order/OrderPage';
import OrderDetail from './cutomer/components/Order/OrderDetail';


function App() {
  return (
    <div className="App">
      <Navigation/>
     <div>
      {/* <HomePage/> */}
      {/* <Product/> */}
{/* <ProductDetails/> */}
{/* <Cart/> */}
{/* <Checkout/> */}
{/* <OrderPage/> */}
<OrderDetail/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
