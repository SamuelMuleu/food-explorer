import Container from "./style";
import { Heart } from "@phosphor-icons/react";
import Counter from "../Counter";
import Button from "../ButtonRed";

const CardCarousel = () => {
  const data = [
    {
      id: "1",
      image: "./dist/image1.png",
      title: "Torradas de Parma",
      description: "Presunto de parma e rúcula em um pão com fermentação natural.",
      value: "25,97"
    },
    {
      id: "2",
      image: "./dist/image2.png",
      title: "Salada Ravanello",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
      value: "49,79",
    },
    {
      id: "3",
      image: "./dist/image3.png",
      title: "Spaguetti Gambe",
      description: "Massa fresca com camarões e pesto. ",
      value: "79,97"
    },
    { id: "4", 
    image: "./dist/image4.png",
     title: "Salada Radish", 
     description: "Rabanetes fatiados,tomate cereja,folhas verdes,pepino.Com molho de limão e azeite de oliva.",
     value: "49,79"
     },
    { id: "5", 
    image: "./dist/image5.png", 
    title: "Prugna Pie", 
    description: "Torta de ameixa com massa amanteigada, polvilho em açucar.",
    value: "79,97"
 },
    { id: "6", 
    image: "./dist/image6.png",
     title: "Peachy pastrie",
      description: "Delicioso folheado de pêssego com folhas de hortelã.",
      value: "32,97"
     },
    { id: "7",
     image: "./dist/image7.png",
      title: "Macarons", 
      description: "Farinha de amêndoas, manteiga, claras e açúcar." ,
      value: "79,97"
    },
  ];

  return (
    <Container>
      {data.map((item) => (
        <div key={item.id}>
            <button><Heart /></button>
          <img src={item.image} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>R${item.value}</p>
          <Counter/>
          <Button content="Incluir"/>
        </div>
      ))}
    </Container>
  );
};

export default CardCarousel;
