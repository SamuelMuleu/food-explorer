import { Container, ButtonStyle } from "./style";
import { List, Receipt } from "phosphor-react";


import TitleHeader from "../TitleHeader";

const Header = ({onOpenMenu}) => {
  return (
    <Container>
      <ButtonStyle onClick={onOpenMenu}>
        <List style={{marginLeft:'10px'}} />
        </ButtonStyle>
        
        <TitleHeader />
        
        <ButtonStyle >
        <Receipt />
      </ButtonStyle>
    </Container>
  );
};

export default Header;
