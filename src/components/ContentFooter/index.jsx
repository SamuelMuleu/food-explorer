import Container from "./style";
import Polygon from "../../assets/PolygonFooter.svg";

const ContentFooter = () => {
  return (
    <Container>
      <img src={Polygon} alt="Polygon blue" />
      <p>food explorer</p>
      <p> ©2023 -Todos os direitos reservados. </p>
    </Container>
  );
};
export default ContentFooter;
