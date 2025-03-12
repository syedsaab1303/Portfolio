import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => (theme.darkMode ? "#121212" : "#f8f8f8")};
  color: ${({ theme }) => (theme.darkMode ? "white" : "black")};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  transition: all 0.3s;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 60%;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #121212;
    padding: 1rem 0;
    text-align: center;
  }  
`;

const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #f39c12;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color:rgb(243, 156, 18);
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;


const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <NavbarContainer theme={{ darkMode }}>
      <Logo>MyPortfolio</Logo>

      <NavLinks isOpen={menuOpen}> 
        <NavItem>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="work-projects" smooth={true} duration={500}>
            Projects & Experience
          </Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </NavItem>
      </NavLinks>

      <ButtonsContainer>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </MenuButton>

        <ToggleButton onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ToggleButton>
      </ButtonsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
