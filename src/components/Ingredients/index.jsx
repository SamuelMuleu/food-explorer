import Container from "./style";


const Ingredients = ({data}) => {


  return(
  
  <Container>
<ul className="ingredients-list">
        {data.map((ingredient, index) => (
          <li key={index} className="ingredient">
            {ingredient}
          </li>
        ))}
      </ul>
  </Container>
  )
};

export default Ingredients;
