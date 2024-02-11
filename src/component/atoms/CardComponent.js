import React from "react";
import { Card } from "react-bootstrap";
import ButtonComponent from "./buttoncomponent/ButtonComponent";

function CardComponent({ background, onBtnClick = () => {} }) {
  return (
    <>
      <div>
        <Card
          className="ms-4"
          style={{
            width: "18rem",
            marginTop: "30px",
            borderRadius: "20px",
            height: "14rem",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              standard pack
            </Card.Title>
            <p style={{ fontSize: "40px", textAlign: "center" }}>₹ 4,500 /-</p>
            <p style={{ textAlign: "center", color: "#000C0D" }}>05 Dec 2022</p>
            <ButtonComponent
              button={"cancel"}
              background={background}
              onBtnClick={onBtnClick}
            />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CardComponent;
