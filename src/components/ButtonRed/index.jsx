import Container from "./style";

const Button = ({ svg, content,onClick,isnew}) => {
  
  return(

   <Container onClick={onClick} isnew={isnew} >
    {svg}
    <span>{content}</span>
    
    </Container>
    );
};

export default Button;
