import Container from "./style";

const Button = ({ svg, content,onClick }) => {
  
  return(

   <Container onClick={onClick}>
    {svg}
    <span>{content}</span>
    </Container>
    );
};

export default Button;
