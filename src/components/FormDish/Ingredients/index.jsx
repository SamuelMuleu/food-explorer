import Container from "./style";

const Ingredients = ({ data }) => {
  if (!Array.isArray(data)) {

    return <div>Erro: data não é um array</div>;
  }
  console.log(data)
  return (
    <Container>
      <ul className="ingredients-list">
        {data.map((ingredient) => (
          <li key={ingredient.id} className="ingredient">
            {ingredient.name}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Ingredients;
