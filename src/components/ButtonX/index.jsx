import Container from "./style";

const ButtonX = ({icon,onCloseMenu}) => {




return(


    <Container onClick={onCloseMenu}>
{icon}
    </Container>
)


};

export default ButtonX;
