import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../atoms/images/utosia-2.jpg";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavbarComponent({ onBtnClick = () => {} }) {
  const Menus = ["My Bookings", "Profile", "Logout"];
  return (
    <>
<Dropdown  >
      <Dropdown.Toggle style={{position:"absolute", marginLeft:1200, borderColor:"transparent", }} variant="white">
      <FontAwesomeIcon
style={{ marginTop: "15px", marginRight: "50px", height: "20px" }}
icon={faUser}
className=" cursor-pointer"/> 
      </Dropdown.Toggle>

      <Dropdown.Menu style={{borderColor:"transparent"}}>
<Dropdown.Item> <Link to='/My Bookings'  style={{color:"black",}} > My Bookings</Link> </Dropdown.Item>
<Dropdown.Item> <Link to='/navbar'  style={{color:"black"}} >Profile</Link> </Dropdown.Item>
<Dropdown.Item> <Link to='/'  style={{color:"black"}} > Logout</Link> </Dropdown.Item>

        
      </Dropdown.Menu>
    </Dropdown>


     <Link to='/navbar'> <img
        src={logo}
        alt=""
        width="120"
        height="35"
        class="d-inline-block align-text-top mt-2"
      ></img></Link>
       
       
       
        
      
       
     

      <hr></hr>
    </>
  );
}

export default NavbarComponent;
