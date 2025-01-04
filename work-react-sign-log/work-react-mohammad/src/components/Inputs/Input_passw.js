

import "./Inputs1.css"
import Buttons from "../Buttons/Buttons";
import React, { useState } from "react";

const PasswordFields = (props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [error, setError] = useState(""); 
 

 
  const handlePasswordChange = (e) => {
    
    setPassword(e.target.value);
    setError(password.length < 8);
      setIsMatch(e.target.value === confirmPassword);
     
  };

  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsMatch(password === e.target.value);
  };


  return (
    <>
      <div>
         <input  className={props.className} placeholder="password"  type="password" value={password} onChange={handlePasswordChange} required />
      </div>


  
     { error &&(
  <div style={{ color: error ? "red" :"green" , marginBottom: "10px" }}>
     يجب أن تكون أطول من 8 أحرف
  </div>
)}
   


      <div>
         <input className={props.className} placeholder="Confirm Password" type="password"  value={confirmPassword} onChange={handleConfirmPasswordChange}  style={{ width: "100%", padding: "8px" }}required />
      </div>
      <div style={{color: isMatch ? "green" : "red", marginBottom: "10px"  }} >
        {(isMatch  ? "كلمتا المرور متطابقتان" : "كلمتا المرور غير متطابقتين")}
      </div>
      <Buttons type="submit" className="button-sign"  value="Sign up"  disabled={error||!isMatch} />
    </>
  );
};

export default PasswordFields;





















/*const [formInput,setFormInput]=useState ({
password:"",
coniformPassword:"",


});

const [formError,setFormError ]=useState ({

password:"",
coniformPassword:"",


});

*/





 
/*const Input_passw=(props)=>{

const[passwordd,setPassword]=useState("")
const[error,setError]=useState("")


 const handleChange=(event)=>{
    setPassword(event.target.value)
    
    if(passwordd.length<8){
        setError('كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل.');
    }
    else{
  
        
        setError('');
    }

 }
    return(
    <div className={props.inputs} >
      
        <input type="password" className={props.className}  placeholder={props.placeholder}  checked={handleChange} value={passwordd}  onChange={handleChange}/>
        <label className="labell" for="labell">{props.labelvalue}</label>
    </div>
    )
    
    
    }
    */
