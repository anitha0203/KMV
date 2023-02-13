import React, {  useState } from "react";
import {
  Button,
  Col,
  Row,
  Stack,
  Container,
  ProgressBar,
  Navbar,
  NavItem,
  Nav,
  Spinner,
  OverlayTrigger,
  Tooltip,
  Image,
} from "react-bootstrap";
import Header from "./Header";
import LoginForm from "../images/Login_4.png";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import { useEffect } from "react";


function All() {
  const [isLogin, setIsLogin] = useState(true);
  const [home, setHome] = useState(false);
  const [upload, setUpload] = useState(true);
  const [deletec, setDeletec] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState(false);
  const [hide, setHide] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [visible, setVisible] = useState(2);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [valid] = useState({
    vemail: "kmv",
    vpass: "123456",
  });

  const [imageSelected, setImageSelected] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [butto, setButto] = useState(false);
  const [showError, setShowError] = useState("");
  const [fileRes, setFileRes] = useState("");
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dummy, setDummy] = useState(false);
  const [onSelect, setOnSelect] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  const [images1, setImages1] = useState([]);
  const [images, setImages] = useState([]);

  const { email, password } = data;
  function handleChange(e) {
    setData({ ...data, [e.target.name]: [e.target.value] });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (valid.vemail !== data.email[0]) {
      setError(true);
    } else {
      setError(false);
      if (valid.vpass !== data.password[0]) {
        setErrors(true);
      } else {
        setErrors(false);
        setIsLogin(false);
        setHome(true);
      }
    }
  };

  
  
    const fetchData = async () => {
        setHide(false);
        setDeletec(true);
        setUpload(false);
        setLoading(true);
      try {
        const res = await axios.get("https://kmvpl-backend.herokuapp.com");
        let imac = res.data;
        setImages(imac);
        setVisible(2)
        if (images.length > 0) {
          // console.log(images.length);
          setLoading(false);
          setHide(true);
        }

        // console.log("These are get data", imac);
        setImages(imac);
        setLoading(false);
      } catch (err) {
        setHasError(true);
      }
     finally {
          
           setLoading(false);
         }
    };


    useEffect(() => {
      const fetchData = async () => {
        setHide(false);
        try {
          const res = await axios.get("https://kmvpl-backend.herokuapp.com");
          let imac =res.data;
          setImages(imac);
          if(images.length>0){
            // console.log(images.length);
              setLoading(false);
          }
          // console.log("These are get data",imac);
        } catch (err) {
          setHasError(true);
        } finally {
          setTimeout(() => {
            setLoading(false);
          },);
  
  
        }
      };
        fetchData();
    },[images.length]);
 
 

  const onChange1 = (e) => {
    for (let k = 0; k < e.target.files.length; k++) {
      var obj = {};
      obj["url"] = URL.createObjectURL(e.target.files[k]);
      obj["name"] = e.target.files[k].name;
      preview.push(obj);
    }
    // console.log("addmore images url", preview);
    const dump = [];
    for (let i = 0; i < e.target.files.length; i++) {
      dump.push(e.target.files[i]);
    }

    // console.log("dumping", dump);

    if (e.target.files.length > 0) {
      // console.log("entered into loop");
      setImages1(e.target.files);
      setImageSelected([...imageSelected, ...dump]);
    }
    // console.log("first", images1);
    setImageSelected([...imageSelected, ...dump]);
    // console.log("next", imageSelected);
    // console.log("final array size", imageSelected.length);
  };

  const onChange = (h) => {
    h.preventDefault();
    setOnSelect(false);
    
    setImageSelected(h.target.files);
    const images = [];
    for (let i = 0; i < h.target.files.length; i++) {
      var obj = {};
      obj["url"] = URL.createObjectURL(h.target.files[i]);
      obj["name"] = h.target.files[i].name;
      images.push(obj);
      setPreview(images);
    }
    setPreview(images);
    // console.log("images data", images);
    // console.log("input fields ", imageSelected);
    //console.log("preview data",preview)
    setButto(true);

    // console.log("previewData", preview);
    const imagions = [];

    //Deleting unwanted pics by comparing preview and selectedImage arrays
    for (let l = 0; l < imageSelected.length; l++) {
      for (let j = 0; j < preview.length; j++) {
        if (imageSelected[l].name === preview[j].name) {
          imagions.push(imageSelected[l]);
        }
      }
    }
    // console.log("imagions", imagions);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    setLoading(true);
    setOnSelect(false);
    
  
    //setImageSelected(imagions);
    // console.log("imagions data1", imageSelected.length);
    
    const formData = new FormData();
    let store = new Date();
    if (dummy) {
       store = startDate;
    }
    let month = String(store.getMonth() + 1).padStart(2, "0");
    let day = String(store.getDate()).padStart(2, "0");
    let year = store.getFullYear();
    let output = year + "-" + month + "-" + day;
   
  //  console.log("goingdate",output);
    formData.append("Date", output);

    Array.from(imageSelected).forEach((item) => {
      formData.append("Image", item);
    });
    const url = "https://kmvpl-backend.herokuapp.com/upload";
    axios
      .post(url, formData)
      .then((result) => {
        setFileRes(result.data);
        setIsUploaded(true);
        setOnSelect(false);
        setLoading(false);
        // console.log(fileRes)
         setPreview([]);
      })
      .catch((err) => {
        if (err.result) {
          setLoading(false);
          // console.log(err.result);
        } else if (err.request) {
          setShowError(err.request);
          // console.log(err.request);
          setLoading(false);
        }
      });

  };

  //Functionality for loading of images months

  const loadMore = () => {
    setVisible((prevState) => prevState + 1);
    // console.log(images.length);
    // console.log("visible",visible);
    if (visible===images.length) {
      setHide(false);
    } 
  };

  const deletea = (indx) => {
    
    axios
      .delete(`https://kmvpl-backend.herokuapp.com/Delete/${indx}`)
      .then((result) => {
        // console.log("deleted", indx);
        // console.log(result);
        setLoading(false);
      //  window.location.reload()
      })
      .catch((err) => {
        if (err.result) {
          setLoading(false);
          // console.log(err.result);
        } else if (err.request) {
          // console.log(err.request);
          setLoading(false);
        }
      });

    // console.log(indx);
    
  };

  return (
    <>
    <style>
            {`
              body{
                background-color:#f1f1f1;
                width:"960px"
              }
              .boxx:hover {
                  box-shadow: 5px  5px 10px #ccc;
              }
              `}
          </style>
      <Header />
      {/* Loginpage */}
      <div className="container-fluid-s">
        {isLogin && (
          <div 
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              alignItems: "center",
              backgroundImage: `url(${LoginForm})`,
            }}
          >
            <div>
              <form onSubmit={submitHandler} style={{ width: "400px" }}>
              <div className="boxx" style={{border: "1px solid #ccc", backgroundColor: "#ccc",paddingTop: "3vh",paddingBottom: "3vh",borderRadius: "25px",paddingLeft: "1vh"}}>
                  <h2 style={{ padding: 20, fontFamily: "arial" }}>Login</h2>
                  <div className="form-group" style={{marginLeft: "8vh"}}>
                    <Row>
                      <label
                        style={{
                          fontSize: "large",
                          fontFamily: "arial",
                          fontWeight: "bold",
                          padding: "5px",
                        }}
                      >
                        Username
                      </label>
                    </Row>
                    <Row style={{ marginBottom: "5px" }}>
                      <input
                        type="text"
                        value={email}
                        name="email"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </Row>

                    {error && (
                      <p
                        style={{
                          color: "red",
                          fontFamily: "arial",
                          textAlign: "left",
                          padding: "5px",
                        }}
                      >
                        Enter valid Username
                      </p>
                    )}
                  </div>

                  <div className="form-group" style={{marginLeft: "8vh"}}>
                    <Row>
                      <label
                        style={{
                          fontSize: "large",
                          fontFamily: "Arial",
                          textAlign: "left",
                          fontWeight: "bold",
                          padding: "5px",
                        }}
                      >
                        Password
                      </label>
                    </Row>

                    <Row style={{ marginBottom: "5px" }}>
                      <input
                        type="password"
                        value={password}
                        name="password"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </Row>
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontFamily: "Arial",
                          textAlign: "left",
                          padding: "5px",
                        }}
                      >
                        Enter valid Password
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    onSubmit={submitHandler}
                    style={{
                      margin: 20,
                      fontFamily: "Arial",
                      textAlign: "center",
                      width: "150px",
                      fontSize: "20px",
                    }}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {/* LoginEnds  */}

      {/* HomeStarts   */}

      {home && (
        <div className="container-fluid" style={{ marginTop: "0px" }}>
          <Row md={12} style={{ height: "auto",marginTop:"0px" }}>
            <Col md={3}style={{marginTop:"30px",paddingTop:"60px"}} >
              <Stack>
                <div style={{marginTop:"10px"}}>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Upload photos</Tooltip>}>
                  <Button
                    style={{
                     flex:"1",
                      height: "8vh",
                      width: "300px",
                      backgroundColor: "#117a8b",
                      position: "sticky",
                      top:"50%",
                      fontFamily: "arial",
                      fontSize: "18px",
                    }}
                    onClick={() => {
                      setUpload(true);
                      setDeletec(false);
                      setOnSelect(true);
                      setIsUploaded(false);
                    }}
                  >
                    {" "}
                    <i className="fa fa-upload" aria-hidden="true"></i> Upload
                  </Button>
                </OverlayTrigger>
                </div>

                <div style={{margin:"10px"}}>
                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Delete photos</Tooltip>}>
                  <Button
                    style={{
                      flex:"1",
                      height: "8vh",
                      width: "300px",
                      backgroundColor: "#117a8b",
                      position: "sticky",
                      top:"50%",
                      fontFamily: "arial",
                      fontSize: "18px",
                    }}
                    onClick={fetchData}
                  >
                    <i  className="fa fa-trash" aria-hidden="true"></i> Delete
                  </Button>
                  </OverlayTrigger>
                </div>
              </Stack>
            </Col>
          
            {upload && loading &&(
                   <div
                   style={{
                     top: "50%",
                     left: "50%",
                     position: "absolute",
                     transform: "translate(-50%, -50%)",
                   }}
                 >
                   <h3 style={{ fontFamily: "arial" }}>Uploading files</h3>
                   <ProgressBar style={{ width: "300px" }} animated="true" now={98} />
                 </div>
                )} 
           
            <Col md={8} style={{marginTop:"30px",paddingTop:"60px"}}>
             

              {/* Upload Layer */}

              {upload && (
                <>
                
                  
                
                  {onSelect && !isUploaded &&(
                    <>
                    <div
                      className="containers"
                      style={{
                        position: "relative",
                        display: "flex",
                        left: "50%",
                        justifyContent: "center",
                        fontFamily: "Arial",
                        transform: "translate(-50%,5%)",
                        
                      }}
                    >

                      <div
                        style={{
                          padding: "12px",
                          margin: "0px",
                          backgroundColor: "#fff",
                          width: "auto",
                          height: "auto",
                          boxShadow: "0px 0px 7px -1px #000000",
                          borderRadius: "10px",
                          position: "relative",
                          marginBottom:"90px"
                        }}
                      >
                        <Row lg={12} style={{ marginTop: "35px" }}>
                          <Col lg={12}>
                            <Stack
                              style={{
                                marginBottom: "-10px",
                              }}
                            >
                              <label
                                htmlFor="dates"
                                style={{
                                  color: "#1e3796",
                                  fontFamily: "Arial",
                                  alignItems: "center",
                                  fontSize: "20px",
                                }}
                              >
                                <p
                                  style={{
                                    fontStyle: "arial",
                                    textAlign: "center",
                                    paddingRight: "0px",
                                    fontSize: "22px",
                                  }}
                                >
                                  Desired Month To Upload Pictures
                                </p>
                              </label>
                            </Stack>
                            <Stack direction="horizontal">
                              <i className="fa fa-calendar" aria-hidden="true" style={{position: "absolute", zIndex: "1",marginTop: "1vh",marginLeft: "9vh"}}></i>
                              <div>
                              <DatePicker selected={startDate} value={startDate} onChange={(start) => {
                                        setStartDate(start);
                                        setDummy(true);
                                        // console.log("valueb:----", startDate);
                                      }} style={{position:"absolute"}}/>
                              </div>  
                            </Stack>
                            
                          </Col>
                        </Row>

                        <Row lg={12}>
                          <Col
                            lg={12}
                            style={{
                              marginTop: "55px",
                              display: "inline-block",
                            }}
                          >
                            <Stack>
                              <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                              <lord-icon
                                src="https://cdn.lordicon.com/xhcrhqyw.json"
                                trigger="morph"
                                colors="primary:#808080"
                                style={{ width: "110px", height: "110px" }}
                              ></lord-icon>
                            </Stack>

                            <Stack>
                              <label
                                htmlFor="imageUpload"
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "Arial",
                                  cursor: "pointer",
                                  alignItems: "center",
                                  padding: "5px",
                                  justifyContent: "center",
                                  width: "170px",
                                  fontSize: "18px",
                                  border: "1px solid #1e3796",
                                  backgroundColor: "#1e3796",
                                  color: "whitesmoke",
                                  borderRadius: "5px",
                                }}
                              >
                                Browse Files
                              </label>
                              <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                name="image"
                                onChange={onChange}
                                hidden
                                multiple
                                style={{
                                  color: "#1e3796",
                                  fontWeight: "bold",
                                  fontFamily: "Arial",
                                  cursor: "pointer",
                                }}
                              ></input>
                            </Stack>
                          </Col>
                        </Row>
                        <Row style={{ margin: "50px 50px" }}>
                          <Col
                            style={{
                              border: "1px solid #cccccc",
                              height: "120px",
                              width: "200px",
                              margin: "10px",
                              padding: "3vh",
                            }}
                          >
                            <p style={{ width: "200px" }}>
                              You can choose up to 20 photos at a time
                            </p>
                          </Col>
                          <Col
                            style={{
                              border: "1px solid #cccccc",
                              height: "120px",
                              width: "250px",
                              margin: "9px",
                              padding: "1.5vh",
                            }}
                          >
                            <p style={{ width: "200px" }}>
                              Use Ctrl/Cmd or Shift to Select Multiple images at
                              a time
                            </p>
                          </Col>
                          <Col
                            style={{
                              border: "1px solid #cccccc",
                              height: "120px",
                              width: "250px",
                              margin: "10px",
                              padding: "1.5vh",
                            }}
                          >
                            <p style={{ width: "200px" }}>
                              You can upload pictures that are .JPEG,.JPG or.PNG
                            </p>
                          </Col>
                        </Row>
                      </div>
                      
                    </div>
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
                  )}

                  {!onSelect && preview.length > 0  && !isUploaded && !loading&&  (
                    <Container style={{  marginTop: "20px",height:"auto", boxShadow: "0px 0px 7px -1px black",backgroundColor:"#f1f1f1",padding:"10px" }}>
                      <Row>
                        {preview.length > 0 &&
                          preview.map((itms, index) => {
                            return (
                              <>
                                <Col md={3}>
                                  <div className="container"  key={index}>
                                    <Image key={index}
                                      style={{
                                        width: "180px",
                                        height: "100px",
                                        margin: "10px",
                                        
                                      }}
                                      src={itms.url}
                                      alt={"image-" + index}
                                     
                                    />

                                    <div
                                      style={{
                                        position: "absolute",
                                        top: "-2%",
                                        right: "31%",
                                        display:"none",
                                        zIndex: "1",
                                        cursor: "pointer",
                                        transform: "translate(-50%,50%)",
                                      }}
                                    >
                                    
                                        <i onClick={(e) => {
                                           e.preventDefault();
                                            // console.log("deleted file num",index);
                                            const se = preview.filter(
                                              (itm, ind) => ind !== index
                                            );
                                            setPreview(se);
                                            // console.log(se);
                                           
                                          }}
                                          className="fa-solid fa-xmark"
                                          style={{
                                            color: "red",
                                            border: "1px solid white",
                                            backgroundColor:"whitesmoke",
                                            padding: "1.8px",
                                            borderRadius: "1.5px",
                                          }}
                                        ></i>
                                      
                                    </div>
                                  </div>
                                </Col>
                              </>
                            );
                          })}
                      </Row>
                      <Row>
                      <Container style={{float:"left"}}>
                                  {preview.length < 20 && preview.length >= 1 && (
                                    <button
                                      style={{
                                        backgroundColor: "#1e3796",
                                        color: "#f1f1f1",
                                        verticalAlign: "middle",
                                        borderRadius: "5px",
                                        marginLeft: "25px",float:"left"
                                      }}
                                    >
                                      <input
                                        id="add"
                                        onChange={onChange1}
                                        type="file"
                                        name="image"
                                        accept="image/jpeg,image/png"
                                        multiple
                                        hidden
                                      />
                                      <label
                                        style={{
                                          fontFamily: "arial",
                                          fontSize: "18px",
                                          cursor: "pointer",
                                          margin: "5px",
                                          float:"left"
                                        }}
                                        htmlFor="add"
                                      >
                                        Add more
                                      </label>
                                    </button>
                                  )}
                                </Container>
                      </Row>

                          {/* progress bar */}
                  { isLogin&& !isUploaded &&  (
                                  <div className="container"
                                    
                                  >
                                    <h3 style={{ fontFamily: "arial" }}>Uploading files</h3>
                                    <ProgressBar
                                      style={{ width: "300px" }}
                                      animated="true"
                                      now={98}
                                    />
                                  </div>
                                )}
                                {/* progress bar */}

              
                    </Container>
                  )}

                             

                  

                  {preview.length > 20 ?  (
                    <Container style={{ marginTop: "10px" }}>
                      <p
                        style={{
                          color: "red",
                          fontFamily: "arial",
                          margin: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Note*: Upload only 20 photos
                      </p>
                    </Container>
                  ) : (
                    ""
                  )}

                  {/* upload button */}
                  <Container style={{margin:"30px"}}>
                    {preview.length <= 20 && preview.length >= 1 &&!onSelect &&!isUploaded&& !loading&&(
                      <Button
                        type="submit"
                        disabled={!butto}
                        className="button btn-primary btn"
                        onClick={uploadImage}
                        style={{
                          backgroundColor: "green",
                          fontSize: "18px",
                          fontWeight: "bold",
                          fontFamily: "Arial",
                          cursor: "pointer",
                          float:"right",marginLeft:"50px"
                        }}
                      >
                        Upload
                      </Button>
                    )}
                       {/* Close button */}
    
                    {!onSelect && preview.length > 0 &&!isUploaded&& !loading&&(
                      <Button
                        style={{
                          backgroundColor: "green",
                          fontSize: "18px",
                          fontWeight: "bold",
                          fontFamily: "Arial",
                          cursor: "pointer",
                          float:"right"
                        }}
                        onClick={() => {
                          setOnSelect(false);
                          setPreview([]);
                          setImageSelected([]);
                          setImages1([]);
                        }}
                      >
                        Close
                      </Button>
                    )}
                  
                  {/* close buttton */}

                  </Container>
                  {/* upload button */}

              
              

                  {isUploaded && (
                <>
    
                <div
            className="container"
            style={{
              position: "absolute",
              display: "flex",
              left: "50%",
              justifyContent: "center",
              fontFamily: "Arial",
              transform: "translate(-50%,20%)",
              
            }}
          >
                  <div
                    style={{
                      height: "40vh",
                      verticalAlign: "center",
                      marginTop: "0px",
                      backgroundColor:"#fff",padding:"5px",width:"800px",boxShadow: "0px 0px 7px -1px #000000",
                      borderRadius:"10px",marginBottom:"80px"
                    }}
                  >
                 
                    <lord-icon
                      src="https://cdn.lordicon.com/hrqqslfe.json"
                      trigger="hover"
                      colors="primary:#109121,secondary:#ebe6ef"
                      style={{ width: "100px", height: "100px",marginTop:"55px" }}
                    ></lord-icon>
                    <br></br>

                    <h2
                      style={{
                        color: "green",
                        fontFamily: "arial",
                        textDecorationLine: "none",
                      }}
                    >
                      {fileRes}
                    </h2>
                  </div>
                  </div>
                  <div>
      <Navbar fixed="bottom" className="justify-content-end" >
<NavItem >
<Nav.Link  href="/home"><Button  style={{color:"white",borderRadius:"5%",backgroundColor:"#1e3796",fontFamily:"arial"}}>Go to Home</Button></Nav.Link>
</NavItem>
     </Navbar>
    </div>
                </>
              )}

              {!isUploaded && (
                <div>
                  <>{showError}</>
                </div>
              )}
                </>
              )}
              {/* Upload Layer Ends*/}

          
          
          
          
              {/* Delete Layer */}

              {deletec && (
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

                  <div className="container"
                    style={{ marginBottom: "80px", }}
                  >
                    {hasError && (
                      <p
                        style={{
                          top: "50%",
                          left: "50%",
                          position: "absolute",
                          color: "red",
                          display: "flex",
                        }}
                      >
                        Something Went Wrong
                      </p>
                    )}

                    {/* LoadingSpinner */}
                    {loading && (
                      <div className="container"
                        style={{
                          top: "50%",
                          left: "45%",
                          justifyContent:"center",
                          position: "absolute",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Container style={{marginTop:"400px",}}>

                        
                        <h1 style={{ fontFamily: "arial" }}>Loading.....</h1>
                        <br />
                        <Spinner
                          animation="border"
                          variant="warning"
                          size="lg"
                        />
                      </Container>
                      </div>
                    )}
                    {/* Loading Spinner */}

                    

                    {!loading && images.length>0 && (
                      
                      <div className="container" style={{ boxShadow: "0px 0px 7px -1px #000000",borderRadius:"5px"}}>
                        <>
                          {images.slice(0, visible).map((item, inda) =>
                            item.map((pics, indxc) => {
                              return (
                                <>
                                  <Container >
                                  {pics.Imageurls.length >0 && 
                                    <h4
                                      key={indxc}
                                      style={{
                                        marginBottom: "25px",
                                        color: "#1e3796",
                                        marginTop: "0px",
                                        display: "flex",
                                        fontFamily: "arial",
                                        padding: "7px",
                                      }}
                                    >
                                      {pics.monthname}
                                    </h4>
                            }
                                    {/* {pics.Imageurls.length === 0 && (
                                      <p
                                        style={{
                                          color: "red",
                                          fontFamily: "arial",
                                          fontSize: "17px",
                                          textAlign: "left",
                                          padding: "7px",
                                        }}
                                      >
                                        No images uploaded in this month
                                      </p>
                                    )} */}

                                    <Row>
                                      {pics.Imageurls.map((imgs, indx) => (
                                        <Col xl={3}>
                                          <center>
                                            <img
                                              style={{
                                                height: "180px",
                                                width: "300px",
                                                margin: "10px",
                                              }}
                                              alt="not found"
                                              src={imgs.src}
                                              key={indx}
                                            />{" "}
                                            <div
                                              style={{
                                                position: "absolute",
                                                top: "-3%",
                                                right: "-2%",

                                                zIndex: "1",
                                                cursor: "pointer",
                                                transform:
                                                  "translate(-50%,50%)",
                                              }}
                                            >
                                              <i
                                                style={{
                                                  color: "red",
                                                  backgroundColor:"white",
                                                  border: "1px solid white",
                                                  borderRadius: "1.5px",
                                                  width: "19px",
                                                  height: "20px",
                                                 
                                                }}
                                                onClick={() => {
                                                  deletea(imgs.id);
                                                }}
                                                className="fa-regular fa-trash-can"
                                              ></i>
                                              <div></div>
                                            </div>
                                            {/* <ReactImageCarouselViewer
                                  open={isOpen}
                                  onClose={() =>{ setIsOpen(false);console.log(indx)}}
                                  images={pics.Imageurls}
                                  startIndex={indx}

                                /> */}
                                          </center>
                                        </Col>
                                      ))}
                                    </Row>
                                  </Container>
                                </>
                              );
                            })
                          )}

                          <Container style={{ padding: "5px" }}>
                            {hide && (
                              <div className="mb-5" style={{ padding: "25px" }}>
                                <Button
                                  onClick={loadMore}
                                  style={{
                                    backgroundColor: "#1e3796",
                                    fontSize: "large",
                                    fontFamily: "arial",
                                    float: "left"
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
              )}

              {/* Delete Layer Ends */}
            </Col>
           </Row>
          
        </div>
      )}
      {/* HomeEnds   */}
    </>
  );
}

export default All;
