import Container from "./style";
import img from "../../assets/macaron.png";

const RectangleMacaron = () => {
  return (
    <Container>
      <img src={img} alt="macaron colorful" />
      <div>
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  );
};
export default RectangleMacaron;
