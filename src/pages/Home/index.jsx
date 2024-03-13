import Container from "./style";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import RectangleMacaron from "../../components/RectangleMacaron";
import Footer from "../../components/Footer";
import CarouselComponent from "../../components/CarouselComponent";
import { api } from "../../services/api";

import { useState, useEffect } from "react";

export const Home = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [dish, setDishData] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await api.get("/dish");
        const data = response.data;
        setDishData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDishes();
  }, []);

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };



  const categories = [...new Set(dish.map((dish) => dish.categoria))];
  console.log(categories)



  return (
    <Container>
      <NavBar
        onOpenMenu={handleOpenMenu}
        setSearchResults={handleSearchResults}
 
      />

      <Menu
        menuIsOpen={MenuIsOpen}
        onCloseMenu={handleCloseMenu}
        onSubmitSearch={handleSearchResults}
      />

      <RectangleMacaron /> 
      <CarouselComponent
        searchResults={searchResults}
        dish={dish}
        categories={categories}
      />

      <Footer />
    </Container>
  );
};
