import React from "react";

function ButtonComponent({ button, background, onBtnClick = () => {} }) {
  return (
    <>
      <div>
        <button
          style={{
            border: "#064D4F",
            background: background,
            borderRadius: "10px",
            color: "white",
            width: "250px",
            height: "35px",
          }}
          onClick={onBtnClick}
        >
          {" "}
          {button}
        </button>
      </div>
    </>
  );
}

export default ButtonComponent;
