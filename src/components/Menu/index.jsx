import Container from "./style";
import MenuAside from "../MenuHeader";
import Input from "../Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Exit from "../Exit";
import Footer from "../Footer";

const Menu = ({ menuIsOpen,onCloseMenu}) => {


  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MenuAside onCloseMenu={onCloseMenu} />

      <Input svg={<MagnifyingGlass/>} placeholder="Busque Por Pratos ou Ingredientes" />

      <Exit />

      <Footer className ='footer'/>
    </Container>
  );
};

export default Menu;
