import { Container, BackPage, Title, Textarea, ButtonAdmin } from "./style";
import { Link } from "react-router-dom";
import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import Input from "../Input";
import { Tag } from "../Tag";
import Button from "../ButtonRed";
const FormDish = ({
  title,
  placeholder,
  inputPlaceholder,
  prieceInput,
  TextareaPlaceholder,
  image,
  Edit,
}) => {
  const [img, setImg] = useState("");

  const data = ["Refeição", "Prato Principal", "Bebidas"];
  console.log(image);
  console.log(img);

  return (
    <Container>
      <BackPage>
        <Link to={"/home"}>
          <CaretLeft className="icon" />
          <p>voltar</p>
        </Link>
      </BackPage>
      <Title>{title}</Title>
      <form>
        <div className="inputImage">
          <p className="imageDish">Imagem do prato </p>
          <label className="custom-file-input " htmlFor="upload">
            <UploadSimple />
            {placeholder}
          </label>

          <input
            id="upload"
            type="file"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <datalist id="browsers">
          {data.map((op, index) => (
            <option key={index}>{op}</option>
          ))}
        </datalist>

        <div className="inputs">
          <Input label="Nome" placeholder={inputPlaceholder} />
          <Input
            label="Categorias"
            list="browsers"
            id="myBrowser"
            name="myBrowser"
          />
        </div>
        <div>
          <label className="label"> Ingredientes</label>
          <div className="Ingredients">
            <Tag placeholder="Adicionar" />
          </div>
        </div>
        <div className="inputsPrice">
          <Input label="Preço" placeholder={prieceInput} />
        </div>
        <div className="description">
          <label className="label"> Descrição</label>
          <Textarea
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder={TextareaPlaceholder}
          ></Textarea>
          <div className="buttons">
            {Edit && (
              <ButtonAdmin className="buttonRemove"> Excluir Prato</ButtonAdmin>
            )}
            <Button content="Salvar Alterações" />
          </div>
        </div>
      </form>
    </Container>
  );
};

export default FormDish;
