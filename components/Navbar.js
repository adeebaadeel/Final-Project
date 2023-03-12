import React from 'react'
import norific from '../images/notificationicon.png';
import loc from '../images/locationicon.png';
import carrrt from '../images/carticon.png';




const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/HomePage">
  <h3 style={{color:'#54B435'}}>SAYLANI WELFARE</h3>
     <p  style={{color:'#2F58CD'}} >ONLINE MARKET PLACE</p>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      

    
    </ul>
   
  
  <div className='p-4'>
   <img src={carrrt} className="" alt="saylani welfare" style={{padding:'10px'}}/>
    <img src={loc} className="" alt="saylani welfare" style={{padding:'10px'}}/>
    <img src={norific} className="" alt="saylani welfare" style={{padding:'10px'}}/>
    </div> 
  

  


    
  </div>
</nav> 
    </div>
  )
}

export default Navbar
