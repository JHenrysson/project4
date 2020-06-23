import React from 'react';
import './Home.css'
import BootstrapCarousel from  '../components/carousel/BootstrapCarousel'
import {Link} from "react-router-dom";

function Home(props) {

  if (!props.getUser()) {

  
    return (

    <>

     <div id="topjumbotron" className="jumbotron jumbotron-fluid text-white d-flex justify-content-center align-items-center">
       <div id="textOnTop" className="container text-center">
         <h1>For Every Mom</h1>
         <h2>Join now!</h2>
         <Link to="signup" id="buttonHome" className="btn btn-lg">Sign up</Link>
       </div>
     </div>

   
      
  
  <section id="services" className="bg-white">
    <div className="container bg-white p-3">
      <div className="row text-center px-5">
        <div className="col-md-4 services">
        <li className="list-inline-item"></li><i class="far fa-heart fa-2x"></i>
       <h4 className="pt-3">POSTNATAL EXERCISES</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-md-4 services">
        <li className="list-inline-item"></li><i class="far fa-lemon fa-2x"></i>
       <h4 class="pt-3">HEALTHY RECIPES</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-md-4 services">
        <li className="list-inline-item"></li><i class="far fa-star fa-2x"></i>
       <h4 class="pt-3">PROGRESS BAR</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
         ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    </section>

    
<section id="home-extra" className="p-5">
      <div className="dark-overlay">
        <div className="row">
          <div className="col">
            <div className="container py-5">
              <h1 id="ready">Are You Ready to Get Started?</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section id="fluidbanner">
    <div className="container-fluid bg-white py-5">
      <div className="container">
      <div className="row">
        <div className="col-md-6 px-5 align-self-center">
          <h3 className="text-dark font-weight-bold">ABOUT THE APP</h3>
          <p>Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
            dlolo Lorem ipsus dolor lorem ipsis dlolo
            
            Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
            dlolo Lorem ipsus dolor lorem ipsis dlolo</p>
        </div>
        <div className="col-md-6">
        <img src="./images/phone.jpg" alt="" class="img-fluid"></img>
        </div>
      </div>
    </div>
    </div>
  </section>

      <section id="fluidbanner2">
        <div className="container-fluid bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-2 order-md-1">
        <img src="./images/iphone2.jpg" alt="" class="img-fluid"></img>
        </div>
  
        <div className="col-md-6 order-1 order-md-2 px-5 align-self-center">
          <h3 className="text-dark font-weight-bold">ABOUT THE APP</h3>
          <p>Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
            dlolo Lorem ipsus dolor lorem ipsis dlolo
            
            Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
            dlolo Lorem ipsus dolor lorem ipsis dlolo</p>
        </div>
        </div>
        </div>
        </div>

  </section>


  
 
  <div className="carusel">
    <div className="container-fluid bg-white text-center pt-5">

      <h2 className="text-center align-items-center text-dark pt-2 ">SUCCESS STORIES</h2>
      <p className="lead text-dark">See what other Wondermoms have to say!</p>

        <div className="row justify-content-center">
       
          
            <div className="col-md-5 mb-5">
          <BootstrapCarousel></BootstrapCarousel>  
       </div>
       </div>
       </div>
      </div>
  
    
 
   </>

    );
  } else {
    return (
      <div>
        <div id="topjumbotron" class="jumbotron jumbotron-fluid text-white d-flex justify-content-center align-items-center">
          <div id ="textOnTop" className="container text-center">
            <h1>Welcome!</h1>
            <br />
            <Link to="programs" class="btn btn-lg btn-info">Start Workout!</Link>
          </div>
        </div>
      </div>
    )
  }
}

  export default Home;