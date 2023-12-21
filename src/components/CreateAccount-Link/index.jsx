import Container from "./style";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <Container>
      <Link to="/Signup">
        Criar uma Conta
      </Link>
    </Container>
  );
};

export default CreateAccount;
