import Container from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
const Exit = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const { signOut,user } = useAuth();
  return (
    <Container>
      {user && user.role === "admin" && (
        <Link className="link" to={"/newdish"}>
          Novo Prato
        </Link>
      )}

      <Link className="link" onClick={signOut}>
        Sair
      </Link>
    </Container>
  );
};

export default Exit;
