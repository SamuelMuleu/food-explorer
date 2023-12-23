import Container  from "./style";
import MenuHeader from "../MenuHeader";
import Input from "../../components/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Exit from "../../components/Exit";
import Footer from "../../components/Footer";




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

export default Menu;
