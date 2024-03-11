import Container from "./style";
import MenuAside from "../MenuHeader";
import Input from "../Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Exit from "../Exit";
import Footer from "../Footer";
import { useState } from "react";
import { api } from "../../services/api";

const Menu = ({ menuIsOpen, onCloseMenu, onSubmitSearch }) => {
  const [search, setSearch] = useState('');


  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/dish", {
        params: {
          searchTerm: search,
        },
      });




      const searchResults = response.data;
      onSubmitSearch(searchResults);


    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }

  };



  return (
    <form onSubmit={handleSubmitSearch}>

      <Container data-menu-is-open={menuIsOpen}>
        <MenuAside onCloseMenu={onCloseMenu} />

        <Input
          onChange={(e) => setSearch(e.target.value)}
          svg={<MagnifyingGlass />}
          placeholder="Busque Por Pratos ou Ingredientes"
          value={search}

        />

        <Exit />
      </Container >

    </form>
  );
};

export default Menu;
