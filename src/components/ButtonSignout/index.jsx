import Container from "./style";
import { SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const ButtonSignout = () => {
  return (
    <Container>
      <Link to="/SignIn">
        <SignOut />
      </Link>
    </Container>
  );
};

export default ButtonSignout;
