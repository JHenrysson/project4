import React from 'react';
import './Nutrition.css';

function Breakfast() {
    return (
        <>
        <div id="headline2">
            <h1>Breakfast</h1>
        </div>
    
        <div className="spaceing">
        </div>
        
          <div className="container">
          <div className="card-deck">
              <div className="row jusify-content-center">
                  <div className="col-md">
                      <div className="card shadow">
                          <div className="card-img-top">
                              <img src="/images/bk1.jpeg" alt="Breakfast"/>
                              </div>
    
                        <div className="card-body text-center">
                        <h4 className="card-title">Acai Bowl</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        
                        <a href="/Breakfast"className="card-link justify-content-center">Read more</a>
                        </div>
                    </div>
                </div>
    
                    <div className="col-md">
                        <div className="card shadow">
                          <div className="card-img-top">
                          <img src="/images/bk2.jpg" alt="Breakfast2"/>
                              </div>
    
                            <div className="card-body text-center">
                            <h4 className="card-title text-center">Peanut Bowl</h4>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="card-link justify-content-center">Read more</button>
                        </div>
                    </div>
                </div>
    
                <div className="col-md">
                    <div className="card shadow">
                        <div className="card-img-top">
                        <img src="/images/bk3.jpg" alt="Breakfast3"/> 
                            </div>
    
                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Sandwich</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="card-link justify-content-center">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                        <div className="card shadow">
                          <div className="card-img-top">
                          <img src="/images/bk4.jpeg" alt="Breakfast4"/>
                              </div>
    
                            <div className="card-body text-center">
                            <h4 className="card-title text-center">Scrambled Egg</h4>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="card-link justify-content-center">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
        );
      }

  export default Breakfast;