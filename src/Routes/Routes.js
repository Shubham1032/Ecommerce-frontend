import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../footer/Footer';
import FooterTwo from '../footer/FooterTwo';
import Home from '../pages/Home';
import SingleProduct from '../Components/SingleProduct';
import Navbar from '../Header/navbar';
import Store from '../pages/Store';
import DisplayPage from '../UserDetails/DisplayPage';
import Jewellery from '../pages/Jewellery';
import Electronics from '../pages/Electronics';
import Fashion from '../pages/Fashion';
import SignInSide from '../UserDetails/MainPage';
import SignUp from '../UserDetails/RegisterUser';
import Cart from '../pages/Cart';

const Routess = () => {
  return (
 
      <BrowserRouter>
 
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/footer' element={<Footer/>} />
    <Route path='/footertwo' element={<FooterTwo/>} />
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/singleProduct/:_id' element={<SingleProduct/>}/>
    <Route path='/store/' element={<Store/>}/>
    <Route path='/' element={<DisplayPage/>}/>
    <Route path='/jewellery' element={<Jewellery/>}/>
    <Route path='/electronics' element={<Electronics/>}/>
    <Route path='/fashion' element={<Fashion/>}/>
    <Route path='/loginPage' element={<SignInSide/>}/>
    <Route path='/registerUser' element={<SignUp/>}/>
    <Route path='/cartPage' element={<Cart/>}/>
    
   </Routes>
 
   </BrowserRouter>
 

  )
}

export default Routess