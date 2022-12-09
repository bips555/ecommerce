import React from 'react'
import { useParams } from 'react-router-dom'
import laptopdata from '../Data/LaptopData'

function Laptop() {
    let {laptop}=useParams()
  return (
    <>
    <div className='container py-5'>
<div className='row'>
  <h1 className='fw-bold text-center colc text-uppercase my-5'>Search for your preferred Laptop </h1>
  <div className='col-lg-4 col-md-6 col-12 my-5 mx-auto'>
  <div id="carouselExampleCaptions" className="carousel slide backgg shadow-lg bg-body rounded py-2" data-bs-ride="false">
  <div className="carousel-indicators backggg">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner fw-bolder " >
    <div className="carousel-item active">
      <img src="https://static-01.daraz.com.np/p/463576841e26f9844bb8db38026de58c.jpg" className="d-block w-100" alt="..." style={{height:'400px'}}/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i5.walmartimages.com/asr/9e36979a-50ba-4b40-9a1c-5fad95c0cdfd.a64d3a7fc882ece7d15a9481a7e8d2fa.jpeg" className="d-block w-100" alt="..."  style={{height:'400px'}}/>
      <div className="carousel-caption d-none d-md-block">
    
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i5.walmartimages.com/asr/323a5b34-669e-4c8d-9a1f-c2ad73e3b15e.23b625e851179b54b0af5e7045347e79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" className="d-block w-100" alt="..."  style={{height:'400px'}}/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev backgg" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next backgg" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

  <div className='col-lg-8 col-md-6 col-12 my-5 mx-auto backggg py-5 'id='123'>
  <form>
                          <div className="col-lg-8 col-md-8 col-8 mx-auto ">
                            <input type="text" className="form-control mx-auto mt-5 mb-2" placeholder="Enter brand of laptop" required />
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Enter Ram" required/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Enter processor" required />
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Enter price range" required/>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">
                              
                                </div>
                                </div>
                                <div className='col-lg-4 mx-auto'>
                                <button type="submit"  className='backgg w-100 my-4 registerb'>Buy now</button>
                                </div>
                                </form>
  </div>
  </div>
</div>
   
    <div className='container py-5'>
    <h3 className='text-lg-start fw-bold py-5'>Laptops</h3>
 <div className='row'>

   {laptopdata.map((a)=>(
     <div className='col-lg-4 col-md-6 col-12 col-md-6 col-12  my-2'>
<div className="card  border-0 shadow-lg"style={{width: '100%',height:'100%'}} >
<img src={a.thumbnail} className="card-img-top mx-auto" alt="..." style={{width: '300px',height:'300px'}}/>
<div className="card-body colc text-center">
<h5 className="card-title">{a.title}</h5>
<p className="card-text text-center fw-bold">Price:{a.price}</p>
<p className="card-text text-center fw-bold">Brand:{a.brand}</p>
<p className="card-text text-center fw-bold">Rating:{a.rating}</p>
<p className="card-text text-center fw-bold">Stock:{a.stock}</p>
<p className="card-text text-center fw-bold">DiscountPercentage:{a.discountPercentage}</p>
<a href='#123' className=' text-decoration-none'><button className='mx-auto colc backgg border-0 shadow-lg p-2 card'>Buy Now</button></a>
</div>
</div>

</div>
    
   ))}
  
 </div>
</div>
</>
  )
}

export default Laptop