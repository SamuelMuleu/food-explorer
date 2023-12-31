import  Container from "./style";




export function Input({label,svg,placeholder}){

return(
  <Container >    


  
 <label htmlFor="form">{label}</label>
 <div className="input-container">
        {svg && <div className="svg-container">{svg}</div>}
 </div>
 <input  placeholder={placeholder} id="form" />
  </Container>
)
  
};

export default Input;