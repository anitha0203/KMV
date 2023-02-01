

import React from "react";

import PatternImg from "../images/pattern.jpg";
import "./Carousel.css";
import carouselImage from "../images/CarouselImage.jpg";

import { Container, Image, Row, Col, Stack } from "react-bootstrap";

function Body() {

  //styles for fonts

  const lineStyle1 = {
    fontSize: "16px",
    textAlign: "justify",
    fontFamily: "Arial",
    paddingRight: "20px",
  };
  return (
    <div className="container-fluid" style={{ margin: "0px" }}>
      <style>
        {`
      .card-show:hover{
        color:red;
        background-color:gray;
      
      },
      body{
        font-family: Arial;
      }
      `}
      </style>

      {  (
        <>
          <div
            className="container"
            style={{
              marginBottom: "70px",
              marginTop: "70px",
              textAlign: "left",
              padding: "0",
              width:"100%",
              
            }}
          >
            <div>
              <Row style={{ justifyContent: "center" }}>
                <Col lg={5}>
                  <Image
                    className="d-block w-100"
                    style={{ marginTop: "0px" }}
                    src={require("../images/Carousel3.jpg")}
                    height="300"
                  />
                </Col>
                <Col
                  xlg={{ span: 3, offset: 1 }}
                  style={{ marginLeft: "-5px" }}
                >
                  <Stack style={{ paddingLeft: "15px" }}>
                    <div style={{ marginTop: "50px" }}>
                      <h2
                        style={{
                          color: "#1e3796",
                          paddingBottom: "5px",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                        }}
                      >
                        Project Name
                      </h2>
                      <hr
                        style={{ width: "300px", border: "1px solid #ccc" }}
                      />
                      <p style={lineStyle1}>
                        Construction of 4 lane Access Controlled New Greenfield
                        Highway Section of NH-365BG (Khammam-Devarapalle) of
                        length 42.119 km from Chintagudem village to Recherla
                        village (Design Chainage 63+117 to 105+236) under Inter
                        Corridor Route under Bharatmala Pariyojana on Hybrid
                        Annuity mode in the states of Telangana and Andhra
                        Pradesh. (Package-III)
                      </p>
                    </div>
                    <div style={{ marginTop: "45px" }}>
                      <h2
                        style={{
                          color: "#1e3796",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                        }}
                      >
                        Scope of Work
                      </h2>
                      <hr
                        style={{ width: "300px", border: "1px solid #ccc" }}
                      ></hr>
                      <p style={lineStyle1}>
                        Construction of 4 lane Access controlled Green Filed
                        highway with depressed median which includes Culverts,
                        Bridges, Underpasses, Drains &amp; Other Misc. Works.
                      </p>
                    </div>
                  </Stack>
                </Col>
              </Row>
            </div>
          </div>
          <div
          className="d-block w-100"
            style={{
              background: "white repeat fixed",

              backgroundImage: `url(${carouselImage})`,
              width: "100%",
              height: "500px",
              fontSize: "18px",margin:"0px"
            }}
          ></div>
          <div className="container">
            <Container
              style={{
                fontFamily: "Arial",
                textAlign: "center",
                backgroundColor: "#fff",
                marginBottom: "30px",
                marginTop: "60px",
                justifyContent:"center",
                
              }}
            >
              <Row className="justify-content-md-center" >
                <Col>
                  <div>
                    <div>
                      <h4 style={{ fontWeight: "bold",justifyContent:"center",height:"45px", marginBottom: "25px" }}>
                        Pavement Classification
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/walking.png")}
                        style={{ width: "110px", padding: "15px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div style={{justifyContent:"center"}}>
                      <p style={{ fontSize: "18px", padding: "5px 20px",textAlign:"center"}}>
                        Main Carriage way is Flexible and Toll Plaza is with
                        Rigid Pavement
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div >
                    <div>
                    <h4
                      style={{
                        fontWeight: "bold",
                        justifyContent:"center",height:"45px", marginBottom: "25px"
                      }}
                    >
                      Concession Agreement
                    </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/calender.png")}
                        style={{ width: "110px", padding: "20px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px",  padding: "5px 70px",textAlign:"center" }}>
                        24-Feb-2022
                      </p>
                    </div>
                  </div>
                </Col>
                <Col style={{justifyContent:"center"}} >
                  <div >
                    <h4
                      style={{
                        fontWeight: "bold",
                        height:"45px", marginBottom: "25px"
                      }}
                    >
                      Construction Period
                    </h4>
                    <center>
                      <img
                        src={require("../images/time.png")}
                        style={{ width: "110px", padding: "20px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "5px 45px",textAlign:"center" }}>
                        730 Days / 2 Years
                      </p>
                    </div>
                  </div>
                </Col>
                <Col >
                  <div >
                    <h4
                      style={{
                        fontWeight: "bold", padding: "5px 55px",height:"45px", marginBottom: "25px"
                        
                      }}
                    >
                      Appointed Date
                    </h4>
                    <center>
                      <img
                        src={require("../images/calender.png")}
                        style={{ width: "110px", padding: "20px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "5px 70px" }}>
                        27-Sep-2022
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row  className="justify-content-md-center">
                <Col >
                  <div >
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px 55px",height:"45px" }}>
                        Authority
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/client.png")}
                        style={{ width: "75px", padding: "2px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "1px 0px",textAlign:"center" }}>
                        National Highways Authority of India (NHAI)
                      </p>
                    </div>
                  </div>
                </Col>
                <Col >
                  <div >
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px" ,height:"45px"}}>
                        Concessionaire
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/person.png")}
                        style={{ width: "75px", padding: "2px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "1px 0px" ,textAlign:"center"}}>
                        KMVPL Khammam Devarapalli Highway Private Limited
                      </p>
                    </div>
                  </div>
                </Col>
                <Col >
                  <div >
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px",height:"45px" }}>
                        Length in KM
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/length.png")}
                        style={{ width: "75px", padding: "2px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "1px 80px" }}>
                        42.119 Km's
                      </p>
                    </div>
                  </div>
                </Col>
                <Col >
                  <div >
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px 35px",height:"45px" }}>
                        O&M Period
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/time.png")}
                        style={{ width: "75px", padding: "2px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "1px 80px" }}>
                        15 years
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}

      <div
       
        style={{margin:"0px 0px 20px 0px" ,padding:"0px"}}
      >
        <div
          style={{
            backgroundImage: `url(${PatternImg})`,
            height: "400px",
            margin: "50px 0px 0px 0px",
            padding:"0px",
            width:"100%"
          }}
        >
          <a href="/Gallery" style={{ padding: "0", margin: "0" }}>
            {" "}
            <button
              className="btn primary"
              style={{
                position: "relative",
                top: "45%",
                left: "1%",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                color: "white",
                fontFamily: "Arial",
                backgroundColor: "#1e3796",
              }}
            >
              Project Photos
            </button>
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Body;
