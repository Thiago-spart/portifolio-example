import { Container, ImgContainer, Title, Description } from "./styles";

export const Card = () => {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <Title>Project's title</Title>
      <Description>
        Aqui deixo a descrição do projeto futuramente implementar modal para
        retornar uma descriçao mais detalhada.
      </Description>
    </Container>
  );
};
