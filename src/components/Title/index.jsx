import Container from "./style";
import Polygon from "../../assets/Polygon.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

function Title() {
  const [isAdmin, setIsAdmin] = useState(true);

  const location = useLocation();

  const pagesLoad = ["/home", "/newdish"];

const {user} = useAuth();
console.log(user)

  return (
    <Container>

      <img src={Polygon} alt="Polygon blue" />
      <h1>food explorer</h1>
      {user && user.role === "admin" && <p>Admin</p>}
    </Container>
  );
}

export default Title;
