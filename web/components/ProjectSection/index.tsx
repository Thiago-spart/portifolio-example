import Carousel from "styled-components-carousel";

import { Card } from "./components/Card";

import { Container } from "./styles";

export const ProjectSection = () => {
  return (
    <Carousel
      slidesToShow={3}
      center
      centerPadding={30}
      breakpoints={[
        {
          size: 200,
          settings: {
            slidesToShow: 1,
            showArrows: false,
            showIndicator: false,
            swipeable: true,
          },
        },
        {
          size: 600,
          settings: {
            slidesToShow: 3,
            showArrows: false,
            showIndicator: true,
            swipeable: true,
          },
        },
        {
          size: 1000,
          settings: {
            slidesToShow: 4,
            showArrows: true,
            showIndicator: true,
            center: true,
            swipeable: true,
          },
        },
      ]}
    >
      <Container>
        <Card />
      </Container>
      <Container>
        <Card />
      </Container>
      <Container>
        <Card />
      </Container>
      <Container>
        <Card />
      </Container>
      <Container>
        <Card />
      </Container>
      <Container>
        <Card />
      </Container>
    </Carousel>
  );
};
