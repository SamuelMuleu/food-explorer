import Container from "./style";

const Button = ({ svg, content }) => {
  
  return(

   <Container>
    {svg}
    <span>{content}</span>
    </Container>
    );
};

export default Button;
