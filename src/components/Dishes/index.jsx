import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, json } from "react-router-dom";
import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { Container, BackPage, ContentButton } from "./style";
import Counter from "../Counter";
import Ingredients from "../Ingredients";
import Button from "../ButtonRed";
import { api } from "../../services/api";
import Footer from "../Footer";

import { useAuth } from "../../hooks/auth";

const Dishes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(true);
  const [dishState, setDishState] = useState(null);
  const [ingredients, setIngredient] = useState([]);
  const dish = location.state && location.state.dish;
  const selectedDish = dish || dishState;

const {user} = useAuth();

  if (!selectedDish) {
    return <div>Carregando...</div>;
  }

  const handleNavigateEdit = () => {
    if (selectedDish) {
      navigate(`/editdish/${selectedDish.id}`, { state: { dish: selectedDish } });
    }
  };

  console.log({ ingredients })


  useEffect(() => {
    const stateDish = localStorage.getItem("@dish:state");
    if (stateDish) {
      setDishState(JSON.parse(stateDish));
    }
  }, []);

  useEffect(() => {
    if (dish) {
      localStorage.setItem("@dish:state", JSON.stringify(dish));
    }
  }, [dish]);
  { console.log(dish) }


  useEffect(() => {
    const fetchIngredients = async (dishId) => {
      try {
        const response = await api.get(`/dish/${dishId}`);
        setIngredient(response.data);

      } catch (error) {
        console.error("Erro ao buscar ingredientes:", error);
      }
    };

    if (selectedDish) {
      fetchIngredients(selectedDish.id);
    }
  }, [selectedDish]);



  return (
    <Container>
      <div key={selectedDish.id}>
        <BackPage>
          <Link to={"/"}>
            <CaretLeft className="icon" />
            <p>voltar</p>
          </Link>
        </BackPage>
        <img
          src={`${api.defaults.baseURL}/files/${selectedDish.imagem_path}`}
          alt={`Dish ${selectedDish.id}`}
          className="image"
        />
        <div className="content">
          <h1>{selectedDish.name}</h1>
          <p>{selectedDish.descricao}</p>
          <Ingredients

            data={ingredients.ingredientes}
          />
        </div>

        {user &&  user.role === "admin" && (
          <div className="editdish">
            <Button content="Editar Prato" onClick={handleNavigateEdit} />
          </div>
        )}

        {user && user.role === "customer" && (
          <ContentButton className="buttons">
            <Counter />
            <Button
              className="svg"
              svg={<Receipt className="svg" />}
              content={`pedir. R$ ${selectedDish.preco}`}
            />
          </ContentButton>
        )}

        <Footer />
      </div>
    </Container>
  );
};

export default Dishes;
