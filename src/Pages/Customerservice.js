import React from 'react'

import sdata from '../Data/Sdata'
function Customerservice() {
  return (
    <>
   <div className='container my-5'>
    <div className='row'>
      <h1 className='my-5 fw-bold text-center colc text-uppercase'>Welcome to Electronics Nepal Service</h1>
    
     { sdata.map((a)=>( <div className='col-lg-3 col-md-6 col-12'>
    <div className="card shadow-lg border-0 mx-auto my-2" style={{width: '18rem'}}>
  <img src={a.img} className="card-img-top w-25 mx-auto" alt="..." />
  <div className="card-body">
    <p className="card-text text-center">{a.title}</p>
  </div>
</div>



     </div>))
    
    
}
<h2 className='my-5 fw-bold text-center colc text-uppercase'>TrACK MY ORDER</h2>

<form className="d-flex my-5" role="search">
     <input className="form-control me-2" type="search" placeholder="Search for Questions?" aria-label="Search" />
     <button className="btn btn-outline-success" type="submit">Search</button>
   </form>
   <ul className='fw-bold colc my-3 lh-lg'>
  <li> My parcel has been reported missing. What now?</li>
  <li>How can I track my Pick-up point order?</li>
  <li>Can I change my shipping address after I have placed my order?</li>
  <li>What do I do if my order is delayed?</li>
  <li>What are the available Pickup Point Centers?</li>
  <li>I ordered multiple items but I have received only one item so far. What needs to be done?</li>
  <li>What type of products can be collected through Daraz pick-up point?</li>
  <li>Can I open and check the parcel before receiving and paying the rider?</li>
  <li>I missed my package delivery, what should I do now?</li>
  <li>Will somebody contact me before delivering the package to my location?</li>
  </ul>
    </div>
   </div>
   <div className='container my-5'>
<div className='row'>
  <h2 className='text-center colc backgg m-2 text-uppercase'>How to Return a product</h2>
  <div className='col-lg-6 col-md-6 col-12 my-5 shadow-lg'>
    <ul className=' fw-bold colc lh-lg'>
   <li className='border-bottom'>1.Sign in to your electronics nepal Account, select My Orders.</li>
   <li className='border-bottom'>2.Select the order you wish to return and click on the Manage Order button.</li>
   <li className='border-bottom'>3.Click on Return Items.</li>
   <li className='border-bottom'>4.Fill in the Return Form. The available return options pickup/drop-off will be displayed in this form.</li>
   <li className='border-bottom'>5.Pack your  parcel securely, with the product in the original and undamaged manufacturer's packaging as delivered to you and secure the Return Label on top of the return package.</li>
   <li className='border-bottom'>6.Head to your nearest drop-off point or wait for collection by our pick-up service.</li>
    </ul>
  </div>
  <div className='col-lg-6 my-5 col-md-6 col-12'>
 <div className="card shadow-lg">
  <div className="card-body">
    <h5 className="card-title">Conditions for Returns</h5>
  
    <p className="card-text"><ul className='  colc lh-lg' style={{fontSize:'12px'}}>
   <li>1.The product must be unused, unworn, unwashed and without any flaws. Fashion products can be tried on to see if they fit and will still be considered unworn. If a product is returned to us in an inadequate condition, we reserve the right to send it back to you.
The product must include the original tags, user manual, warranty cards, freebies and accessories.
The product must be returned in the original and undamaged manufacturer packaging / box. If the product was delivered in a second layer of  packaging, it must be returned in the same condition with return shipping label attached. Do not put tape or stickers on the manufacturers box..</li>
   <li>2.The product must include the original tags, user manual, warranty cards, freebies and accessories..</li>
   <li>3.The product must be returned in the original and undamaged manufacturer packaging / box. If the product was delivered in a second layer of  packaging, it must be returned in the same condition with return shipping label attached. Do not put tape or stickers on the manufacturers box.</li>
  
    </ul></p>

  </div>
</div>

</div>
  </div>
</div>
   
   </>
  )
}

export default Customerservice