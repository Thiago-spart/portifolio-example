import { Card } from "./components/Card";
import { CertifiedCard } from "./components/CertifiedCard";

import { Container } from "./styles";

export const CertifiedSection = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <CertifiedCard />
    </Container>
  );
};
