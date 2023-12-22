import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import  DEVICE_BREAKPOINTS  from "../../styles/deviceBreakpoints";

const Container = styled.div`
  color: ${COLORS_THEME.LIGHT_100};
  font-size: 35px;
  display: flex;


  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

    & >h1{

      width: 300px;
      align-items: center;
    }
  }



  gap: 20px;
  margin: 0 auto;
  

  & > img {
    margin-bottom: 70px;
    width: 43px;
    height: 43px;
  }

  & > h1 {
    font-size: 37.5px;
  }
`;
export default Container;
