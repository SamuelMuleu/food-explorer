import Container from "./style";
import Polygon from "../../assets/PolygonFooter.svg";

const ContentFooter = () => {
  return (
    <Container>
      <img src={Polygon} alt="Polygon blue" />
      <h3>food explorer</h3>
      
      <p className="copyright"> ©2023 -Todos os direitos reservados. </p>
    </Container>
  );
};
export default ContentFooter;
