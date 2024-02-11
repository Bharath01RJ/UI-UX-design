import React, { useState } from "react";
import InputComponent from "./atoms/inputComponent/InputComponent";
import logo from "../component/atoms/images/utosia-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import NavbarComponent from "./atoms/NavbarComponent";
import { Card } from "react-bootstrap";
import ButtonComponent from "./atoms/buttoncomponent/ButtonComponent";
import CardComponent from "./atoms/CardComponent";
import PaymentPolicyModal from "./PaymentPolicyModal";
function BookingsAndHistory() {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const navigateToPolicyModal = () => {
    setShowPolicyModal(true);
  };

  const showHidePolicyModal = () => {
    setShowPolicyModal(false);
  };
  return (
    <>
      <NavbarComponent />

      <h3 style={{ fontWeight: "bold", marginLeft: 60 }}>My Bookings</h3>
      <div className="d-flex justify-content" style={{ marginLeft: 170 }}>
        <CardComponent
          background={"#07595B"}
          onBtnClick={navigateToPolicyModal}
        />
        <CardComponent
          background={"#07595B"}
          onBtnClick={navigateToPolicyModal}
        />
        <CardComponent
          background={"#07595B"}
          onBtnClick={navigateToPolicyModal}
        />
      </div>
      <hr />
      <h3 style={{ fontWeight: "bold", marginLeft: 60 }}>History</h3>
      <div className="d-flex justify-content" style={{ marginLeft: 170 }}>
        <CardComponent background={"#AEAEAE"} />
        <CardComponent background={"#AEAEAE"} />
        <CardComponent background={"#AEAEAE"} />
      </div>
      <div className="d-flex justify-content" style={{ marginLeft: 170 }}>
        <CardComponent background={"#AEAEAE"} />
        <CardComponent background={"#AEAEAE"} />
        <CardComponent background={"#AEAEAE"} />
      </div>
      <div className="d-flex justify-content" style={{ marginLeft: 170 }}>
        <CardComponent background={"#AEAEAE"} />
        <CardComponent background={"#AEAEAE"} />
        <CardComponent background={"#AEAEAE"} />
      </div>
      {showPolicyModal && (
        <PaymentPolicyModal
          showPolicyModal={showPolicyModal}
          showHidePolicyModal={showHidePolicyModal}
        />
      )}
    </>
  );
}

export default BookingsAndHistory;
