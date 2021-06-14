import { Line } from "../../../Line";
import { Card } from "./components/Card";

import { Container, MainTitle, MainSubTitle, MainDiv } from "./styles";

export const ExperienceSection = () => {
  return (
    <Container>
      <MainDiv>
        <MainTitle>Expertise</MainTitle>
        <MainSubTitle>
          Aqui eu falo sobre minhas habilidades como desenvolvedor Tipo aquele
          texto que a glr fala q tem uma paixão e pa mas mais focado a atrair a
          atenção de quem lê.
        </MainSubTitle>
        <Line />

        <Card />
        <Line />
        <Card />
      </MainDiv>
    </Container>
  );
};
