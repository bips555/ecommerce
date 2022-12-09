import React from 'react'
import Founder from '../Data/Founder'
function About() {
  return (
  <div className='container'>
    <div className='row my-5 border-bottom pb-5 border-dark'>
      <h2 className='fw-bold text-center colc py-5 text-uppercase'>We handle our customers with care...</h2>
      <div className='col-lg-6 col-md-12'>
        <img className='w-100' src='https://us.123rf.com/450wm/pixelsaway/pixelsaway1906/pixelsaway190600159/pixelsaway190600159.jpg?ver=6'/>
      </div>
      <div className='col-lg-6 col-md-12  text-center '>
        <h3 className='fw-bold text-center colc py-5 text-uppercase'>Our story</h3>
        
        <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia adipisci tempore sint labore odit omnis quae voluptate a quisquam, corporis atque, itaque nobis numquam repellendus cupiditate consectetur aliquam, eum praesentium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia adipisci tempore sint labore odit omnis quae voluptate a quisquam, corporis atque, itaque nobis numquam repellendus cupiditate consectetur aliquam, eum praesentium.</p>

      </div>
    </div>
    <div className='row my-5 border-bottom border-dark pb-5'>
    
    
      <div className='col-lg-6 col-md-12'>
        <h3 className='fw-bold text-center colc mt-5 text-uppercase'>Our vision</h3>
        <p className='fw-bold py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia adipisci tempore sint labore odit omnis quae voluptate a quisquam, corporis atque, itaque nobis numquam repellendus cupiditate consectetur aliquam, eum praesentium.</p>
<ul className='list-unstyled text-center colc'>
  <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>
 
  <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>
 
  <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>
  
  <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>
  
</ul>
       
      </div>
      <div className='col-lg-6 col-md-12'>
        <img className='w-100 pt-5' src='https://thumbs.dreamstime.com/b/our-vision-drawn-white-brick-wall-d-inscription-modern-illustation-blue-arrow-hand-icons-around-brickwall-89018617.jpg'/>
      </div>
    </div>
    <div className='row mb-5 pb-5 border-bottom border-dark'>
    
    <div className='col-lg-6 col-md-12'>
        <img className='w-100 pt-5' src='http://www.qacaacademy.com/wp-content/uploads/2021/12/mission.jpg'/>
      </div>
      <div className='col-lg-6 col-md-12'>
        <h3 className='fw-bold text-center colc py-5 text-uppercase'>Our mission</h3>
        <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Mollitia adipisci tempore sint labore odit omnis quae voluptate a quisquam, corporis atque, itaque nobis numquam repellendus cupiditate consectetur aliquam, eum praesentium.</p>
        <ul className='list-unstyled colc'>
        <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>
 
 <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>

 <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>
 
 <li className='d-flex gap-1 justify-content-center'> <i class="bi bi-magic"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</p></li>
  
</ul>
      
      </div>
    </div>
    <h2 className='text-center my-5 fw-bold text-uppercase'>Meet our Founders</h2>
    <div className='row justify-content-center'>
    { Founder.map((a)=>(
      <div className='col-lg-3 col-md-6 col-12 col-sm-6 my-2'>
        <div className='img-box'>
        <img  src={a.img} className='w-100' style={{height:'350px'}} />
          <div className='text-box'>
            <h3 className='text-center my-5'>{a.title}</h3>
            <h4 className='text-center my-5'>{a.post}</h4>

          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
  )
}

export default About