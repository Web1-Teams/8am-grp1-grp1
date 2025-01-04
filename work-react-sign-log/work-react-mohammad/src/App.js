import logo from './logo.svg';
import './App.css';







import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Log_in from "./components/pages/Log_in"
import Sign_up from "./components/pages/Sign_up"





function App() {
  return (
    
    <BrowserRouter>
    <Routes>
     <Route path='/Login' element={<Log_in/>} />
     <Route path='/Signup' element={<Sign_up/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
