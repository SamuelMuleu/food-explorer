import Container from "./style";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
const Home = () => {
  
  const [showComponent, setShowComponente] = useState(false);
  
const handleClick = ()=>{

setShowComponente(!showComponent);


};

  return (
    <Container>
<Header>
<Menu onClick={handleClick}/>
</Header>
   <Footer/>
    </Container>
  );
};

export default Home;
