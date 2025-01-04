

import "./Text.css"


const Textt=(props)=>{
return(
    <>
<h2 className={props.className}>  {props.title}    </h2>
<p>   {props.paragraph}            </p>
<label> {props.label}        </label>
</>
)
}
export default Textt;
