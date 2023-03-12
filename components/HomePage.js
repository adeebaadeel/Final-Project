import React from 'react'
import Navbar from './Navbar'
import homescreen1 from '../images/homescreen1.jpg'
import Rec from '../images/Rectangle1.png';
import Rec2 from '../images/Rectangle6.png';
import Rec3 from '../images/Rectangle7.png';
import gro from '../images/Grocery.png';
import slid1 from '../images/slider1.jpg';
import slid2 from '../images/slider2.jpg';
import slid3 from '../images/slider3.jpg';
import slid4 from '../images/slider4.jpg';
import slid5 from '../images/slider5.jpg';

import bslid1 from '../images/bslider1.jpeg';
import bslid2 from '../images/bslider2.jpeg';
import bslid3 from '../images/bslider3.jpeg';
import bslid4 from '../images/bslider4.jpeg';




const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" style={{height:'450px'}} src={homescreen1} alt="First slide"/>
    </div>
  </div>


  <div className='m-4 '>
  <h4>  <b className='p-3'>Shop By Category</b></h4>
    <div class="input-group m-2 w-25">
    
  <input type="text" class="form-control" placeholder="seacrh by product" aria-label="Username" aria-describedby="basic-addon1" style={{borderRadius:'15px'}}/>
</div>

</div>

<div>

<a href='/Shoppingcart'>
<img src={slid1} class="rounded float-left " alt="..." style={{width:"250px",paddingLeft:"30px",height:"150px"}}/>
<img src={slid2} class="rounded pl-5" alt="..."  style={{width:"250px",paddingLeft:"30px",height:"150px"}}/>
<img src={slid3} class="rounded float-right " alt="..."  style={{width:"250px",paddingLeft:"30px" ,height:"150px"}}/>
<img src={slid4} class="rounded float-left " alt="..." style={{width:"250px",paddingLeft:"30px",height:"150px"}}/>
<img src={slid5} class="rounded pl-5" alt="..."  style={{width:"250px",paddingLeft:"30px",height:"150px"}}/>
<img src={gro} class="rounded float-right " alt="..."  style={{width:"250px",paddingLeft:"30px",height:"150px"}}/>
</a>
</div>

  </div>

  <div className='m-4 mt-5'>
  <h4><b className='p-3'>Popular Items</b></h4>
    <a href='/Shoppingcart'>
    <img src={bslid1} class="rounded float-left " alt="..." style={{width:"25%",paddingLeft:"30px",height:"350px"}}/>

    
<img src={bslid2} class="rounded pl-5" alt="..."  style={{width:"25%",paddingLeft:"30px",height:"350px"}}/>
<img src={bslid3} class="rounded pl-5" alt="..."  style={{width:"25%",paddingLeft:"30px",height:"350px"}}/>

<img src={bslid4} class="rounded float-right " alt="..."  style={{width:"25%",paddingLeft:"30px",height:"350px"}}/>
</a>
</div>


 <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
</div>
  
  )
}

export default HomePage
