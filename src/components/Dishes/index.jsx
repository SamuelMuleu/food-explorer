import { Container, BackPage } from "./style";
import Counter from "../Counter";
import Ingredients from "../Ingredients";
import Button from "../ButtonRed";
import Footer from "../Footer";

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

import { CaretLeft,Receipt } from "@phosphor-icons/react";




const Dishes = () => {

  const location = useLocation();

  const [locationInfo, setLocationInfo] = useState(null);
  
  const { state } = location;
  const data = state?.data || [];

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('locationInfo', JSON.stringify(data));
    }
  }, []);


useEffect(() => {
    const storedData = localStorage.getItem('locationInfo');
    if (storedData) {
      setLocationInfo(JSON.parse(storedData));
    }
  }, []);



  const [ id, image, title, description,value ] =locationInfo || [];

    return (
    <Container  >
      {locationInfo &&(
        <div key={id} >
          <BackPage>
          <Link to={"/home"}> 
              <CaretLeft className="icon" /> voltar
            </Link>
          </BackPage>
          <img src={image} alt={`Dish ${id}`}  />
          <h1>{title}</h1>
          <p>{description}</p>
        <Ingredients/>
          <Ingredients/>
          <Counter/>
          <Button svg={<Receipt/>} content={`pedir. R$ ${value}`}/>
          <Footer/>
        </div>
      )}
    </Container>
  );
};

export default Dishes;
