import React from 'react'


function NoComponent() {
  return (
    <div style={{justifyContent:"center",alignItems:"center",display:"flex",height:"100vh",width:"auto",backgroundColor:"black"}}>
       <div style={{color:"red"}}>
       <lord-icon
    src="https://cdn.lordicon.com/wdqztrtx.json"
    trigger="hover"
    colors="primary:#e83a30"
    style={{width:"150px",height:"150px"}}>
</lord-icon>
       <h1 style={{fontFamily:"arial"}}>Error 404 </h1>
        <h1 style={{fontFamily:"arial"}}>Page Not Found</h1>
       </div>
       
    </div>
  )
}

export default NoComponent