import { Container, Links } from "./styles";

import { Header } from '../../components/Header'
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";


export function Details() {
  return (
    <Container>
      <Header />

    <ButtonText title="Excluir nota"></ButtonText>

    <Section title="Links úteis">
      <Links>
        <li> <a href="#">https://www.rocketseat.com.br/</a></li>
        <li><a href="#">https://pt-br.reactjs.org/</a></li>
      </Links>
    </Section>

    <Section title="Marcadores">
      <Tag title="express"></Tag>
      <Tag title="nodejs"></Tag>
    </Section>

      <Button title="Voltar"/>
    </Container>
  )
}