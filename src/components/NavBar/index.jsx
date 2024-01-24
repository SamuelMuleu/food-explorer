import { Container, ButtonStyle, ContainerInput, ReceiptButton } from "./style";
import { List, Receipt, MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Title from "../Title";
import Input from "../Input";
import Button from "../ButtonRed";
import ButtonSignout from "../ButtonSignout";

const NavBar = ({ onOpenMenu }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);

  const handleAddDish = () => {
    navigate("/newdish");
  };

  return (
    <Container>
      <ButtonStyle>
        <List onClick={onOpenMenu} style={{ marginLeft: "10px" }} />
      </ButtonStyle>

      <Title />

      <ContainerInput>
        <Input
          svg={<MagnifyingGlass />}
          placeholder="Busque por Pratos ou Ingredientes"
        />
      </ContainerInput>

      {isAdmin && (
        <ReceiptButton>
          <Button
            svg={<Receipt />}
            onClick={handleAddDish}
            content="Novo Prato"
          />
        </ReceiptButton>
      )}

      {!isAdmin && (
        <ReceiptButton>
          <Button svg={<Receipt />} content="pedidos(0)" />
        </ReceiptButton>
      )}

      <ButtonSignout />

      <ButtonStyle>{!isAdmin && <Receipt />}</ButtonStyle>
    </Container>
  );
};

export default NavBar;
