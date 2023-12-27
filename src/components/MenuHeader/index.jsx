import { Container, Menu } from "./style";
import { X } from "@phosphor-icons/react";
import Button from "../ButtonX";



const MenuAside = ({onCloseMenu}) => {



  return (
    <Container >
      <Button  onCloseMenu={onCloseMenu}icon ={<X/>}/>
      <Menu  >Menu</Menu>
    </Container>
  );
};

export default MenuAside;
