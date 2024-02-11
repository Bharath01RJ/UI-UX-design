import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <form id="back">
        <div className="form">
          <div className="registertitle">
            <div style={{ color: "#3F9FA1", fontSize: "30px", marginTop:20}}>Register</div>
            <div>
              <br />
              <input
                type="text"
                placeholder="Name"
                style={{
                  width: "250px",
                  height: "30px",
                  borderColor: "##A1A7B0+ ",
                  fontSize: "15px",
                  paddingLeft: "10px",
                }}
              ></input>
            </div>
            <br />
            <div>
              <input
                type="email"
                placeholder="E-mail"
                style={{
                  width: "250px",
                  height: "30px",
                  borderColor: "##A1A7B0+",
                  fontSize: "15px",
                  paddingLeft: "10px",
                }}
              ></input>
            </div>
            <br />
            <div>
              <input
                type="tel"
                placeholder="Mobile"
                style={{
                  width: "250px",
                  height: "30px",
                  borderColor: "##A1A7B0+",
                  fontSize: "15px",
                  paddingLeft: "10px",
                }}
              ></input>
            </div>
            <br />
            <div>
              <input
                type="text"
                placeholder="Address"
                style={{
                  width: "250px",
                  height: "30px",
                  borderColor: "##A1A7B0+",
                  fontSize: "15px",
                  paddingLeft: "10px",
                }}
              ></input>
            </div>
            <br />
            <div>
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "250px",
                  height: "30px",
                  borderColor: "##A1A7B0+",
                  fontSize: "15px",
                  paddingLeft: "10px",
                }}
              ></input>
            </div>
            <br />
            <div>
              <button
                id="button"
                style={{
                  width: "270px",
                  height: "35px",
                  borderColor: "#A1A7B0",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "7px"
                }}
              >
                Register
              </button>
            </div>
            <p>
              Don't have an account?
              <Link to="/" id="register" href="" style={{ fontSize: "18px" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
