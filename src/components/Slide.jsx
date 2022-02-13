import React from 'react';
import {Link} from 'react-router-dom';
import slide from './../img/bg_3.jpg';

const Slide = () => {
    return (
        <>
             <div className="hero overlay" style={{ backgroundImage: `url(${slide})`, }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 ml-auto">
            <h1 className="text-white">World Cup Event</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
            <div id="date-countdown"></div>
            <p>
              <Link to="#" className="btn btn-primary py-3 px-4 mr-3">Book Ticket</Link>
              <Link to="#" className="more light">Learn More</Link>
            </p>  
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default Slide;