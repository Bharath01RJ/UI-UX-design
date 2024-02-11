import React, { useState } from "react";
import logo from "../component/atoms/images/utosia-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./navbars.css";
import bangalore from "../component/atoms/images/8624532_1011.jpg";
import chennai from "../component/atoms/images/9752312_1066.jpg";
import bangkok from "../component/atoms/images/4835020_611.jpg";
import australia from "../component/atoms/images/4172447_523.jpg";
import italy from "../component/atoms/images/4172384_493.jpg";
import amsterdam from "../component/atoms/images/8483392_996.jpg";
// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Payment from "./Payment";
import NavbarComponent from "./atoms/NavbarComponent";
import PaymentSuccess from "./PaymentSuccess";
import FeedBackComponent from "./atoms/FeedBackComponent";

function Navbars() {
  // const [showModal, setShowModal] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  // const showAlertModal = (show) => {
  //   setShowAlert(show);
  // };

  // const showHidePaymentModal = (show) => {
  //   setShowModal(show);
  // };

  return (
    <>
    <div>
      <NavbarComponent />
      <h3 class="ml-4 mt-4" style={{fontWeight:"bold" , marginLeft: "40px"}}>Choose Location</h3><br/>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide carousel-dark"
        data-bs-touch="false"
        data-bs-interval="false"
        
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col">
                  <img id="one" src={bangalore} alt="" />{" "}
                  <button id="location">Bangalore</button>
                </div>
                <div class="col">
                  <img id="one" src={chennai} alt="" />
                  <button id="location">Chennai</button>
                </div>
                <div class="col">
                  <img id="one" src={bangkok} alt="" />
                  <button id="location">Bangkok</button>
                </div>
                <div class="col">
                  <img id="one" src={australia} alt="" />
                  <button id="location">Australia</button>
                </div>
                <div class="col">
                  <img id="one" src={italy} alt="" />
                  <button id="location" class="italy">
                    Italy
                  </button>
                </div>
                <div class="col">
                  <img id="one" src={amsterdam} alt="" />
                  <button id="location">Amsterdam</button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col">
                  <img id="one" src={australia} alt="" />
                  <button id="location">Australia</button>
                </div>
                <div class="col">
                  <img id="one" src={italy} alt="" />
                  <button id="location">Italy</button>
                </div>
                <div class="col">
                  <img id="one" src={amsterdam} alt="" />
                  <button id="location">Amsterdam</button>
                </div>

                <div class="col">
                  <img id="one" src={bangalore} alt="" />
                  <button id="location">Bangalore</button>
                </div>
                <div class="col">
                  <img id="one" src={chennai} alt="" />
                  <button id="location">Chennai</button>
                </div>
                <div class="col">
                  <img id="one" src={bangkok} alt="" />
                  <button id="location">Bangkok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
        class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
          style={{paddingRight:80, paddingBottom:40}}
          
          
          >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
          style={{ paddingLeft:80, paddingBottom:40}}
          
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr
        style={{ width: "1200px", marginLeft: "100px", color: "#DCDCDC" }}
      ></hr>
      <h3 style={{ marginLeft: "40px", fontWeight:"bold" }}>Choosen Location</h3><br/>

      
      <FeedBackComponent/><br/><br/>
      <FeedBackComponent/><br/><br/>
      <FeedBackComponent/><br/><br/>
      </div>
    </>
  );
}

export default Navbars;
