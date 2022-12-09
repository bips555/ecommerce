import React from "react";

function Footer() {
  return (
    <footer className="mt-5 backg text-white px-auto py-1">
      <div className="container">
        <div className="row d-flex mx-auto">
          <div className="col-lg-3 col-12 col-sm-6 lh-sm">
          <h3 className="py-3">Get In Touch</h3>
            <ul className="list-unstyled lh-lg ">
              <li><b className="fi">Address : </b>dhapasi, tokha 06,<br></br> kathmandu, nepal </li>
              <li><b className="fi">Phone : </b><br></br>(+977)  9840112175</li>
              <li><b className="fi">Email : </b><br></br>subedi.biplove10@gmail.com</li>
             
             
            </ul>
          </div>
          <div className="col-lg-3 col-12 col-sm-6 lh-lg">
            <h3 className="py-3">Policies</h3>
            <ul className="list-unstyled hov">
              <li> Shipping And Delivery</li>
              <li> Payment Method
</li>
              <li>  How to Shop
</li>
              <li>Terms And Conditions
</li>
              <li>Privacy Policy
</li>
             <li>Returns</li> 

            </ul>
          </div>
          <div className="col-lg-3 col-12 col-sm-6">
            <h3 className="py-3">Support</h3>
            <ul className="list-unstyled lh-lg hov">
              <li>
              My Account
              </li>
              <li>
              Order Tracking
              </li>
              <li>
              Contact Us
              </li>
              <li>
              Customer Services
              </li>
<li>FAQs</li>
<li>Help Desk
</li>
            </ul>
          




          </div>
          <div className="col-lg-3 col-12 col-sm-6">
            <h3 className="py-3">Join Our Newsletter</h3>
          <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, molestias eligendi. Error pariatur ipsam consectetur.</p>
          <div className="form-floating mb-3 text-dark">
  <input type="email" className="form-control " id="floatingInput" placeholder="email address"/>
  <label htmlFor="floatingInput">Email address</label>

</div>
<div className='p-1 apt-btn text-dark bg-white mx-auto text-center justify-content-center align-items-center d-flex'>
        <p>Subscribe</p>
      
      </div>
          </div>
        </div>
      </div>
      <div className="container text-center fw-bold">
       <p className="pt-3"> Copyright © 2022. All Rights Reserved By Electronics NEPAL.</p>
     

</div>

     
    </footer>
    
  );
}

export default Footer;
