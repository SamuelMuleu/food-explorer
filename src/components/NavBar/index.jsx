import { Container, ButtonStyle, ContainerInput, ReceiptButton } from "./style";
import { List, Receipt, MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import Title from "../Title";
import Input from "../Input";
import Button from "../ButtonRed";
import ButtonSignout from "../ButtonSignout";
import { useAuth } from "../../hooks/auth";

const NavBar = ({ onOpenMenu, setSearchResults }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user } = useAuth();


  const handleAddDish = () => {
    navigate("/newdish");
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/dish", {
        params: {
          searchTerm: search,
        },
      });
      setSearchResults(response.data);

    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  };

  return (
    <Container >
      <ButtonStyle>
        <List onClick={onOpenMenu} style={{ marginLeft: "10px" }} />
      </ButtonStyle>

      <Title />
      <form onSubmit={handleSubmitSearch}>
        <ContainerInput>
          <Input
            svg={<MagnifyingGlass />}
            placeholder="Busque por Pratos ou Ingredientes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </ContainerInput>
      </form>


      {user && user.role === "admin" &&(

        <ReceiptButton>
          <Button
            svg={<Receipt />}
            onClick={handleAddDish}
            content="Novo Prato"
          />
        </ReceiptButton>
      )


      }


      <ButtonSignout />


    </Container>
  );
};

export default NavBar;
