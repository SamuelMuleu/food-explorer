import { Container, Menu } from "./style";
import { X } from "@phosphor-icons/react";
import Button from "../ButtonX";

const MenuHeader = () => {
  return (
    <Container>
      <Button icon ={<X/>}/>
      <Menu>Menu</Menu>
    </Container>
  );
};

export default MenuHeader;
