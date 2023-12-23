import * as Styles from "./style";

import { Input } from "../Input";
import Button from "../ButtonRed";
import CreateAccountLink from "../../components/CreateAccount-Link";

const LoginForm = () => {


  return (
    <Styles.Container>
      <Styles.DesktopHeader> Faça Login</Styles.DesktopHeader>
      <Input label="Email" placeholder="Exemplo:exemplo@exemplo.com.br" />
      <Input
        label="Senha"
        placeholder="No minímo 6 caracteres"
        type="password"
      />
      <Button type="submit" label="Entrar" />

      <CreateAccountLink />
    </Styles.Container>
  );
};

export default LoginForm;
