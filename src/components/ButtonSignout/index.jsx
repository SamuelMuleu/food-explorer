import Container from "./style";
import { SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const ButtonSignout = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Link onClick={signOut}>
        <SignOut />
      </Link>
    </Container>
  );
};

export default ButtonSignout;
