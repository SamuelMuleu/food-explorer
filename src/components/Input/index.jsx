import Container from "./style";

export function Input({label,placeholder}){

return(
  <Container>    
 <label htmlFor="form">{label}</label>
 <input  placeholder={placeholder} id="form" />
  </Container>
)
  
};

export default Input;