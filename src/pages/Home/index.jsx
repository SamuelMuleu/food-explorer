import Container from "./style";
import Menu  from "../../components/Menu";
import Input from "../../components/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Exit from "../../components/Exit";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <Container>
<Menu/>
<Input placeholder="Busque Por Pratos ou Ingredientes"  svg={<MagnifyingGlass style={{marginLeft:'10px' }}/>}/>
    
    <Exit/>
    <Footer/>
    </Container>
  );
};

export default Home;
