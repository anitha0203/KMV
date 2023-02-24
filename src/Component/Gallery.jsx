import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavItem,
  Row,
  Spinner,
} from "react-bootstrap";

import { useCallback } from "react";

function Gallery() {
  const [images, setImages] = useState("");
const [visible, setVisible] = useState(2);
const [hide, setHide] = useState(false);
const [hasError, setHasError] = useState(false);
const [loading, setLoading] = useState(true);
const [currentImage, setCurrentImage] = useState(0);
const [isViewerOpen, setIsViewerOpen] = useState(false);

const openImageViewer = useCallback((indexe) => {
  for (let i = 0; i < indeces.length; i++) {
    if (indexe === indeces[i]) {
   
      setCurrentImage(i);
      
    }
  }
  setIsViewerOpen(true);
}, );

useEffect(()=>{

})

const closeImageViewer = () => {
  setCurrentImage(0);
  setIsViewerOpen(false);
};

const carous = [];
const indeces = [];

useEffect(() => {
  const fetchData = async () => {
    setHide(false);
    try {
      const res = await axios.get("https://kmvpl-backend.herokuapp.com");
      let imac = res.data;
      setImages(imac);
      if (images.length > 0) {
        setLoading(false);
      }
    } catch (err) {
      setHasError(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
      });
    }
  };
  fetchData();
}, [images.length]);

//Functionality for loading of images months

const loadMore = () => {
  setVisible((prevState) => prevState + 1);
  if (images.length === visible) {
    setHide(true);
  }
};

return (
  <>
    <style>
      {`
    body{
      background-color:#f1f1f1;
    }
     .hoverimg:hover{
      cursor:pointer;
      box-shadow:8px 8px 5px 1px #cbcbcd;
      transition: all 0.5s ease-in-out;
      transform:scale(1.25);
     
    },

    .rota:hover{
      transform:scale(1.25);
      transition: all 0.5s ease-in-out;
      width:500px
    }
    `}
    </style>

    <div style={{ marginBottom: "80px" }}>
      {hasError && (
        <div
          style={{
            top: "50%",
            left: "45%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2 style={{ fontFamily: "arial", color: "red" }}>
            Network Error....
          </h2>
          <p style={{ fontFamily: "arial", color: "red" }}>
            Please Refresh the Page....
          </p>
          <Spinner animation="border" variant="danger" size="lg" />
        </div>
      )}

      {loading && (
        <div
          style={{
            top: "50%",
            left: "45%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 style={{ fontFamily: "arial" }}>Loading.....</h1>
          <br />
          <Spinner animation="border" variant="warning" size="lg" />
        </div>
      )}

      {!loading && !hasError && (
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <>
            {images &&
              images.slice(0, visible).map((item) =>
                item.map((pics, ibmn) => {
                  return (
                    <>
                      <Container key={ibmn}>
                        {pics && pics.Imageurls.length > 0 && (
                          <h4
                            style={{
                              marginBottom: "25px",
                              color: "#1e3796",
                              marginTop: "50px",
                              fontSize: "25px",
                              fontFamily: "arial",
                              padding: "7px",
                              textAlign: "left",
                            }}
                            key={ibmn}
                          >
                            {pics.monthname}
                          </h4>
                        )}

                        <Row>
                          {pics &&
                            pics.Imageurls.map((dod, indx) => {
                              return (
                                <Col
                                  xl={3}
                                  key={indx}
                                  style={{
                                    margin: "0px",
                                    pading: "0px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <center>
                                    <Image
                                      key={indx}
                                      className="hoverimg"
                                      src={dod.src}
                                      alt="..."
                                      style={{
                                        height: "200px",
                                        width: "300px",
                                        margin: "10px",
                                      }}
                                      onClick={() => {
                                        openImageViewer(dod.id)
                                    
                                      }}
                                    />
                                  </center>
                                </Col>
                              );
                            })}
                        </Row>

                        {pics &&
                          pics.Imageurls.map((imgs) => {
                            if (imgs) {
                              carous.push(imgs.src);
                              indeces.push(imgs.id);
                            }

                            return true;
                          })}

                        {isViewerOpen && (
                          <ImageViewer
                            src={carous}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                            disableScroll={false}
                            backgroundStyle={{
                              backgroundColor: "rgba(0,0,0,0.9)"
                            }}
                            closeOnClickOutside={true}
                          />
                        )}
                      </Container>
                    </>
                  );
                })
              )}

            <Container>
              {!hide && (
                <div className="mb-5" style={{ padding: "55px" }}>
                  <Button
                    className="rota"
                    onClick={loadMore}
                    style={{
                      backgroundColor: "#1e3796",
                      fontSize: "large",
                      fontFamily: "arial",
                      float: "left",
                      marginLeft: "-10px",
                    }}
                  >
                    Load More...
                  </Button>
                </div>
              )}
            </Container>
          </>
        </div>
      )}
    </div>

    <Container>
      <Navbar fixed="bottom" className="justify-content-end">
        <NavItem>
          <Nav.Link href="/home">
            <Button
              style={{
                color: "white",
                borderRadius: "5%",
                backgroundColor: "#1e3796",
                fontFamily: "arial",
              }}
            >
              Go to Home
            </Button>
          </Nav.Link>
        </NavItem>
      </Navbar>
    </Container>
  </>
);
}

export default Gallery;
