import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.button`


span {
    margin-left: 5px;

  }


    background: linear-gradient(${COLORS_THEME.TOMATO_100}, ${COLORS_THEME.TOMATO_100});
    border: none;
    color: white;


  cursor: pointer;
  font-family:Roboto,'Open Sans', sans-serif;
  font-size: inherit;


  background: linear-gradient(${COLORS_THEME.TOMATO_100}, ${COLORS_THEME.TOMATO_100});
  border-radius: 4px;
  padding: 10px 30px;


  text-align: center;

  &:hover {
    background: linear-gradient(${COLORS_THEME.TOMATO_400}, ${COLORS_THEME.TOMATO_400});
   
  }

`;

export default Container;