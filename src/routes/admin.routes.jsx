import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { EditDish } from "../pages/EditDish";

import { NewDish } from "../pages/NewDish";
import { AuthDishProvider } from "../hooks/authDish";

export function AdminRoutes() {
  return (
    <AuthDishProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dish/:id" element={<Dish />} />
        <Route path="/editdish/:id" element={<EditDish />} />
        <Route path="/newdish" element={<NewDish />} />

      </Routes>
    </AuthDishProvider>
  );
}
