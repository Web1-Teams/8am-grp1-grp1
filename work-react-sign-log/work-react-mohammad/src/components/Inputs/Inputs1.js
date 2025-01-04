import './Inputs1.css'



const Inputs1=(props)=>{
return(
<div className={props.inputs} >
    
<input type={props.Type} className={props.className} placeholder={props.placeholder} required />
<label className="labell" for="labell">{props.lab}</label>

</div>
)


}
export default Inputs1;