import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`
  min-height: 100vh;

  max-width: 100vw;
  .buttonRemove{
margin-top: 10%;

}

   @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
.buttonRemove{
margin-top: 5.7%;

}
    }
  .button {
    position: absolute;
    top: 121.7%;
    left: 2.9%;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      top: 105%;
      left: 80.5%;
    }
    span {
      margin-left: 5px;
    }

    background: linear-gradient(
      ${COLORS_THEME.TOMATO_100},
      ${COLORS_THEME.TOMATO_100}
    );
    border: none;
    color: white;

    cursor: pointer;
    font-family: Roboto, "Open Sans", sans-serif;
    font-size: inherit;

    background: linear-gradient(
      ${COLORS_THEME.TOMATO_100},
      ${COLORS_THEME.TOMATO_100}
    );
    border-radius: 4px;
    padding: 10px 30px;

    text-align: center;

    &:hover {
      background: linear-gradient(
        ${COLORS_THEME.TOMATO_400},
        ${COLORS_THEME.TOMATO_400}
      );
    }

  }
`;
const ButtonAdmin = styled.button`
  margin-left: 62.8%;
  position: absolute;
  top: 121.6%;
  border: none;
  color: ${COLORS_THEME.LIGHT_100};
  border-radius: 4px;
  width: 120px;
  height: 35px;
  background-color: ${COLORS_THEME.DARK_800};
  font-weight: 500;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: absolute;
    top: 96.3%;
    right: 84.5%;
  }
`;

export { Container, ButtonAdmin };
