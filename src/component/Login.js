import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "./atoms/inputComponent/InputComponent";
import image from "./atoms/images/Group 274@2x.jpg";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <div className="background"></div>
        <img
          className="image"
          src={image}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            left: -337,
            top: "20%",
            // position: "absolute",
            // objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <div className="login-form " style={{ position: "absolute" }}>
        <div id="logintitle">
          <div style={{ color: "#3F9FA1", fontSize: "30px" }}>LOGIN</div>
          <div>
            <br />
            <InputComponent text={"Number/E-mail"} />
          </div>
          <br />
          <div>
            <InputComponent text={"Password"} />
          </div>
          <br />
          <div>
            <button
              id="button"
              onClick={() => {
                navigate("/navbar");
              }}
              style={{
                width: "255px",
                height: "35px",
                borderRadius: "7px",
                borderColor: "#A1A7B0",
                color: "white",
                fontSize: "20px",
              }}
            >
              LOGIN
            </button>
          </div>
          <p>
            Don't have an account?
            <Link
              to="/register"
              id="register"
              href=""
              style={{ fontSize: "18px" }}
            >
          Register  
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
