import React, { useState, useEffect } from "react";
import axios from "axios";
import PatternImg from "../images/pattern.jpg";
import "./Carousel.css";
import carouselImage from "../images/CarouselImage.jpg";

import { Container, Image, Row, Col, Stack } from "react-bootstrap";

function Body() {
  const [photos, setPhotos] = useState("");

  useEffect(() => {
    axios.get("https://highwayproject.herokuapp.com").then((res) => {
      setPhotos(res.data);
      console.log(res);
    });
  }, []);

  console.log(photos);

  //styles for fonts

  const lineStyle1 = {
    fontSize: "16px",
    textAlign: "justify",
    fontFamily: "Arial",
    paddingRight: "20px",
  };
  return (
    <div style={{ margin: "0px" }}>
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
            }}
          >
            <div>
              <Row style={{ justifyContent: "center" }}>
                <Col lg={5}>
                  <Image
                    className="d-block w-100"
                    style={{ marginTop: "0px" }}
                    src={require("../images/Carousel3.jpg")}
                    height="400"
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
            style={{
              background: "white repeat fixed",

              backgroundImage: `url(${carouselImage})`,
              width: "100%",
              height: "500px",
              fontSize: "18px",
            }}
          ></div>
          <div className="container">
            <Container
              style={{
                fontFamily: "Arial",
                textAlign: "center",
                backgroundColor: "#fff",
                padding: "20px 0px 20px 20px",
                marginBottom: "30px",
                marginTop: "60px",
              }}
            >
              <Row style={{ display: "flex", marginBottom: "40px" }}>
                <Col style={{ flex: "2%", marginRight: "10px" }}>
                  <div>
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px 5px" }}>
                        Pavement Classification
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/walking.png")}
                        style={{ width: "80px", padding: "5px 0px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "20px 0px" }}>
                        Main Carriage way is Flexible and Toll Plaza is with
                        Rigid Pavement
                      </p>
                    </div>
                  </div>
                </Col>
                <Col style={{ flex: "2%", marginRight: "10px" }}>
                  <div>
                    <h4
                      style={{
                        fontWeight: "bold",
                        padding: "5px 40px 0px 0px",
                      }}
                    >
                      Concession Agreement
                    </h4>

                    <center>
                      <img
                        src={require("../images/calender.png")}
                        style={{ width: "70px", padding: "10px 0px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "25px 0px" }}>
                        24-Feb-2022
                      </p>
                    </div>
                  </div>
                </Col>
                <Col style={{ flex: "2%", marginRight: "10px" }}>
                  <div>
                    <h4
                      style={{
                        fontWeight: "bold",
                        padding: "5px 40px 0px 40px",
                      }}
                    >
                      Construction Period
                    </h4>
                    <center>
                      <img
                        src={require("../images/time.png")}
                        style={{ width: "70px", padding: "10px 0px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "25px 0px" }}>
                        730 Days / 2 Years
                      </p>
                    </div>
                  </div>
                </Col>
                <Col style={{ flex: "2%", marginRight: "10px" }}>
                  <div>
                    <h4
                      style={{
                        fontWeight: "bold",
                        padding: "5px 60px 0px 60px",
                      }}
                    >
                      Appointed Date
                    </h4>
                    <center>
                      <img
                        src={require("../images/calender.png")}
                        style={{ width: "70px", padding: "10px 0px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "25px 0px" }}>
                        27-Sep-2022
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ display: "flex" }}>
                <Col style={{ flex: "2%" }}>
                  <div>
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px 55px" }}>
                        Authority
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/client.png")}
                        style={{ width: "75px", paddingBottom: "1px 0px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "1px 0px" }}>
                        National Highways Authority of India (NHAI)
                      </p>
                    </div>
                  </div>
                </Col>
                <Col style={{ flex: "2%" }}>
                  <div>
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px 55px" }}>
                        Concessionaire
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/person.png")}
                        style={{ width: "75px", padding: "2px 0px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", padding: "1px 0px" }}>
                        KMVPL Khammam Devarapalli Highway Private Limited
                      </p>
                    </div>
                  </div>
                </Col>
                <Col style={{ flex: "2%" }}>
                  <div>
                    <div>
                      <h4 style={{ fontWeight: "bold", padding: "5px 35px" }}>
                        Length in KM
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/length.png")}
                        style={{ width: "75px", padding: "2px 0px" }}
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
                <Col style={{ flex: "2%", marginRight: "20px" }}>
                  <div>
                    <div style={{ width: "auto" }}>
                      <h4 style={{ fontWeight: "bold", padding: "5px 35px" }}>
                        O&M Period
                      </h4>
                    </div>
                    <center>
                      <img
                        src={require("../images/time.png")}
                        style={{ width: "75px", padding: "2px 0px" }}
                        alt="..."
                      ></img>
                    </center>
                    <div>
                      <p style={{ fontSize: "18px", paddingTop: "1px" }}>
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
        className="container-fluids"
        style={{ marginBottom: "20px", display: "flexbox" }}
      >
        <div
          style={{
            backgroundImage: `url(${PatternImg})`,
            height: "400px",
            marginTop: "50px",
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
