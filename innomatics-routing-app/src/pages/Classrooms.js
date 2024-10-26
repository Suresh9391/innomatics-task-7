import React from 'react';
import './Classrooms.css';

const Classrooms = () => {
  return (
    <div className="classroom-section pt-5 pb-5" >
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="classroom-heading">Our Classrooms</h1>
        </div>
        <div className="col-12 col-lg-4">
          <div className="classroom-card mb-3">
            <img
              src="https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5450-scaled/2374760138.jpg"
              className="classroom-card-image w-100"
            />
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="wcu-card  mb-3">
            <img
              src="https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5414-scaled/2727721008.jpg"
              className="classroom-card-image w-100"
            />
          </div>
        </div>    
        <div className="col-12 col-lg-4">
          <div className="classroom-card ">
            <img
              src=" https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5452-scaled/2408469614.jpg"
              className="classroom-card-image w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Classrooms;
