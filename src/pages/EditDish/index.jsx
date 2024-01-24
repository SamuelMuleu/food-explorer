import Container from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../../components/Menu";

import FormDish from "../../components/FormDish";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const EditDish = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const [locationInfo, setLocationInfo] = useState(null);
  const { state } = location;

  useEffect(() => {
    if (!state) {
    } else {
      const data = state?.data || [];
      if (data.length > 0) {
        localStorage.setItem("locationInfo", JSON.stringify(data));
      }
    }
  }, [state]);

  useEffect(() => {
    const storedData = localStorage.getItem("locationInfo");
    if (storedData) {
      setLocationInfo(JSON.parse(storedData));
    }
  }, []);

  const [id, image, title, description, value, ingredients] =
    locationInfo || [];

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
      <FormDish
        key={id}
        image={image}
        title="Editar Prato"
        placeholder="Selecione imagem para alterá-la"
        inputPlaceholder={title}
        prieceInput={value}
        TextareaPlaceholder={description}
        Edit
      />

      <Footer />
    </Container>
  );
};

export default EditDish;
