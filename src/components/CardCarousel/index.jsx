import {Container,ButtonStyle} from "./style";
import { Heart,CaretRight } from "@phosphor-icons/react";
import Counter from "../Counter";
import Button from "../ButtonRed";




const CardCarousel = ({item}) => {
 


  return (

    < Container>
  
        <div key={item.id}>
          <button className="heartButton"><Heart /></button>
          <img src={item.image} alt={item.description} />
          <h1>{item.title} <CaretRight size={12}/> </h1>

          <p>R$ {item.value}</p>
          <Counter className="counter"/>
<ButtonStyle>

          <Button  content="Incluir"/>
</ButtonStyle>
        </div>
 
      </Container>

);

};

export default CardCarousel;