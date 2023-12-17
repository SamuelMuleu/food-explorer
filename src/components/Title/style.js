import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`
  color: ${COLORS_THEME.LIGHT_100};
  font-size: 35px;
  display: flex;

  align-item: center;
  justify-contents: center;
  gap: 20px;
  margin: 0 auto;

  & > img {
    padding-top:26px;
    width: 43px;
    height: 43px;
  }

  & > h1 {
    font-size: 37.5px;
  }
`;
export default Container;
