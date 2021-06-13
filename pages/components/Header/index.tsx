import { Container, HeaderLogo, NavBar, NavLink } from "./styles.module";
import { BiBookContent } from "react-icons/bi";

export const Header = () => {
  return (
    <>
      <Container>
        <HeaderLogo>
          <BiBookContent />
        </HeaderLogo>

        <NavBar>
          <NavLink>Home</NavLink>
          <NavLink>Sobre</NavLink>
          <NavLink>Projetos</NavLink>
          <NavLink>Contato</NavLink>
        </NavBar>
      </Container>
    </>
  );
};
