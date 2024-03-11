import { Container, ButtonAdmin } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../../components/Menu";

import EditFormDish from "../../components/EditFormDish"
import Button from "../../components/ButtonRed";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { api } from "../../services/api";

export const EditDish = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const [locationInfo, setLocationInfo] = useState(null);
  const [dishState, setDishState] = useState(null);

  const navigate = useNavigate();

  const location = useLocation();
  const dish = location.state && location.state.dish;
  const selectedDish = dish || dishState;


  useEffect(() => {
    if (!selectedDish) {
    } else {
      const data = selectedDish.data || [];
      if (data.length > 0) {
        localStorage.setItem("locationInfo", JSON.stringify(data));
      }
    }
  }, [selectedDish]);

  useEffect(() => {
    const storedData = localStorage.getItem("locationInfo");
    if (storedData) {
      setLocationInfo(JSON.parse(storedData));
    }
  }, []);



  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };



  async function handledeleteDish() {



    try {
      const response = await api.delete(`/dish/${selectedDish.id}`);

      console.log(response.data)
      alert("Prato Deletado")
      navigate("/")

    } catch (error) {
      console.log(error.message)
    }
  }




  return (
    <Container>
      <NavBar onOpenMenu={handleOpenMenu} />
      <Menu menuIsOpen={MenuIsOpen} onCloseMenu={handleCloseMenu} />
      <EditFormDish
        image={selectedDish.imagem_path}
        title="Editar Prato"
        setCategorias={selectedDish.categoria}
        placeholder="Selecione imagem para alterá-la"
        inputPlaceholder={selectedDish.name}
        ingredients={selectedDish.ingredientes}
        prieceInput={selectedDish.preco}
        TextareaPlaceholder={selectedDish.descricao}
        Edit
      />
      {
        <ButtonAdmin onClick={handledeleteDish} className="buttonRemove"> Excluir Prato</ButtonAdmin>
      }




      <Footer />
    </Container>
  );
};
