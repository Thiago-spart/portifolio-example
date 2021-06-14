import { ExperienceSection } from "./components/ExperienceSection";
import { CertifiedSection } from "./components/CertifiedSection";

import { Line } from "../Line";

import { Container } from "./styles.module";

export const AboutSection = () => {
  return (
    <>
      <Container>
        <div>
          <ExperienceSection />
        </div>
        <div>
          <CertifiedSection />
        </div>
      </Container>
      <Line />
    </>
  );
};
