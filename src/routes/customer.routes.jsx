import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { AuthDishProvider } from "../hooks/authDish";

export function CustomerRoutes() {
  return (
    <AuthDishProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dish/:id" element={<Dish />} />

      </Routes>
    </AuthDishProvider>
  );
}
