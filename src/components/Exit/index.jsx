import Container from "./style";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
const Exit = () => {


  const { signOut,user } = useAuth();



  const handleSignOut = () => {
    signOut();

  };


  return (
    <Container>
      {user && user.role === "admin" && (
        <Link className="link" to={"/newdish"}>
          Novo Prato
        </Link>
      )}

      <Link className="link" onClick={handleSignOut} to={"/"}>
        Sair
      </Link>
    </Container>
  );
};

export default Exit;
