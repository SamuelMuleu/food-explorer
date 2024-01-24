import Container from "./style";
import Polygon from "../../assets/Polygon.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Title() {
  const [isAdmin, setIsAdmin] = useState(true);

  const location = useLocation();

  const pagesLoad = ["/home", "/newdish"];

  const midlleware = pagesLoad.includes(location.pathname);

  return (
    <Container>
      <img src={Polygon} alt="Polygon blue" />
      <h1>food explorer</h1>

      {midlleware && <p>Admin</p>}
    </Container>
  );
}

export default Title;
