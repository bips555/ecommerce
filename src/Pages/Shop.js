import React from 'react'
import { Link } from 'react-router-dom'
import laptopdata from '../Data/LaptopData'
import watchdata from '../Data/Watchdata'
import fridgedata from '../Data/Fridgedata'
import mobiledata from '../Data/Mobiledata'
import televisiondata from '../Data/Televisiondata'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import icons from '../Data/Iconsdata'


function Shop() {
  return (<>
    <div className='container py-5'>
    <h1 className='fw-bold text-center colc text-uppercase'>What do you wanna shop?</h1>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{    
        400: {
          width: 400,
          slidesPerView: 2,
        },
        640: {
          width: 640,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      
    >
         {icons.map((a)=>(
      
      <SwiperSlide>
     <Link to={`/shop${a.num}/${a.name}`}><div className="text-center backgg rounded-circle w-50 shadow-lg border-2" style={{margin:'100px 0px'}} >
 <img src={a.img} className="card-img-top " alt="..." style={{width: '100%',height:'100%'}}/>
 
</div>  </Link>   
      </SwiperSlide>
       ))}
  
    </Swiper>
    
         <h3 className='text-lg-start fw-bold py-5 colc'>Laptops</h3>
      <div className='row'>
     
        {laptopdata.slice(0,3).map((a)=>(
          <div className='col-lg-4 col-md-6 col-12 my-2'>
     <div className="card  border-0 shadow-lg" style={{width: '100%',height:'100%'}} >
  <img src={a.thumbnail} className="card-img-top mx-auto" alt="..." style={{width: '300px',height:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title text-center">{a.title}</h5>
    <p className="card-text text-center fw-bold">price:{a.price}</p>
    <div className="card-text text-center fw-bold">Brand:{a.brand}</div>
  </div>
</div>

</div>
         
        ))}
      </div>
      <Link to='/shop2/laptop' className='mt-3 backgg text-center border-0 w-25 py-2 mx-auto justify-content-center d-flex text-decoration-none'><button className='backgg border-0 fw-bold colc '>View more</button></Link> 

    </div>
    <div className='container py-5'>
         <h3 className='text-lg-start fw-bold py-5 colc'>Watches</h3>
      <div className='row'>
     
        {watchdata.slice(0,3).map((a)=>(
          <div className='col-lg-4 col-md-6 col-12 col-md-6 col-12 my-2'>
     <div className="card  border-0 shadow-lg " style={{width: '100%',height:'100%'}}>
  <img src={a.thumbnail} className="card-img-top mx-auto" alt="..." style={{width: '300px',height:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title ">{a.title}</h5>
    <p className="card-text text-center fw-bold">price:{a.price}</p>
    <div className="card-text text-center fw-bold">Brand:{a.brand}</div>
  </div>
</div>

</div>
         
        ))}
      </div>
      <Link to='/shop5/watches' className='mt-3 backgg text-center border-0 w-25 py-2 mx-auto justify-content-center d-flex text-decoration-none'><button className='backgg border-0 fw-bold colc'>View more</button></Link> 

    </div>
    <div className='container py-5'>
         <h3 className='text-lg-start fw-bold py-5 colc'>Mobile</h3>
      <div className='row'>
     
        {mobiledata.slice(0,3).map((a)=>(
          <div className='col-lg-4 col-md-6 col-12 col-md-6 col-12 my-2'>
     <div className="card  border-0 shadow-lg" style={{width: '100%',height:'100%'}}>
  <img src={a.thumbnail} className="card-img-top mx-auto" alt="..." style={{width: '300px',height:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title">{a.title}</h5>
    <p className="card-text text-center fw-bold">price:{a.price}</p>
    <div className="card-text text-center fw-bold">Brand:{a.brand}</div>
  </div>
</div>

</div>
         
        ))}
      </div>
      <Link to='/shop1/mobile' className='mt-3 backgg text-center border-0 w-25 py-2 mx-auto justify-content-center d-flex text-decoration-none'><button className='backgg border-0 fw-bold colc'>View more</button></Link> 

    </div>
    <div className='container py-5'>
         <h3 className='text-lg-start fw-bold py-5 colc'>Fridge</h3>
      <div className='row'>
     
        {fridgedata.slice(0,3).map((a)=>(
          <div className='col-lg-4 col-md-6 col-12 col-md-6 col-12 my-2'>
     <div className="card  border-0 shadow-lg"style={{width: '100%',height:'100%'}} >
  <img src={a.thumbnail} className="card-img-top mx-auto" alt="..." style={{width: '300px',height:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title">{a.title}</h5>
    <p className="card-text text-center fw-bold">price:{a.price}</p>
    <div className="card-text text-center fw-bold">Brand:{a.brand}</div>
  </div>
</div>

</div>
         
        ))}
      </div>
      <Link to='/shop3/fridge' className='mt-3 backgg text-center border-0 w-25 py-2 mx-auto justify-content-center d-flex text-decoration-none'><button className='backgg border-0 fw-bold colc'>View more</button></Link> 

    </div>
    <div className='container py-5'>
         <h3 className='text-lg-start fw-bold py-5 colc'>Television</h3>
      <div className='row'>
     
        {televisiondata.slice(0,3).map((a)=>(
          <div className='col-lg-4 col-md-6 col-12 my-2'>
     <div className="card  border-0 shadow-lg"style={{width: '100%',height:'100%'}} >
  <img src={a.thumbnail} className="card-img-top mx-auto" alt="..." style={{width: '300px',height:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title">{a.title}</h5>
    <p className="card-text text-center fw-bold">price:{a.price}</p>
    <div className="card-text text-center fw-bold">Brand:{a.brand}</div>
  </div>
</div>

</div>
         
        ))}
      </div>
      <Link to='/shop4/television' className='mt-3 backgg text-center border-0 w-25 py-2 mx-auto justify-content-center d-flex text-decoration-none'><button className='backgg border-0 fw-bold colc'>View more</button></Link> 

    </div>
</>)
}

export default Shop