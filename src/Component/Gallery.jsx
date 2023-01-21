import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
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
import Header1 from "./Header1";

function Gallery() {
  const [images, setImages] = useState("");
  const [visible, setVisible] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [indexe, setIndexe] = useState(0);
  const [hide, setHide] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const carous = [];

  useEffect(() => {
    const fetchData = async () => {
      setHide(false);
      try {
        const res = await axios.get("https://good-ruby-headscarf.cyclic.app");
        let imac = res.data;
        setImages(imac);
        if (images.length > 0) {
          console.log(images.length);
          setLoading(false);
        }
        //console.log("These are get data", imac);
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
        <Header1 />
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
              {images.slice(0, visible).map((item) =>
                item.map((pics, ibm) => {
                  return (
                    <>
                      <Container key={ibm}>
                        {pics.Imageurls.length > 0 && (
                          <h4
                            style={{
                              marginBottom: "25px",
                              color: "#1e3796",
                              marginTop: "50px",
                              display: "flex",
                              fontFamily: "arial",
                              padding: "7px",
                            }}
                          >
                            {pics.monthname}
                          </h4>
                        )}

                        {/* {pics.Imageurls.length === 0 && <p style={{color:"red",fontFamily:"arial",fontSize:"17px",textAlign:"left",padding:"7px"}}>No images uploaded in this month</p>} */}

                        <Row>
                          {pics.Imageurls.map((dod, indx) => {
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
                                      setIndexe(dod.id);
                                     // console.log(indexe);
                                      setIsOpen(true);
                                    }}
                                  />
                                </center>
                              </Col>
                            );
                          })}
                        </Row>

                        {pics.Imageurls.map((imgs, indx) => {
                          return (
                            carous.push({ "src": imgs.src,"id":imgs.id }),
                            console.log("im",carous)
                          );
                        })}

                        <ReactImageCarouselViewer
                          open={isOpen}
                          onClose={() => {
                            setIsOpen(false);
                          }}
                          images={carous}
                          startIndex={indexe}
                        />
                      </Container> 
                    </>
                  );
                })
              )}

              <Container>
                {!hide && (
                  <div className="mb-5" style={{ padding: "55px" }}>
                    <Button
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
      <div></div>
      <div>
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
      </div>
    </>
  );
}

export default Gallery;
