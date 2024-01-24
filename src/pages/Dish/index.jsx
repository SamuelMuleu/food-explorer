import { Container } from "./style";
import NavBar from "../../components/NavBar";
import Menu  from "../../components/Menu";
import Dishes from "../../components/Dishes";


import { useState } from "react";

const Dish= ()=>{

    const [MenuIsOpen, setMenuIsOpen] = useState(false);
    

    const handleOpenMenu = () => {
      setMenuIsOpen(true);
    };
    const handleCloseMenu = () => {
      setMenuIsOpen(false);
    };


return (


    <Container>
<NavBar onOpenMenu={handleOpenMenu}/>
<Menu menuIsOpen={MenuIsOpen} onCloseMenu={handleCloseMenu} />

<Dishes />



    </Container>
)



};

export default Dish;