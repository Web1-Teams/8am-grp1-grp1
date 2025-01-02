import RightSide from './components/Right-side';
import NewPost  from './components/New-Post';
import LeftSide from './components/Left-side';
import './App.css';
 import QuestionButtons from './components/Question-buttons';
function App() {
  return (
    <div className='contenar' >
      < NewPost />
      < RightSide/> 
    </div>
  );
}

export default App;
