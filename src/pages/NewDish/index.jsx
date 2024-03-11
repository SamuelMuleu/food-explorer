import { Container } from "./style";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FormDish from "../../components/FormDish";
import { useState } from "react";
import Menu from "../../components/Menu";

export const NewDish = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <Container>
      <NavBar menuIsOpen={MenuIsOpen} onOpenMenu={handleOpenMenu} />
      <Menu menuIsOpen={MenuIsOpen} onCloseMenu={handleCloseMenu} />

      <FormDish
        title="Adicionar Prato"
        placeholder="Selecione imagem"
        inputPlaceholder="Ex: Salada Céasar"
        prieceInput="R$ 00,00"
        TextareaPlaceholder="Fale brevemente sobre o prato, seus ingredientes e composição"
      />

      <Footer />
    </Container>
  );
};
