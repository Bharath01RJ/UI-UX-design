import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function InputComponent({ text, logo }) {
  console.log(logo);
  return (
    <div>
      <div>
        <input
          type={text}
          style={{
            width: "250px",
            height: "30px",
            borderColor: "##A1A7B0+ ",
            fontSize: "15px",
            paddingLeft: "10px",
          }}
          placeholder={text}
        ></input>
       
      </div>
    </div>
  );
}

export default InputComponent;
