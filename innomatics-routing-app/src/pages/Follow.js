import React from 'react';
import './Follow.css';

const Follow= () => {
    return(
        <>
        <div className="follow-us-section pt-5 pb-5">
         <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="follow-us-section-heading">Follow Us</h1>
            </div>
            <div class="col-12">
              <div class="d-flex flex-row justify-content-center">
                <div class="follow-us-icon-container">
                  <i class="fab fa-twitter icon"></i>
                </div>
                <div class="follow-us-icon-container">
                  <i class="fab fa-instagram icon"></i>
                </div>
                <div class="follow-us-icon-container">
                  <i class="fab fa-facebook icon"></i>
                </div>
                <div class="follow-us-icon-container">
                  <i class="fa-brands fa-linkedin icon"></i>
                </div>
                <div class="follow-us-icon-container">
                  <i class="fa-brands fa-youtube icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <img
                src="https://www.innomatics.in/wp-content/uploads/2023/01/innomatics-footer-logo.png"
                class="image" alt=""
              />
              <div class="d-flex flex-row justify-content-center">
                <i class="fa-solid fa-envelope icon mt-2"></i>
                <p class="footer-section-mail-id ml-3">info@innomatics.in</p>
              </div>
              <div class="d-flex flex-row justify-content-center">
                <i class="fa-solid fa-phone icon mr-4 "></i>
                <i class="fa-brands fa-whatsapp icon"></i>
              </div> 
              <p class="footer-section-contact mt-3">+91-18004126092/+91-9951666671</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-container">
       <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="text-center d-flex flex-row justify-content-center">
              <i class="fa-regular fa-copyright mr-2 mt-3"></i>
              <p class="footer-para mt-3">2024 Innomatics Research Labs Pvt Ltd,All rights reserved.</p>
            </div>
          </div>
        </div>
       </div>
      </div>
      </>
    );
}
export default Follow;