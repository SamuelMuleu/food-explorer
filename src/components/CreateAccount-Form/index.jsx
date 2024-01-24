import React, { Component } from "react";
import * as Styles from "./style";
import Input from "../Input";
import Button from "../ButtonRed";
import ReturnToPageLogin from "../../components/ReturnLogin-Link";

class CreateAccount extends Component {
  
  constructor(props) {
    super(props);
    this.state ={name:'', email: "", password: "" };


    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {

    this.setState({ name: event.target.value });
   
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
   
    const { name, email, password } = this.state;
    console.log(`Um nome foi enviado: ${name}`);
    console.log(`Um email foi enviado: ${email}`);
    console.log(`Uma senha foi enviado: ${password}`);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Styles.Container>
          <Input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            label="Seu Nome"
            placeholder="Exemplo: Samuel Pereira"
          />
          <Input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            label="Senha"
            placeholder="No mínimo 6 caracteres"
          />
          <Button type='submit' content="Criar Conta" />
          <ReturnToPageLogin />
        </Styles.Container>
      </form>
    );
  }
}

export default CreateAccount;
