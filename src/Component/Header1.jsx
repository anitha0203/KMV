import React from "react";
import {  Navbar } from "react-bootstrap";
function Header1() {
  return (
    <div>
      <Navbar  bg="light"  expand="lg" style={{height:"60px",backgroundColor:"white"}}>
     
        <Navbar.Brand href="/home" style={{verticalAlign:"middle",}}> <h3><img
             style={{verticalAlign:"middle",float:"left"}}
             src={require("../images/kmvlogo.png")}
              width="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{'  '} <span style={{fontSize:"20px",fontFamily: "Arial",fontWeight:"bold", paddingLeft: "10px"}}>Khammam Devarapalli Highway Private Ltd</span><container>
             
              </container></h3> </Navbar.Brand>
    <a href="/home"> </a>
    </Navbar>

    </div>
  );
}

export default Header1;
