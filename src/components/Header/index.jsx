import { Container, Menu } from "./style";
import { List, Receipt } from "phosphor-react";

import TitleHeader from "../TitleHeader";

const Header = () => {
  return (
    <Container>
      <Menu>
        <List style={{marginLeft:'10px'}} />
        </Menu>
        
        <TitleHeader />
        
        <Menu >
        <Receipt />
      </Menu>
    </Container>
  );
};

export default Header;
