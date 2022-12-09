import React from 'react'
import { useParams } from 'react-router-dom'
import televisiondata from '../Data/Televisiondata'

function Television() {
    let {television}=useParams()
    return (
      <>
        <div className='container py-5'>
<div className='row'>
  <h1 className='fw-bold text-center colc text-uppercase my-5'>Search for your preferred television </h1>
  <div className='col-lg-4 col-md-6 col-12 my-5 mx-auto'>
  <div id="carouselExampleCaptions" className="carousel slide backgg shadow-lg bg-body rounded py-2" data-bs-ride="false">
  <div className="carousel-indicators backggg">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner fw-bolder " >
    <div className="carousel-item active">
      <img src="https://static-01.daraz.com.np/p/12715b1dfb52aee465398149a267fbcd.jpg" className="d-block w-100" alt="..." style={{height:'400px'}}/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static-01.daraz.com.np/p/f2f1b5f1df2f4f5a2c44da721b768a94.jpg" className="d-block w-100" alt="..."  style={{height:'400px'}}/>
      <div className="carousel-caption d-none d-md-block">
    
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static-01.daraz.com.np/p/a554d6af77af2b50388d76a6ea3930df.jpg" className="d-block w-100" alt="..."  style={{height:'400px'}}/>
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

  <div className='col-lg-8 col-md-6 col-12 my-5 mx-auto backggg py-5' id='123'>
  <form>
                          <div className="col-lg-8 col-md-8 col-8 mx-auto ">
                            <input type="text" className="form-control mx-auto mt-5 mb-2" placeholder="Enter brand of Television" required />
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Enter Display Type" required/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Enter Screen Resolution" required />
                            </div>
                            <div className="col-lg-8 col-md-8 col-md-8 col-8 mx-auto"><input type="text" className="form-control mx-auto mb-2" placeholder="Enter Screen Size" required/>
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
        <h3 className='text-lg-start fw-bold py-5'>Television</h3>
     <div className='row'>
    
       {televisiondata.map((a)=>(
         <div className='col-lg-4 col-md-6 col-12 col-md-6 col-12 my-2'>
    <div className="card  border-0 shadow-lg"style={{width: '100%',height:'100%'}} >
 <img src={a.thumbnail} className="card-img-top mx-auto" alt="..." style={{width: '300px',height:'300px'}}/>
 <div className="card-body colc text-center">
   <h5 className="card-title text-center">{a.title}</h5>
   <p className="card-text text-center fw-bold">price:{a.price}</p>
   <div className="card-text text-center fw-bold">Brand:{a.brand}</div>
   <p className="card-text text-center fw-bold">Rating:{a.rating}</p>
<p className="card-text text-center fw-bold">Stock:{a.stock}</p>
<p className="card-text text-center fw-bold">DiscountPercentage:{a.discountPercentage}</p>
<a href='#123'  className=' text-decoration-none'><button className='mx-auto colc backgg border-0 shadow-lg p-2 card'>Buy Now</button></a>
 </div>
</div>
</div>


        
       ))}
       
     </div>
   </div>
   </>  )
}

export default Television