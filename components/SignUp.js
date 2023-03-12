import React from 'react'

const SignUp = () => {
  return (
    <div className='SignUp m-5 LoginPage'>
    <form className='mt-5'>
    <h1 style={{color:'#54B435'}}>SAYLANI WELFARE</h1>
     <h4  style={{color:'#2F58CD'}}>ONLINE MARKET PLACE</h4>



<div className="form-group ">
    <input type="text" className="form-control " id="exampleUserName" placeholder="UserName" required/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control " id="exampleContact" placeholder="Contact" required/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <input type="password" className="form-control " id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
  <label class="form-check-label" for="inlineRadio1">Sale</label>
</div>
 
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" for="inlineRadio2">Purchase</label>
</div>

<div className="form-group">
<a href='/Login' class="btn btn-success btn-mg mt-3">Sign Up</a>

</div>
</form>
</div>  
  )
}

export default SignUp
