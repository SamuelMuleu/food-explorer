import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`
  color: ${COLORS_THEME.LIGHT_100};
  font-size: 35px;
  display: flex;



  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

    & >h1{

      width: 300px;
      padding-left: 20%;

      align-items: center;
    }

  & > img {
  position: absolute;
  left: 6%;

    
  }

    &> p{
    color: ${COLORS_THEME.CAKE_100};
    font-size: 1.3rem;
    font-weight: 500;
    
    position: absolute;
    left: 24%;
    bottom: 91%;



    }
  }

  gap: 20px;


  & > img {

    width: 43px;
    height: 43px;
  }

  & > h1 {
    font-size: 2.34rem;
  }
  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
    
& > h1 {
  
height: 60px;
width: 160px;

  font-size: 2.2rem;
 margin-top: 32px;
  margin-right: -35px;
  margin-left: -10px;

}
&> img{

  margin-top: 26px;
}
&> p{
  color: ${COLORS_THEME.CAKE_100};

  font-size: 1.2rem;

margin-top:40px;
margin-left: 10px;
padding-left: 17px;

}


  }
`;
export default Container;
