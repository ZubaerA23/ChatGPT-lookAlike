import React from 'react';
import './style.css';



function App() {
 return(
   <div className = "main">
     <div className = "left">
       <p>ZubaerGPT<span>•</span></p>
       <h1 data-text = "Welcome to ZubaerGPT"></h1>
       
       
       </div>
      <div className = "right">
          <h1>Get Started</h1>
          <div className = "mini">
          <button className ="button_one"> Sign up </button>
          <button className = "button_two"> Log in </button>
          </div>
        </div>
   </div>
 )
}

export default App;
