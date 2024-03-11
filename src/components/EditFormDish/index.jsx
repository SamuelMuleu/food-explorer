import { Container, BackPage, Title, Textarea } from "./style";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import Input from "../Input";

import { Tag } from "../Tag";
import { api } from "../../services/api";
import Button from "../ButtonRed";
import { v4 } from "uuid";



const EditFormDish = ({
  title,
  placeholder,
  inputPlaceholder,
  prieceInput,
  TextareaPlaceholder,
}) => {
  const [imagem_path, setImg] = useState("");
  const [imageFile, setImageFiles] = useState("")

  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategorias] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [dishState, setDishState] = useState(null);

  const data = ["Entrada", "Prato Principal", "Bebidas"];
  const location = useLocation();
  const dish = location.state && location.state.dish;
  const selectedDish = dish || dishState;
  const navigate = useNavigate();


  useEffect(() => {


    const fetchIngredients = async (dishId) => {
      try {
        const response = await api.get(`/dish/${dishId}`);
        setIngredients(response.data.ingredientes);

      } catch (error) {
        console.error("Erro ao buscar ingredientes:", error);
      }
    };

    if (selectedDish) {
      fetchIngredients(selectedDish.id);
    }
  }, [selectedDish]);

  const handleAddIngredient = (ingredient) => {

    if (typeof ingredient === 'object' && ingredient.id && ingredient.name) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    } else {
     
      const newItem = { id: v4(), name: ingredient };
      setIngredients((prevIngredients) => [...prevIngredients, newItem]);
    }
  };


  const handleRemoveIngredient = (ingredientToRemove) => {

    if (typeof ingredientToRemove === 'object' && ingredientToRemove.id && ingredientToRemove.name) {
  
      setIngredients(prevIngredients => prevIngredients.filter(item => item.id !== ingredientToRemove.id));
    } else {

      setIngredients(prevIngredients => prevIngredients.filter(item => item !== ingredientToRemove));
    }
  };


  const updateDish = async () => {




    try {

      if (!ingredients || ingredients.length === 0) {
        alert("O prato selecionado não possui ingredientes definidos.");
        return;
      }
      if (selectedDish && selectedDish.ingredientes) {

        const removedIngredients = selectedDish.ingredientes.filter(item => !ingredients.find(ingredient => ingredient.id === item.id));

        console.log(removedIngredients)
        await Promise.all(removedIngredients.map(async ingredient => {
          await api.delete(`/ingredientes/${ingredient.id}`);
        }));
      } else {

      }


      if (imagem_path) {
        console.log(imagem_path)

        const formData = new FormData();
        formData.append("imagem_path", imagem_path);

        const imageResponse = await api.put(`/dish/${selectedDish.id}`, formData);

 
        const newImagePath = imageResponse.data.path;



        const updatedDishData = {
          ...selectedDish,
          imagem_path: newImagePath,
          name: name || selectedDish.name,
          preco: preco || selectedDish.preco,
          descricao: descricao || selectedDish.descricao,
          ingredientes: ingredients || selectedDish.ingredientes,
          categoria: categoria || selectedDish.categoria,
        };


        const response = await api.put(`/dish/${selectedDish.id}`, updatedDishData);
        console.log(response.data);


        alert("Prato Modificado");
        navigate("/")

      } else {

        const updatedDishData = {
          ...selectedDish,
          name: name || selectedDish.name,
          preco: preco || selectedDish.preco,
          descricao: descricao || selectedDish.descricao,
          ingredientes: ingredients || selectedDish.ingredientes,
          categoria: categoria || selectedDish.categoria,
        };

        const response = await api.put(`/dish/${selectedDish.id}`, updatedDishData);
        console.log(response.data);
        alert("Prato Modificado");
        navigate("/")

      }
    } catch (error) {
      console.log(error.message);
    }
  };




  const datas = ingredients.map(ingredient => ({ id: ingredient.id, name: ingredient.name }));


  return (
    <Container>
      <BackPage>
        <Link to={"/"}>
          <CaretLeft className="icon" />
          <p>voltar</p>
        </Link>
      </BackPage>
      <Title>{title}</Title>
      <form method="POST">
        <div className="inputImage">
          <p className="imageDish">Imagem do prato </p>
          <label className="custom-file-input " htmlFor="upload">
            <UploadSimple />
            {placeholder}
          </label>

          <input
            id="upload"
            type="file"
            name="imagem_path"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>

        <div className="inputs">
          <Input
            label="Nome"
            placeholder={inputPlaceholder}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Categorias"
            list="browsers"
            id="myBrowser"
            name="myBrowser"
            image={imagem_path}
            onChange={(e) => setCategorias(e.target.value)}
          />
          <datalist id="browsers">
            {data.map((op, index) => (
              <option key={index}>{op}</option>
            ))}
          </datalist>
        </div>
        <div>
          <label className="label"> Ingredientes</label>
          <div className="Ingredients">



            <Tag
              onClick={handleAddIngredient}
              onRemove={handleRemoveIngredient}
              placeholder="Adicionar"
              data={datas}
              className="add"
          

            />



          </div>
        </div>
        <div className="inputsPrice">
          <Input
            label="Preço"
            placeholder={prieceInput}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div className="description">
          <label className="label"> Descrição</label>
          <Textarea

            placeholder={TextareaPlaceholder}
            onChange={(e) => setDescricao(e.target.value)}
          ></Textarea>
          <div className="buttons">


          </div>
        </div>
        <button type="button" className="button" placeholder="Salvar Alterações" onClick={updateDish} >Salvar Alterações</button>
      </form>
    </Container >
  );
};

export default EditFormDish;