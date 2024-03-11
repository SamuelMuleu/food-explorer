import { Container, BackPage, Title, Textarea } from "./style";
import { Link } from "react-router-dom";
import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../Input";
import { Tag } from "../Tag";
import { api } from "../../services/api";
import Button from "../ButtonRed";




const FormDish = ({
  title,
  placeholder,
  inputPlaceholder,
  prieceInput,
  TextareaPlaceholder,
  ingredients,
  Edit,
}) => {
  const [imagem_path, setImg] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategorias] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [name, setName] = useState("");
  const [dishState, setDishState] = useState(null);
  const navigate = useNavigate();

  const data = ["Entrada", "Prato principal", "Bebidas"];
  const location = useLocation();
  const dish = location.state && location.state.dish;
  const selectedDish = dish || dishState;

  async function handleNewDish() {


    const formData = new FormData();
    formData.append("imagem_path", imagem_path);
    formData.append("name", name);
    formData.append("preco", preco);
    formData.append("descricao", descricao);
    formData.append("categoria", categoria);


    ingredientes.forEach((ingrediente, index) => {
      formData.append(`ingredientes[${index}]`, ingrediente.name);
    });




    try {
      const response = await api.post("/dish/newdish", formData);
      console.log("Response:", response.data);
      alert("Cadastrada com sucesso!");
      navigate("/")
    } catch (error) {
      alert("error" + error.message);
      console.log(error);
    }

  }

  

  const datas = ingredientes.map(ingredient => ingredient.name)

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
          <div className="Ingredients" onClick={(e) => e.stopPropagation()}>
            <Tag

              placeholder="Adicionar"
              onRemove={(value) => setIngredientes(ingredientes.filter(ingredient => ingredient !== value))}
              data={ingredientes}
              onClick={(value) => setIngredientes([...ingredientes, value])}
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

            <Button content="Salvar Alterações" onClick={handleNewDish} />
          </div>
        </div>
      </form>
    </Container>
  );
};

export default FormDish;
