import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';

import Shop from '../Pages/Shop'
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Mobile from '../Pages/Mobile';
import Watches from '../Pages/Watches';
import Television from '../Pages/Television';
import Fridge from '../Pages/Fridge';
import Laptop from '../Pages/Laptop';
import Customerservice from '../Pages/Customerservice';


function Navbar() {
  return (
   <>
   <section className='s'>
   
   
   <nav className="navbar navbar-expand-lg sticky-top backgg py-3">
  <div className="container-fluid d-flex justify-content-between">
  <div>
  <a class="navbar-brand mx-auto" href="#">
  <Link to="/">
      <img className='w-255 d-lg-none d-md-block' src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-Background-PNG-Image.png"/>

      </Link>
  </a>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav text-center text-xs-center gap-lg-5 mx-auto fw-bold ">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/customerservice">Customer service</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    
    </div>
   
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customerservice" element={<Customerservice/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        
       
       
       
        <Route path="/shop1/:mobile" element={<Mobile/>} />
        <Route path="/shop2/:laptop" element={<Laptop/>} />
        <Route path="/shop3/:fridge" element={<Fridge/>} />
        <Route path="/shop4/:television" element={<Television/>} />
        <Route path="/shop5/:watches" element={<Watches/>} />
     
      </Routes>
</section>

   </>
  )
}

export default Navbar