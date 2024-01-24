import { Container } from "./styles";
import { useState, useRef } from "react";
import { X, Plus } from "@phosphor-icons/react";
import { v4 } from "uuid";

export function Tag({ placeholder }) {
  const [itens, setItens] = useState([]);
  const inputRef = useRef();

  const handleAddTagClick = () => {
    setItens([{ id: v4(), name: inputRef.current.value }, ...itens]);
  };

  const handleRemoveTag = (id) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <input
        placeholder={placeholder}
        className="ingredient-add"
        ref={inputRef}
      />
      <Plus onClick={handleAddTagClick} />

      {itens.map((item) => (
        <div key={item.id} className="ingredient">
          {item.name}

          <X onClick={() => handleRemoveTag(item.id)} />
        </div>
      ))}
    </Container>
  );
}
