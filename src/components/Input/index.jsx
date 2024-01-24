import  Container from "./style";




export function Input({label,svg,placeholder,type,accept,list}){

return(
  <Container >    

 <div  className="input-container">
        {svg && <div className="svg-container">{svg}</div>}
 </div>
 <label  htmlFor='form'>{label}</label>
 <input list={list} accept={accept} placeholder={placeholder}  type={type}/>
  </Container>
)
  
};

export default Input;