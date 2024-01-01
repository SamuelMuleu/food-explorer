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
      <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route  path="/home" element={<Home/>}/>
 
      </Routes>
    </Router>
  );
}

export default App;
