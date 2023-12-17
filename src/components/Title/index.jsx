import Container from "./style";
import Polygon from '../../assets/Polygon.svg'
export function Title() {
  return (
    <Container>
      <img src={Polygon} alt="Polygon blue"/>
      <h1>food explorer</h1>
    </Container>
  );
}