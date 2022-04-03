import React, { useState } from "react";

 function Events(){

    const [msg,setMsg]= useState("Reactjs with tsx")

    const [name,setName]=useState("sumit vasanta dhekane")
     
       const fun_one= function(){
               setName("Rahul vasanta dhekane")
             console.log("welcome to the events");
       }

        const fun_two = (arg1,arg2)=>{
               if(arg1=="admin"&&arg2=="admin"){
               console.log("login success")
               }else{
               console.log("Login failed")
               }
        }

        const fun_three= (msg)=>{
            console.log(msg,"welcome to events")
             
        }

       
     
    return(

        <React.Fragment>
            <h2>{name}</h2>
            <h1>{msg}</h1>
            <button onClick={fun_one}>clickme</button>
            <br></br><br></br>
            <button onDoubleClick={()=>{fun_two("admin","admin")}}>double Click</button>
            <button onClick={()=>{fun_three("hello")}}>click</button>
            <button onClick={()=>{setMsg("Reactjs with jsx")}}>conClick</button>
        </React.Fragment>
    )
} export default Events;