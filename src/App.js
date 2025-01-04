/*
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
}*/

import Log_in from "./pages/Log_in";
import Sign_up from "./pages/Sign_up";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Courses from "./pages/Courses";
import Jop from "./pages/Jop";
import Profile from "./pages/Profile";
import Scholarship from "./pages/Scholarship";
import Hoom from "./pages/Hoom";



function App() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/Login' element={<Hoom/>} />
                <Route path='/Signup' element={<Hoom/>} />
                <Route path='/Courses' element={<Courses/>} />
                <Route path='/Jop' element={<Jop/>} />
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/Scholarship' element={<Scholarship/>} />
                <Route path='/Hoom' element={<Hoom/>} />
            </Routes>
        </BrowserRouter>


    );
}

export default App;
 /*


import React from 'react';

import Jop from "./pages/Jop";

const App = () => {
  return (
      <div>
        <Jop/>

      </div>
  );
};

export default App;*/
