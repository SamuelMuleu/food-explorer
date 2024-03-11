import { useState } from "react";

import * as Styles from "./style";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import Button from "../ButtonRed";
import CreateAccountLink from "../../components/CreateAccount-Link";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
  return (
    <form>
      <Styles.Container>
        <Input
          label="Email"
          placeholder="Exemplo:exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          placeholder="No minímo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button content="Entrar" onClick={handleSignIn} />

        <CreateAccountLink />
      </Styles.Container>
    </form>
  );
};

export default LoginForm;
