// src/components/Navbar.jsx
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

const NAV_HEIGHT = "52px";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAV_HEIGHT};
  box-sizing: border-box;
  background: var(--bg-color);
  color: var(--text-color);
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  z-index: 1000;
`;

const Logo = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  pointer-events: none;

  @media (max-width: 1024px) {
    position: relative;
    left: auto;
    transform: none;
    pointer-events: auto;
    flex: 1;
    text-align: center;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  gap: 2rem;
  margin: 0;
  padding-left: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  cursor: pointer;

  a {
    font-weight: 600;
    color: var(--text-color);
    text-decoration: none;
  }

  &:hover {
    color: #f39c12;
  }
`;

const MenuButton = styled.button`
  display: none;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 1px solid rgba(128, 128, 128, 0.3);
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  color: inherit;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 1024px) {
    display: inline-block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 1100;

  @media (min-width: 1025px) {
    position: static;
    transform: none;
    right: auto;
    top: auto;
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: 1px solid rgba(128, 128, 128, 0.3);
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  color: inherit;
  cursor: pointer;
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  padding: 1rem 0;
  text-align: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  position: absolute;
  top: ${NAV_HEIGHT};
  left: 0;
  width: 100%;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 1025px) {
    display: none;
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <NavbarContainer>
      {/* Desktop links */}
      <NavLinks>
        <NavItem>
          <Link to="home" smooth duration={500} offset={-70}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth duration={500} offset={-70}>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="projects" smooth duration={500} offset={-70}>
            Projects & Experience
          </Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth duration={500} offset={-70}>
            Contact
          </Link>
        </NavItem>
      </NavLinks>

      {/* Logo always center */}
      <Logo>MyPortfolio</Logo>

      {/* Mobile Menu Button */}
      <MenuButton
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? "Close" : "Menu"}
      </MenuButton>

      {/* Theme switcher (always visible top-right) */}
      <ButtonsContainer>
        <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          {darkMode ? <FaSun /> : <FaMoon />}
        </ToggleButton>
      </ButtonsContainer>

      {/* Mobile Dropdown links */}
      {menuOpen && (
        <MobileNavLinks>
          <NavItem>
            <Link
              to="home"
              smooth
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="about"
              smooth
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              Projects & Experience
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </NavItem>
        </MobileNavLinks>
      )}
    </NavbarContainer>
  );
}

