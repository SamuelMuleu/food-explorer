import Container  from "./style";
import MenuHeader from "../MenuHeader";
import Input from "../Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Exit from "../Exit";
import Footer from "../Footer";




const Menu = () => {
  return (
    <Container>
      <MenuHeader />

      <Input svg={<MagnifyingGlass style={{marginLeft:'10px', marginTop:'129px' }}/>} placeholder="Busque Por Pratos ou Ingredientes" />
  
    <Exit/>
    <Footer/>
    </Container>
  );
};

export default  Menu;
