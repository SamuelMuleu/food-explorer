import Container from "./style";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
const Home = () => {
  
  const [showComponent, setShowComponent] = useState(false);
  
const handleClick = ()=>{

setShowComponent(showComponent);


};

  return (
    <Container>
<Header>
  {
setShowComponent &&
<Menu onClick={handleClick}/>
  }
</Header>
   <Footer/>
    </Container>
  );
};

export default Home;
