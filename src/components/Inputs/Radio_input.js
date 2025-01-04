


import { useState } from "react"
import "./Inputs1.css"




const Radio_input=(props)=>{

const[selectedGender,setSelectedGender]=useState("");

 const handleChange =(event)=>{
    setSelectedGender(event.target.value)
   
 }
 



    return(
   
         <div className="Gender">
         <label >Gender:</label>
        <input className={props.className} type="radio" value="male" checked={selectedGender === "male"} onChange={handleChange} required />
        <label className="labell" for="labell">{props.lab1} </label>

      
        <input className={props.className} type="radio" value="female"checked={selectedGender === "female"} onChange={handleChange} required/>
        <label className="labell" for="labell">{props.lab2} </label>



    </div>
    )
    
    
    }
    export default Radio_input;