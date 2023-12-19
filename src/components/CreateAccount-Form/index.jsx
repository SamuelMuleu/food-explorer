import Container from "./style";
import Input from "../Input/";
import Button from "../Button";

const CreateAccount = () => {
  return (
    <Container>
      <Input label="Seu Nome" placeholder="Exemplo: Samuel Pereira" />
      <Input label="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
      <Input label="Senha" placeholder="No minímo 6 caracteres"  type="password" />
      <Button>Criar Conta</Button>
    </Container>
  );
};

export default CreateAccount;
