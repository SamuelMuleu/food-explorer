// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {register} from "swiper/element/bundle";

register();
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/food-explorer" element={<SignIn />} />
        <Route path="/food-explorer/signin" element={<SignIn />} />
        <Route path="/food-explorer/signup" element={<SignUp />} />
        <Route  path="/food-explorer/home" element={<Home/>}/>
 
      </Routes>
    </Router>
  );
}

export default App;
