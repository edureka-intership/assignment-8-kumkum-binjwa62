import React,{useState} from "react";
import "../assets/header.css";
import Modal from "react-modal";

export default function Headtop(){
    
    const [isLoginModelOpen, setLoginModel] =useState(false)
    const[isResgisterOpen,setregister]=useState(false)
    
    return(

        <div className="head-top">
            <div className="Logo">
                <h1> e!</h1>
            </div>
            <div className="Login-block">
                    <button className="login" onClick={()=>setLoginModel(true)}>Login</button>
                    <button className="register" onClick={()=>setregister(true)}>Register</button>
            </div>
            <Modal isOpen={isLoginModelOpen}>
            <center>
            <h1>Login</h1><br/>
            <form>
                <label> Username :</label>
                <input type="text" placeholder="Enter a username"/>
                <br></br><br></br>
                <label> Password : </label>
                <input type="password" placeholder="Enter a username"/>
                <br></br><br></br>
                <button style={{color:"black"}}> Login</button>
                <br></br><br></br>

            </form>
                    <button onClick={()=>setLoginModel(false)} style={{backgroundColor:"red"}}>X</button>
                    </center>
           </Modal>

           <Modal
           isOpen={isResgisterOpen}>
           <center>
            <h1> Create an account</h1><br/>
            <form>
                <label> Username :</label>
                <input type="text" placeholder="Enter a username"/>
                <br></br><br></br>
                <label> Password : </label>
                <input type="password" placeholder="Enter a username"/>
                <br></br><br></br>
                <button style={{color:"black"}}> Register</button>
                <br></br><br></br>
                <button  onClick={()=>setregister(false)} style={{backgroundColor:"red"}}> X</button>

            </form>
            </center>
           </Modal>
        </div>
    )
}