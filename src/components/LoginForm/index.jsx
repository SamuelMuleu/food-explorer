import Container from "./style";
import { Input } from "../Input";
import Button from "../Button";

const LoginForm = () => {
  return (
    <Container>
      <Input label="Email" placeholder="Exemplo:exemplo@exemplo.com.br" />
      <Input
        label="Senha"
        placeholder="No minímo 6 caracteres"
        type="password"
      />
      <Button type="submit" />
    </Container>
  );
};

export default LoginForm;
