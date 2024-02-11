import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import {
  faCircleCheck,
  // faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Googlepay from "../component/atoms/images/google pay.jpg";
import phonepe from "../component/atoms/images/phonepe.png";
import { Button, Modal } from "react-bootstrap";
import PaymentSuccess from "./PaymentSuccess";
// import PaymentSuccess from "./PaymentSuccess";

function Payment({ showModal, showHidePaymentModal, setShowAlert }) {
  // const [showAlert, setShowAlert] = useState(false);

  // const showAlertModal = (show) => {
  //   setShowAlert(show);
  // };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          showHidePaymentModal(false);
        }}
      >
        <Modal.Header closeButton style={{ height: "40px" }}>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <p
              style={{
                color: "#0B8587",
                fontSize: "18px",
                marginLeft: "10px",
                // marginTop: "10px",
              }}
            >
              UPI Payments
            </p>
            <div
              style={{
                border: "1px solid #707070",
                borderRadius: "10px",
                width: "400px",
                height: "35px",
                marginLeft: "40px",
              }}
            >
              <img
                style={{
                  height: "28px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                }}
                src={Googlepay}
                alt=""
              ></img>
              <FontAwesomeIcon
                style={{
                  height: "23px",
                  marginTop: "5px",
                  marginLeft: "320px",
                }}
                icon={faCircleCheck}
              />
            </div>
            <br />
            <div
              style={{
                border: "1px solid #707070",
                borderRadius: "10px",
                width: "400px",
                height: "35px",
                marginLeft: "40px",
              }}
            >
              <img
                style={{
                  height: "28px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                }}
                src={phonepe}
                alt=""
              ></img>
              <FontAwesomeIcon
                style={{
                  marginLeft: "325px",
                  height: "23px",
                  marginTop: "4px",
                }}
                icon={faCircleCheck}
              />
            </div>
            <hr></hr>
            <p
              style={{
                color: "#0B8587",
                fontSize: "18px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              {" "}
              Add Other UPI
            </p>
            <div
              style={{
                border: "1px solid #0B8587",
                borderRadius: "10px",
                width: "400px",
                height: "35px",
                marginLeft: "40px",
                color: "#0B8587",
              }}
            >
              <p style={{ textAlign: "center", marginTop: "5px" }}>+ New UPI</p>
            </div>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{
              border: "#097374",
              backgroundColor: "#0B8587",
              width: "156px",
              height: "35px",
              marginRight: "150px",
            }}
            onClick={() => {
              showHidePaymentModal(false);
              setShowAlert(true);
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {showAlert && (
        <PaymentSuccess showAlert={showAlert} showAlertModal={showAlertModal} />
      )} */}
    </>
  );
}

export default Payment;
