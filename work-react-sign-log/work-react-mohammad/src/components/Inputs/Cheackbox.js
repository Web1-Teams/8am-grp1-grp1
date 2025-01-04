import { useState } from "react";


import "./Inputs1.css"



const Checkbox=(props)=>{

const[labelvalue,setlablevalue]=useState("Check me out")

 const ChangeCheckmeout=(event)=>{
    if(event.target.checked){
        setlablevalue("Checked")
    }
    else{
  
        
        setlablevalue("check me out")
    }

 }
    return(
    <div className={props.inputs} >
        
        <input type="checkbox" className={props.className} onChange={ChangeCheckmeout}/>
        <label className="labell" for="labell">{labelvalue}</label>
    </div>
    )
    
    
    }
    export default Checkbox;