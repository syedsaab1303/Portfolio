import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import styled from "styled-components";

const AppContainer = styled.div`
  background: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  width: 100%;
  transition: all 0.3s;
`;

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  );
}

const ThemeWrapper = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <AppContainer>
      <Navbar />
      <button onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </AppContainer>
  );
};

export default App;
