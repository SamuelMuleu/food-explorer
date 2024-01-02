import Container from "./style";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import RectangleMacaron from "../../components/RectangleMacaron";
import Footer from "../../components/Footer";
import  CarouselComponent  from "../../components/CarouselComponent";
import CardCarousel from "../../components/CardCarousel";

import { useState } from "react";

const Home = () => {
 


  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };
  return (
    <Container>
      <NavBar onOpenMenu={handleOpenMenu} />

      <Menu menuIsOpen={MenuIsOpen} onCloseMenu={handleCloseMenu} />

      <RectangleMacaron />
<CarouselComponent/>
      <Footer />
    </Container>
  );
};

export default Home;
