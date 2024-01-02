import Container from "./style";
import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";


const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    
    if(counter > 0 ){

    setCounter(counter - 1);
    }  
};

  return (
    <Container>
      <div>
      <button onClick={decrement}><Minus/></button>
      {counter}
      <button onClick={increment}><Plus/></button>

      </div>
    </Container>
  );
};

export default Counter;
