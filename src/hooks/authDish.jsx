import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useAuth } from "../hooks/auth";

const AuthContext = createContext({});

const AuthDishProvider = ({ children }) => {
  const { user } = useAuth();
  const [dishes, setDishes] = useState([]);

  const token = localStorage.getItem("@foodexplorer:token");
  async function fetchDishes() {
    try {
      const response = await api.get("/dish");
      const data = response.data;
      setDishes(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        dishes,
        fetchDishes,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useDishAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthDishProvider, useDishAuth };
