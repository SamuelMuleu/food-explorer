import Container from "./style";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <Container>
      <Link to="/food-explorer/signup">
        Criar uma Conta
      </Link>
    </Container>
  );
};

export default CreateAccount;
