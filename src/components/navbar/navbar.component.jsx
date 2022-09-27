import { NavArea, LogoImage, SubTitle } from "./navbar.styles";

const Navbar = () => {
  return (
    <NavArea>
      <LogoImage src="assests/images/logo.png" alt="Pokedex logo" />
      <SubTitle>Search for any Pokemon that exists on the planet</SubTitle>
    </NavArea>
  );
};

export default Navbar;
