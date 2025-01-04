



import { Link } from 'react-router-dom';
import './Linkk.css'

const Linkk=(props)=>{
return(
  


<Link to={props.to} className={props.className}> {props.title}</Link>
)


}
export default Linkk;