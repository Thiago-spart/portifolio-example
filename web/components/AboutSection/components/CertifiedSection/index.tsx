import { Line } from "../../../Line";
import { Card } from "./components/Card";
import { CertifiedCard } from "./components/CertifiedCard";

import { Container } from "./styles";

export const CertifiedSection = () => {
  return (
    <Container>
      <Card />
      <Line />
      <Card />
      <Line />
      <Card />
      <Line />
      <CertifiedCard />
    </Container>
  );
};
