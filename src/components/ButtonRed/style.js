import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.div`

button{

    background: linear-gradient(${COLORS_THEME.TOMATO_100}, ${COLORS_THEME.TOMATO_100});
    border: none;
    color: white;
}

  cursor: pointer;
  font-family:Roboto,'Open Sans', sans-serif;
  font-size: inherit;


  background: linear-gradient(${COLORS_THEME.TOMATO_100}, ${COLORS_THEME.TOMATO_100});
  border-radius: 4px;
  padding: 10px 30px;


  text-align: center;

  &:hover {
    background: linear-gradient(${COLORS_THEME.TOMATO_200}, ${COLORS_THEME.TOMATO_200});
   
  }

`;

export default Container;