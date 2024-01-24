import * as Styles from "./style";

import { Input } from "../Input";
import Button from "../ButtonRed";
import CreateAccountLink from "../../components/CreateAccount-Link";

const LoginForm = () => {


  return (
    <form >
     <Styles.Container>
      <Input label="Email" placeholder="Exemplo:exemplo@exemplo.com.br" id="form"/>
      <Input
        label="Senha"
        placeholder="No minímo 6 caracteres"
        type="password"
        id="form"
      />
      <Button type="submit" id='form' content="Entrar" />

      <CreateAccountLink />
    </Styles.Container>
   </form>
  );
};

export default LoginForm;
