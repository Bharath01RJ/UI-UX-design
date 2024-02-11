import React from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";

function PaymentSuccess({ showAlert, showAlertModal }) {
  return (
    <>
      <div>
        <Modal
          show={showAlert}
          onHide={() => {
            showAlertModal(false);
          }}
        >
          <ModalBody>
            <lottie-player
              src="https://lottie.host/3c33463a-358e-4549-9e15-a74006287bac/LTyHin4RVI.json"
              background="transparent"
              speed="1"
              width="200px"
              height="200px"
              direction="1"
              mode="normal"
              loop
              autoplay
            ></lottie-player>

            <h3 style={{ textAlign: "center" }}>Payment successful</h3>
            <Button
              onClick={() => {
                showAlertModal(false);
              }}
              style={{
                marginLeft: 180,
                width: 100,
                backgroundColor: "#0B8587",
                border: "1px solid #097374",
                borderRadius: 8,
              }}
            >
              OK
            </Button>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default PaymentSuccess;
