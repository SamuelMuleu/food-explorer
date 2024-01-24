import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { Container, BackPage, ContentButton } from "./style";
import Counter from "../Counter";
import Ingredients from "../Ingredients";
import Button from "../ButtonRed";
import Footer from "../Footer";

const Dishes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(true);
  const [locationInfo, setLocationInfo] = useState(null);

  const { state } = location;

  useEffect(() => {
    if (!state) {
      navigate("/home");
    } else {
      const data = state?.data || [];
      if (data.length > 0) {
        localStorage.setItem("locationInfo", JSON.stringify(data));
      }
    }
  }, [state, navigate]);

  useEffect(() => {
    const storedData = localStorage.getItem("locationInfo");
    if (storedData) {
      setLocationInfo(JSON.parse(storedData));
    }
  }, []);

  const [id, image, title, description, value, ingredients] =
    locationInfo || [];

  const handleNavigateEdit = () => {
    navigate(`/editdish/:${id}`);
  };

  return (
    <Container>
      {locationInfo && (
        <div key={id}>
          <BackPage>
            <Link to={"/home"}>
              <CaretLeft className="icon" />
              <p>voltar</p>
            </Link>
          </BackPage>
          <img src={image} alt={`Dish ${id}`} className="image" />
          <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <Ingredients data={ingredients} />

          {isAdmin && (
            <div className="teste">
              <Button content="Editar Prato" onClick={handleNavigateEdit} />
            </div>
          )}

          {!isAdmin && (
            <ContentButton className="buttons">
              <Counter />
              <Button
                className="svg"
                svg={<Receipt className="svg" />}
                content={`pedir. R$ ${value}`}
              />
            </ContentButton>
          )}

          <Footer />
        </div>
      )}
    </Container>
  );
};

export default Dishes;
