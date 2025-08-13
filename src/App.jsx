// src/App.jsx
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--bg-color);
    color: var(--text-color);
    transition: all 0.3s;
`;

const MainContent = styled.main`
    padding-top: 72px; /* account for fixed navbar height */
    flex: 1 0 auto;
`;

const Footer = styled.footer`
    margin-top: auto;
    text-align: center;
    padding: 1rem;
    opacity: 0.7;
`;

export default function App() {
return (
<ThemeProvider>
<AppContainer>
<Navbar />
<MainContent>
<Hero />
<About />
<Projects />
<Contact />
</MainContent>
<Footer>© {new Date().getFullYear()} Syed Tamzeed Ali</Footer>
</AppContainer>
</ThemeProvider>
);
}
