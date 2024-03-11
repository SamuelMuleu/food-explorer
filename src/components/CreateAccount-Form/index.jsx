import * as Styles from "./style";
import Input from "../Input";
import Button from "../ButtonRed";
import ReturnToPageLogin from "../../components/ReturnLogin-Link";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  };

  return (
    <form>
      <Styles.Container>
        <Input
          type="text"
          placeholder="Exemplo: Samuel Pereira"
          onChange={(e) => setName(e.target.value)}
          label="Seu Nome"
        />
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Senha"
          placeholder="No mínimo 6 caracteres"
        />
        <Button onClick={handleSubmit} content="Criar Conta" />
        <ReturnToPageLogin />
      </Styles.Container>
    </form>
  );
};

export default CreateAccount;
