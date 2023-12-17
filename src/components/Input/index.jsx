import Container from "./style";

export function Input({label,placeholder}){

return(
  <Container>    
 <label htmlFor="form-Email">{label}</label>
 <input type="text" placeholder={placeholder} id="form-Email" />
  </Container>
)
  
};