import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Details from './Components/Details/Details';
import ShopCart from './Components/ShopCart/ShopCart';
import AboutUs from "./Components/AboutUs/AboutUs";

// Context
import ProductContextProvider from './Context/ProductContextProvider';
import CartContextProvider from "./Context/CartContextProvider";

const App = () => {
    return (
        <div className='App'>
            <ProductContextProvider>
                <CartContextProvider>
                    <Routes>
                        <Route path='/aboutus' element={<AboutUs />} />
                        <Route path="/cart" element={<ShopCart />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/products/:id' element={<Details />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </CartContextProvider>
            </ProductContextProvider>
        </div>
    );
};

export default App;