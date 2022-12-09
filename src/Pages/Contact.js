import React from 'react'
import { Route, Routes} from 'react-router-dom'


function Contact() {
  return (
    <>
    <div className="container my-5">
      <div className="row">
      <h2 className='fw-bold text-center colc py-5 text-uppercase'>Account management for electronics nepal</h2>

        <div className="col-lg-6 col-md-6 col-12">
       
          <div className="login backggg  py-5 ">
            <h2 className='fw-bold text-center py-3 text-light'>Login</h2>
            <form>
              <div className="col-lg-8 col-md-8 col-8 mx-auto py-5">
              <input type="text" className="form-control" placeholder="Email"  required/></div>
              <div className="col-lg-8 col-md-8  col-8 mx-auto">
                <input type="password" className="form-control mx-auto" placeholder="Password" required/>
              </div>
              <div className="row align-items-center mx-5">
                <div className="col-lg-6 col-md-6 col-sm-6 mt-5">
                  <div className="form-check"><input type="checkbox" className="form-check-input" id="checkme"/>
                  <label className="form-check-label text-light" htmlFor="checkme">Remember me</label>
                  </div></div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mt-5">
                    <a href="#" className="text-decoration-none text-light ">Forgot your password?</a>
                    </div>
                    </div>
                    <div className='col-lg-4 mx-auto'>
             <button type="submit" className='backgg my-5 w-100 loginb' >Login</button>
                    </div>
                    </form>
                    <div className="text-center text-light"><p><u>Don't have an account? </u><br></br> Register now!
                    </p>
                    </div>
                    </div>
         
                 
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <div className="register backggg py-5">
                        <h2 className='fw-bold text-center  text-light py-3'>Register</h2>
                        <form>
                          <div className="col-lg-8 col-md-8 col-8 mx-auto">
                            <input type="text" className="form-control mx-auto mt-5 mb-2" placeholder="Name" required />
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Username" required/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Email" required />
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Phone" required/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="password" className="form-control mx-auto mb-2" placeholder="Password" required/>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">
                                <div className="form-check mx-auto">
                               <input type="checkbox" className="form-check-input " id="checkme" />
                                <label className="form-check-label text-light" htmlFor="checkme">Show password?</label>
                                </div>
                                </div>
                                </div>
                                <div className='col-lg-4 mx-auto'>
                                <button type="submit"  className='backgg w-100 my-4 registerb'>Register now</button>
                                </div>
                                </form><div className="text-center text-light">
                                  <p><u>Already have an account? </u><br></br>Login now!
                                  </p>
                                  </div>
                                  </div>
                                  </div>
                                 </div>
                                  </div>
                                  <h3 className='py-5 fs-1 colc text-uppercase text-center'>email us</h3>
                                 <div className='backg my-3 text-center'>
                                     <h3 className='py-5 fs-1 text-white'>Get in Touch</h3>
                                     <form className="row g-5 py-5 container mx-auto">
                                     <div className="col-md-6 ">
                                       
                                       <input type="name" class="form-control" id="inputEmail4" placeholder='Enter Full Name*'/>
                                     </div>
                                     <div className="col-md-6 ">
                                       
                                       <input type="email" class="form-control" id="inputPassword4" placeholder='Email Address'/>
                                     </div>
                                     <div className="col-md-6">
                                       
                                       <input type="subject" class="form-control" id="inputEmail4" placeholder='Subject'/>
                                     </div>
                                     <div className="col-md-6 ">
                                      
                                       <input type="phone_no" class="form-control" id="inputPassword4" placeholder='Phone Number'/>
                                     </div>
                                     
                                     <div className="col-md-12 mx-auto">
                                      
                                     <div class="mb-3 col-lg-6">
                                     
                                     <textarea class="form-control " id="exampleFormControlTextarea1" rows="4" placeholder='Your Messages... '></textarea>
                                   </div>
                                   <div class="d-grid gap-3 my-5 ">
                                     
                                     <button class="btn btn-primary" type="button">Send Message</button>
                                   </div>
                                      
                                     </div>
                                     
                                   </form>
                                   </div>          
                                   </>
  )
}

export default Contact