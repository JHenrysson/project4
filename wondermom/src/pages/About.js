import React from 'react';
import './About.css';


function About() {
    return (
      <>

<div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center" id="aboutjumbotron">
  <div className="container text-center">
  <h1 className="display-2">About us</h1>
  <p className="lead">We want to inspire and motivate to live healthier every day. We’ll be your best friend in your back pocket, coaching you on how to stay fit, eat well, and live more mindfully.</p>
</div>
</div>

      <section className="container-fluid px-0">
        <div className="row align-items-center content">
          <div className="col-md-6 order-2 order-md-1">
            <img src="./images/heart.jpg" alt="" class="img-fluid"></img>
            </div>    
            <div className="col-md-6 text-center order-1 order-md-2">
                <div classNames="row justify-content-center">
                    <div className="col-10 col-lg-8 mb-5 mb-md-0 blurb m-4 m-md-0">
                        <h3>Our mission</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                            beatae, maiores deserunt
                            in voluptatibus
                            aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                            repellat eveniet quidem
                            voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                            autem nam ex deserunt debitis
                            eaque ratione! Nobis, quidem assumenda.</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="row align-items-center content">
            <div className="col-md-6 text-center">
              <div className="row justify-content-center">
              <div className="col-10 col-lg-8 mb-5 mb-md-0 blurb m-4 m-md-0">
                        <h3>The wondermom story</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                            beatae, maiores deserunt
                            in voluptatibus
                            aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                            repellat eveniet quidem
                            voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                            autem nam ex deserunt debitis
                            eaque ratione! Nobis, quidem assumenda.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
            <img src="images/health.jpg" alt="" class="img-fluid"></img>
            </div>
            </div>
        </section>
                
   

     </>
  

      
      );
    }



  export default About;