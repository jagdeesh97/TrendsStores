import React, { useState, useEffect } from 'react';
import "./App.css";
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import Wishlist from './pages/Wishlist';
import ShopContext from './components/ShopContext';
import Details from './pages/Details';
import CheckOut from './pages/CheckOut';
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      {loading ? (
        <PacmanLoader
          color="#80eeff"
          cssOverride={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ) : (
        <ShopContext>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='blog' element={<Blog />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='cart' element={<Cart />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='forgetpassword' element={<ForgetPassword />} />
                <Route path='wishlist' element={<Wishlist />} />
                <Route path='details' element={<Details />} />
                <Route path='checkout' element={<CheckOut />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ShopContext>
      )}
    </>
  );
}

export default App;
