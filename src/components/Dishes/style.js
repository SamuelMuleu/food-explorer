import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`

  position: relative;

  text-align: center;
  padding: 10px;
  color: ${COLORS_THEME.LIGHT_100};
  width: 100vw;
  min-height: 10vh;
  display: flex;



  .image {
    width: 240px;
    height: 240px;
    margin: 10px;
  }

  h1 {
    padding-bottom: 10px;
    font-size: 2.5rem;
  }

  p {
    padding: 1px;
    font-size: 1.2rem;
  }
.teste{
  padding:25px;
  padding-top: 10px;
}


  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

    .image {
 
      display: flex;
  margin-top: 3%;
  margin-bottom: 10%;
      margin-left: 7%;
      width: 390px;
      height: 390px;
    }

 
    .content{
 
         h1{
     font-size:4rem ;
     font-weight: 400;
     position: absolute;
    right: 30%;
     bottom: 65%;
    }
    p{

      position: absolute;
      word-spacing: 3px;
      top: 40%;
 padding-left:39.6%;
 width: 1160px;
     font-size: 2rem;
   
    }
  }


  .buttons{
    
    position: absolute;
    top: 60%;
    right: 33%;
  }
  .zigAz{
    position: absolute;
top: 60%;
left: 40%;
width: 150px;
  }
  
  .svg{
margin-left:-15px;
margin-bottom: 15px;
display: flex;

}
}




`;



const BackPage = styled.div`
  font-size: 1.8rem;
  color: ${COLORS_THEME.LIGHT_100};
  padding: 10px;
  height: 50px;
  display: flex;
  position: relative;

  p {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 20px;
    width: 110px;
    font-size: 1.7rem;
    font-weight: 500;
  }

  .icon {
    display: flex;
    height: 50px;
    font-size: 2.5rem;
  }
`;



const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 30px;
  position: relative;

  .svg {
    position: absolute;
    left: 48%;
    top: 42%;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export { Container, BackPage, ContentButton };
