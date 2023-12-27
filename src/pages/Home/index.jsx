import Container from "./style";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const Home = () => {
const [MenuIsOpen,setMenuIsOpen] = useState(false); 

const handleOpenMenu = ()=>{

setMenuIsOpen(true);

}
const handleCloseMenu = ()=>{


  setMenuIsOpen(false);
}



  return (
    <Container>
      <Header onOpenMenu={handleOpenMenu} />
 <Menu   menuIsOpen={MenuIsOpen} onCloseMenu={handleCloseMenu} />
      <Footer />
    </Container>
  );
};

export default Home;
  