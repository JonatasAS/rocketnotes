import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/JonatasAS.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Jonatas Amorim</strong>
        </div>
      </Profile>
    </Container>
  );
}