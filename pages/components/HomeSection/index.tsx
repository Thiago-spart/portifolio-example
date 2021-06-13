import {
  HomeContainer,
  HomeImg,
  NameContainer,
  Title,
  SubTitle,
} from "./styles.module";

export const HomeSection = () => {
  return (
    <HomeContainer>
      <HomeImg src="/home-img.jpg" />
      <NameContainer>
        <Title>Thiago.M</Title>
        <SubTitle>Front-End Developer</SubTitle>
      </NameContainer>
    </HomeContainer>
  );
};
