import RightSide from './componants/Right-side';
import NewPost  from './componants/New-Post';
import LeftSide from './componants/Left-side';
import './App.css';
 import QuestionButtons from './componants/Question-buttons';
function App() {
  return (
    <div className='contenar' >
      < NewPost />
      < RightSide/> 
    </div>
  );
}

export default App;
