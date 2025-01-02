import  './Question-buttons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const QuestionButtons =(prpos)=>{
return (

  
            <a target="_blank" href={prpos.url}>  <FontAwesomeIcon className="i" icon={faStar} /> {prpos.title}
            </a>
       
 



)
}; 
export default QuestionButtons