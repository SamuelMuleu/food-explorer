import Container from "./style";

import Title from "../../components/Title";
import CreateAccount from "../../components/CreateAccount-Form";

export function SignUp() {
  return (
    <Container>
      <Title />

      <CreateAccount />
    </Container>
  );
}
