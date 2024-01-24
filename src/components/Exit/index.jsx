import Container from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";

const Exit = () =>{

  const [isAdmin, setIsAdmin] = useState(true);


return(


    <Container>
{isAdmin && (<Link className='link' to={"/newdish"}>Novo Prato</Link>)}


<Link  className='link'to={"/signin"}>Sair</Link>


    </Container>
)
};

export default Exit;