// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dish from "./pages/Dish";
import EditDish from "./pages/EditDish";
import NewDish from "./pages/NewDish";

function App() {
  return (
    <Router basename="/food-explorer">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dish/:id" element={<Dish />} />
        <Route path="/editdish/:id" element={<EditDish />} />
        <Route path="/newdish" element={<NewDish />} />
      </Routes>
    </Router>
  );
}

export default App;
