import Container from "./style";

const Button = ({ svg, content, onClick, isnew, type }) => {
  return (
    <Container onClick={onClick} type="button" isnew={isnew}>
      {svg}
      <span>{content}</span>
    </Container>
  );
};

export default Button;
