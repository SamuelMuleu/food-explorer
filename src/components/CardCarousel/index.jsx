import React, { useState, useEffect } from "react";
import { Container, ButtonStyle } from "./style";
import { Heart, CaretRight, Pencil } from "@phosphor-icons/react";
import Counter from "../Counter";
import Button from "../ButtonRed";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

const CardCarousel = ({ dish, searchResults }) => {
  const navigate = useNavigate();
  const [dishData, setDishData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [filteredDishData, setFilteredDishData] = useState([]);

const {user} = useAuth();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await api.get("/dish");
        const data = response.data;
        setDishData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDishes();
  }, []);

  useEffect(() => {
    if (searchResults && Object.keys(searchResults).length !== 0) {
      // Se houver resultados da pesquisa, filtra os pratos com base no nome da pesquisa
      const filteredData = dishData.filter((dish) => dish.name === searchResults.name);
      setFilteredDishData(filteredData);
    } else {
      setFilteredDishData(dishData);
    }
  }, [searchResults, dishData]);

  const handleCardClick = (dish) => {
    navigate(`/dish/${dish.id}`, { state: { dish: dish } });
  };

  const handleEditClick = (dish) => {
    navigate(`/dish/${dish.id}`, { state: { dish: dish } });
  };

  return (
    <Container>
     
        <div key={dish.id}>
          {user &&  user.role == "admin" ? (
            <button className="pencilButton" onClick={() => handleEditClick(dish)}>
              <Pencil />
            </button>
          ) : (
            <button className="heartButton">
              <Heart />
            </button>
          )}
          <img src={`${api.defaults.baseURL}/files/${dish.imagem_path}`} alt={dish.name} />
          <h1>{dish.name}</h1>
          <p>R$ {dish.preco}</p>
          {user &&  user.role == "customer" && (
            <div>
              <Counter className="counter" />
              <ButtonStyle>
                <Button onClick={() => handleCardClick(dish)} content="Incluir" />
              </ButtonStyle>
            </div>
          )}
        </div>

    </Container>
  );
};

export default CardCarousel;
