import Container from "./style";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import RectangleMacaron from "../../components/RectangleMacaron";
import Footer from "../../components/Footer";
import CarouselComponent from "../../components/CarouselComponent";
import {dataJuice} from "../../utils/data";
import {data} from "../../utils/data";


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

      <div className="div-carousel">
        Refeições
        <CarouselComponent  dataArray={data} />
      </div>
      <div className="div-carousel">
        Pratos principais
        <CarouselComponent dataArray={data}/>
      </div>
      <div className="div-carousel">
        Bebidas principais
        <CarouselComponent  dataArray={dataJuice}/>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;


