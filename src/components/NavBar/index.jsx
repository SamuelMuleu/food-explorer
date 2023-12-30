import { Container, ButtonStyle, ContainerInput,ReceiptButton } from "./style";
import { List, Receipt, MagnifyingGlass } from "phosphor-react";

import TitleHeader from "../TitleHeader";
import Input from "../Input";
import Button from "../ButtonRed";

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
      <Button svg={<Receipt/>} placeholder="Pedidos"/>
  
</ReceiptButton>

      <ButtonStyle>
        <Receipt />
      </ButtonStyle>
    </Container>
  );
};

export default NavBar;
