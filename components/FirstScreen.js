import React from 'react';
import logo from '../images/Logo.png';


const FirstScreen = () => {
  return (
    <div className='App'>
         <img src={logo} className="" alt="saylani welfare" style={{marginTop:'100px'}}/>
     <h1 style={{color:'#54B435'}}>SAYLANI WELFARE</h1>
     <h4  style={{color:'#2F58CD'}}>ONLINE MARKET PLACE</h4>
     <a href='/Login' class="btn btn-success">Get Started</a>
    </div>
  )
}

export default FirstScreen
