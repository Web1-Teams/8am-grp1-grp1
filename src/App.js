import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import F from "./components/o/F";
import Nav from "./components/Nav/Nav";
import Header from "./components/H/header";
import AboutSection from "./components/AboutSection/AboutSection";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Nav />
                <Routes>
                <Route path="/about" element={<AboutSection />}/>
                </Routes>
                <F/>
            </div>
        </Router>
    );
}

export default App;
