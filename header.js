import React from "react"
import Navbar from "./navbar"

function App() {
    return (
        <div style = {{
            width:"100vw", height:"30vw", 
            backgroundImage: "url(" + "https://media-public.canva.com/5tE1s/MAD1ui5tE1s/1/tl.jpg" + ")",
            verticalAlign:"center", flexDirection:"column",
             color:"rgb(20, 73, 23)", textDecorationLine:"White", display:"flex"}}> 
            <Navbar/>
            <h1 style = {{fontSize:"80px", marginBottom:"-6px"}}>Front-End Web Development</h1>
            <h4 style = {{color:"rgb(20, 73, 23)", fontWeight:"bold"}}>By Brenda Seibel</h4>
           
        </div>
    )
    
    }
    export default App