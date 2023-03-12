
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import FirstScreen from './components/FirstScreen';
import HomePage from './components/HomePage';
import Shoppingcart from './components/Shoppingcart';
import Payment from './components/Payment';
import Profile from './components/Profile';

function App() {
  return (
    <div>
     
     <BrowserRouter>
  
  <Routes>

    <Route index path="/" element={<FirstScreen />}/>

    <Route exact path="/Login" element={<Login />}/>
  
    <Route exact path="/SignUp" element={<SignUp />} />

    <Route exact path="/HomePage" element={<HomePage />} />

    <Route exact path="/Shoppingcart" element={<Shoppingcart />} />

    <Route exact path="/Payment" element={<Payment />} />
    
    <Route exact path="/Profile" element={<Profile />} />

    
    
  </Routes>
  </BrowserRouter>
     
    </div>

    
  );
}

export default App;
