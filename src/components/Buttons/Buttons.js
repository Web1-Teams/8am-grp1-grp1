
import './Buttons.css'

import Input_passw from "../Inputs/Input_passw"
import {Link} from 'react-router-dom';

const Buttons=(props)=>{
return(

<>
<input type={props.type} className={props.className} value={props.value}  disabled={props.disabled}/>
    </>
)
}
export default Buttons;