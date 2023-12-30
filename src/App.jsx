// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {register} from "swiper/element/bundle";


import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";


register();

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route  path="/home" element={<Home/>}/>
 
      </Routes>
    </Router>
  );
}

export default App;
