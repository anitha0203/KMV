import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import { Button, Col, Container, Nav,Navbar, NavItem, Row, Spinner } from "react-bootstrap";
import Header1 from "./Header1";


function Gallery() {
  const [images, setImages] = useState("");
  const [visible, setVisible] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [indexe, setIndexe] = useState(0);
  const [hide, setHide] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setHide(false);
      try {
        const res = await axios.get("https://highwayproject.herokuapp.com");
        let imac =res.data;
        setImages(imac);
        if(images.length>0){
          console.log(images.length);
            setLoading(false);
        }
        console.log("These are get data",imac);
      } catch (err) {
        setHasError(true);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1800);


      }
    };
      fetchData();
  },[images.length]);



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
       .hoverimg:hover{
        cursor:pointer;
        box-shadow:8px 8px 5px 1px #cbcbcd;
        transition: all 0.5s ease-in-out;
      },

      .rota:hover{
        transform: rotate(360deg);
        transition: all 0.25s ease-in-out;
      }
      `}

    </style>



    <div>
      <Header1/>
      {hasError && (
        <p style={{ top: "50%", left: "50%", position: "absolute" ,color:"red",display:"flex"}}>
          Something Went Wrong
        </p>
      )}
      {loading && (
        <div style={{ top: "50%", left: "45%", position: "absolute",transform: "translate(-50%, -50%)"}}>
          <h1 style={{fontFamily:"arial"}}>Loading.....</h1>
          <br />
          <Spinner animation="border" variant="warning" size="lg" />
        </div>
      )}

      {!loading && (

          <div
            className="container-fluid"

          >
            <>
              {images.slice(0, visible).map((item) =>
                item.map((pics) => {
                  return (
                    <>
                    <Container>

                        <h4
                          style={{
                            marginBottom: "25px",
                            color: "#1e3796",
                            marginTop: "50px",
                            display:"flex",
                            fontFamily:"arial",padding:"7px"
                          }}
                        >
                          {pics.monthname}
                        </h4>


                   
                      {pics.Imageurls.length === 0 && <p style={{color:"red",fontFamily:"arial",fontSize:"17px",textAlign:"left",padding:"7px"}}>No images uploaded in this month</p>}
                      
                      <Row>
                        {pics.Imageurls.map((imgs, indx) => (
                        
                          <Col xl={3}>
                            <center>
                                <img
                                  className="hoverimg"
                                  style={{height:"200px",width:"300px",margin:"10px"}}
                                  alt="not found"
                                  src={imgs.src}
                                  key={indexe}
                                  onClick={() => {
                                    setIndexe(indx);
                                    console.log(indx)
                                    setIsOpen(true);
                                  }}

                                  />

                              <ReactImageCarouselViewer
                                  open={isOpen}
                                  onClose={() =>{ setIsOpen(false);console.log(indx)}}
                                  images={pics.Imageurls}
                                  startIndex={indexe}

                                />
                                  </center>
                          </Col>
                        
                        ))}
                        </Row>
                      </Container>
                    </>
                  );
                })
              )}

            <Container>
            {!hide && (
                <div
                  className="mb-5"
                  style={{ padding: "25px" }}
                >
                  <Button
                    onClick={loadMore}
                    style={{ backgroundColor: "#1e3796", fontSize: "large",fontFamily:"arial" ,float:"left",marginLeft:"-10px"}}
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
    <div>
      <Navbar fixed="bottom" className="justify-content-end" >
<NavItem >
<Nav.Link  href="/home"><Button  style={{color:"white",borderRadius:"5%",backgroundColor:"#1e3796",fontFamily:"arial",fontSize:"large"}}>Go to Home</Button></Nav.Link>
</NavItem>
     </Navbar>
    </div>
    </>
  );
}

export default Gallery;
