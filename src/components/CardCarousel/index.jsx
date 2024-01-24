import { Container, ButtonStyle } from "./style";
import { Heart, CaretRight, Pencil } from "@phosphor-icons/react";
import Counter from "../Counter";
import Button from "../ButtonRed";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const CardCarousel = ({ item }) => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(null);

  const [isAdmin, setIsAdmin] = useState(true);

  const handleCardClick = (item) => {
    setSelectedItem(item);

    const newData = [
      item.id,
      item.image,
      item.title,
      item.description,
      item.value,
      item.ingredients,
    ];

    navigate(`/dish/${item.id}`, { state: { data: newData } });
  };

  const handleEditClick = () => {
    const editData = [
      item.id,
      item.image,
      item.title,
      item.description,
      item.value,
      item.ingredients,
    ];
    navigate(`/dish/${item.id}`, { state: { data: editData } });
  };

  return (
    <Container>
      {isAdmin && (
        <div key={item.id}>
          <button className="pencilButton">
            <Pencil onClick={handleEditClick} />
          </button>
          <img src={`-./${item.image}`} />
          <h1>
            {item.title} <CaretRight size={12} />{" "}
          </h1>

          <p>R$ {item.value}</p>
        </div>
      )}
      {!isAdmin && (
        <div key={item.id}>
          <button className="heartButton">
            <Heart />
          </button>
          <img src={`-./${item.image}`} alt={item.description} />
          <h1>
            {item.title} <CaretRight size={12} />{" "}
          </h1>

          <p>R$ {item.value}</p>

          <Counter className="counter" />
          <ButtonStyle>
            <Button onClick={() => handleCardClick(item)} content="Incluir" />
          </ButtonStyle>
        </div>
      )}
    </Container>
  );
};

export default CardCarousel;
