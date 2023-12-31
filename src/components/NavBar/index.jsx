import { Container, ButtonStyle, ContainerInput, ReceiptButton } from "./style";
import { List, Receipt, MagnifyingGlass } from "phosphor-react";

import TitleHeader from "../TitleHeader";
import Input from "../Input";
import Button from "../ButtonRed";
import ButtonSignout from "../ButtonSignout";

const NavBar = ({ onOpenMenu }) => {
  return (
    <Container>
      <ButtonStyle onClick={onOpenMenu}>
        <List style={{ marginLeft: "10px" }} />
      </ButtonStyle>

      <TitleHeader />

      <ContainerInput>
        <Input
          svg={<MagnifyingGlass />}
          placeholder="Busque por Pratos ou Ingredientes"
        />
      </ContainerInput>

      <ReceiptButton>

        <Button svg={<Receipt />} content="Pedidos(0)"/>
 
      </ReceiptButton>
      
      <ButtonSignout />

      <ButtonStyle>
        <Receipt />
      </ButtonStyle>
    </Container>
  );
};

export default NavBar;
