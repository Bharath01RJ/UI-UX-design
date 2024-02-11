import React from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import ButtonComponent from "./atoms/buttoncomponent/ButtonComponent";

function PaymentPolicyModal({ showPolicyModal, showHidePolicyModal }) {
  return (
    <div>
      <Modal
        show={showPolicyModal}
        onHide={() => {
          showHidePolicyModal();
        }}
      >
        <ModalHeader closeButton>
          <ModalTitle>Payment Policy</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <div style={{overflowY:'auto', height:'250px'}}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet
          </p>
          </div>
          <div style={{marginLeft:110}}>
          <ButtonComponent    background={"#07595B"} onBtnClick={()=> {
            showHidePolicyModal();
          }}  button={'Okay'} /></div>
          
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PaymentPolicyModal;
{/* <button
            onClick={() => {
              showHidePolicyModal();
            }}
            sty
          >
            Okay
          </button> */}