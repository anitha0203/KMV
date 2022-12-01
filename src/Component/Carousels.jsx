import React from "react";

import  { Tooltip,OverlayTrigger,Button } from 'react-bootstrap';


function Carousels() {

  return (
   
      <div style={{ position: "relative", width: "100%" }}>
        <img
          className="d-block w-100"
          src={require("../images/MainBanner.jpg")}
          alt="First slide"
        />
        <a
          href="/Gallery"
          style={{ padding: "0px", margin: "0px" }}
        >
          <OverlayTrigger  placement="right" overlay={<Tooltip id="tooltip-disabled">project photos</Tooltip>}>
      
        <Button
            className="btn primary btn-inlineblock"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
              color: "white",
              fontFamily: "Arial",
              backgroundColor: "#1e3796",
              transform: "translate(-50%,50%)",
            }}
          >
            Project Photos
          </Button>
      
       </OverlayTrigger>
         
        </a>
      </div>
    
  );
}

export default Carousels;
