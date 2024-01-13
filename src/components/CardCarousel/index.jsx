import {Container,ButtonStyle} from "./style";
import { Heart,CaretRight } from "@phosphor-icons/react";
import Counter from "../Counter";
import Button from "../ButtonRed";
import { useNavigate } from 'react-router-dom';


import { useState } from "react";



const CardCarousel = ({item}) => {
 
  const navigate = useNavigate();
 
  const [selectedItem, setSelectedItem] = useState(null);

  

  const handleCardClick = (item) => {
    setSelectedItem(item);
    
    const newData = [item.id,item.image,item.title,item.description,item.value];

    navigate(`/dish/${item.id}`, { state: { data: newData } });
  };


  return (


    < Container>
  
        <div key={item.id} >
          <button className="heartButton"><Heart /></button>
          <img src={`-./${item.image}`} alt={item.description} />
          <h1>{item.title} <CaretRight size={12}/> </h1>

          <p>R$ {item.value}</p>
          <Counter className="counter"/>
<ButtonStyle>

        <Button onClick={() => handleCardClick(item)} content="Incluir"/> 
         
</ButtonStyle>
        </div>
 
      </Container>

);

};

export default CardCarousel;