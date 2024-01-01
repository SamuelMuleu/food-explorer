import * as Styles from "./style";
import Input from "../Input/";
import Button from "../ButtonRed";
import ReturnToPageLogin from "../../components/ReturnLogin-Link";

const CreateAccount = () => {
  return (
    <Styles.Container>
      <Styles.DesktopHeader>Crie sua Conta</Styles.DesktopHeader>
      <Input label="Seu Nome" placeholder="Exemplo: Samuel Pereira" />
      <Input label="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
      <Input
        label="Senha"
        placeholder="No minímo 6 caracteres"
        type="password"
      />
      <Button content="Criar Conta"/>
      <ReturnToPageLogin />
    </Styles.Container>
  );
};

export default CreateAccount;
