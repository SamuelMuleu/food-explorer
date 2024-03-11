import { Container } from "./styles";
import { useState, useRef, useEffect } from "react";
import { X, Plus } from "@phosphor-icons/react";
import { v4 } from "uuid";


export function Tag({ placeholder, onClick, data, onRemove }) {
  const [ingredientes, setIngredients] = useState([]);
  const inputRef = useRef();




  useEffect(() => {
    // Define os ingredientes iniciais ao montar o componente
    setIngredients(data)
  }, [data]);



  const handleAddTagClick = () => {
    const inputValue = inputRef.current?.value;

    if (inputValue) {
      const newItem = { id: v4(), name: inputValue };
      setIngredients((prevIngredients) => [...prevIngredients, newItem]);
      onClick(newItem);
      inputRef.current.value = "";
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    const updatedIngredients = ingredientes.filter(item => item.id !== tagToRemove.id);
    setIngredients(updatedIngredients);
    onRemove(tagToRemove)
  };
  return (
    <Container >
      <input
        placeholder={placeholder}
        className="ingredient-add"
        ref={inputRef}
      />
      <Plus className="plus" onClick={handleAddTagClick} />
      {ingredientes.map((item) => (
        <div key={item.id} className="ingredient">
          {item.name}
          <X type="button" onClick={() => handleRemoveTag(item)} />
        </div>
      ))}

    </Container>
  );
}