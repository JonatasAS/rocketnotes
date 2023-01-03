import { useContext } from "react";
import { Container, Form, BackgroundImg} from "./styled";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { MyContext } from "../../myContext";

export function SignIn() {
  const data = useContext(MyContext);

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>
  
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <Link to="register">Criar conta</Link>
      </Form>

      <BackgroundImg />
    </Container>
  );
}