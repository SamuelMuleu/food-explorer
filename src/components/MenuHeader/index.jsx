import { Container, Button, Menu } from "./style";
import { X } from "@phosphor-icons/react";

const MenuHeader = () => {
  return (
    <Container>
      <Button>
        <X />
      </Button>
      <Menu>Menu</Menu>
    </Container>
  );
};

export default MenuHeader;
