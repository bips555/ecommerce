import React from 'react'
import { Link } from 'react-router-dom'
import a from '../Data/Coldata'
import b from '../Data/Bdata' 
import c from '../Data/Cdata'
import ff from '../Data/Ddata'

function Home() {
  return (<>
   <div className='container py-5'>
    <div className='row'>
      <div className='col-lg-4 my-auto mx-auto'>
        <div className='box backgg p-5 card border-0'>
          <h3 className='colc text-center mb-3 '>All Electronics Categories</h3>
      <ul className="list-group">
      <Link to="/shop1/mobile"  className="text-decoration-none"><li className="fw-bold colc list-group-item d-flex gap-1 align-items-center justify-content-center"><i class="bi bi-phone"></i> Mobile</li></Link>
      <Link to="/shop2/laptop"  className="text-decoration-none"><li className="gap-1 fw-bold colc list-group-item d-flex align-items-center justify-content-center"><i class="bi bi-laptop"></i>Laptop</li></Link>
      <Link to="/shop3/fridge"  className="text-decoration-none"><li className=" fw-bold colc gap-1 list-group-item d-flex align-items-center justify-content-center"> <i class="bi bi-inbox"></i>Fridge</li></Link>
      <Link to="/shop4/television"  className="text-decoration-none"><li className=" fw-bold gap-1 colc list-group-item d-flex align-items-center justify-content-center"><i class="bi bi-tv"></i> Television</li></Link>
      <Link to="/shop5/watches"  className="text-decoration-none"><li className="fw-bold gap-1 colc list-group-item d-flex align-items-center justify-content-center"><i class="bi bi-watch"></i>Watches</li></Link>
   
                      
                       
</ul>
</div>
</div>
<div className='col-lg-8 my-4'>
<div className='box backgg p-2 card border-0'>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://littletreasury.com/wp-content/uploads/2016/06/slider-watch-collection-the-longines-saint-imier-collection-1600x800.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>The new Standard under favorable watches</h5>
        <p>From $99</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://city-cooling.co.uk/wp-content/uploads/2016/11/slider1.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable fridges</h5>
        <p>From $199</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://s3.medialoot.com/blog-images/WBBD-Image-02.png?mtime=20190213120314" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable phones</h5>
        <p>From $299</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.sonnox.com/sites/default/files/2022-03/ListenHub%20Home%20Page.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable laptops</h5>
        <p>From $399</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.avtex.co.uk/images/TV_Avtex_Slide9_Pro.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable TV's</h5>
        <p>From $599</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

      </div>
    </div>
<div className='row'>
    <div className='col-lg-4 col-md-6 col-12 my-5'> 
    <h3 className='colc fs-7 border-bottom py-3'>Featured products</h3>
{a.map((a)=>(
  <div className="card border-0 shadow-lg mb-3 mx-auto" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={a.img} className="img-fluid rounded-start my-4" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{a.title}</h5>
        <p className="card-text">{a.para}</p>
       
      </div>
    </div>
  </div>
</div>

))}
   
    </div>
   
    <div className='col-lg-4 col-md-6 col-12 my-5 mx-auto' > 
    <h3 className='colc fs-7 border-bottom py-3'>On Sale products</h3>
{b.map((c)=>(
  <div className="card border-0 shadow-lg mb-3 mx-auto" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={c.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{c.title}</h5>
        <p className="card-text">{c.para}</p>
       
      </div>
    </div>
  </div>
</div>

))}
   
    </div>
    <div className='col-lg-4 col-md-6 col-12 my-5 mx-auto'> 
    <h3 className='colc fs-7 border-bottom py-3'>Top rated products</h3>
{c.map((b)=>(
  <div className="card border-0 shadow-lg mb-3 mx-auto" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={b.img} className="img-fluid rounded-start my-2" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{b.title}</h5>
        <p className="card-text">{b.para}</p>
       
      </div>
    </div>
  </div>
</div>

))}
   
    </div>
    </div>
    </div>
  
  <div className='container py-5'>
  <h3 className='colc fs-7 border-bottom py-3'>Flash Sale</h3>
   <div className='row'>
   
    {ff.map((v)=>(
      <div className="col-lg-2 col-md-4 col-sm-6 col-6">
  <div className="card mx-auto my-3"  style={{width: '100%',height:'80%'}}>
    <img src={v.img} className="card-img-top" alt="..."  style={{width: '160px',height:'120px'}}/>
    <div className="card-body">
      <p className="card-text">{v.title}</p>
    </div>
  </div> 
  </div>
  ))}

 </div>        <Link to='/shop' className='mt-3 backgg text-center border-0 w-25 py-2 mx-auto justify-content-center d-flex text-decoration-none'><button className='backgg border-0 fw-bold colc '>Shop Now</button></Link> 

 </div>

   

  
   
       
 
    </> )
}

export default Home