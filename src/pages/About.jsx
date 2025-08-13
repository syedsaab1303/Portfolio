// src/pages/About.jsx
import styled from "styled-components";
import Skills from "../components/Skills";

const AboutContainer = styled.section`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin: 5px 0 16px;
  color: #f39c12;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto 1rem;
`;

export default function About() {
  return (
    <AboutContainer id="about">
      <Heading>About Me</Heading>
      <Text>
        I'm a passionate Full Stack Developer with expertise in the MERN stack.
        I love building scalable web applications and exploring new technologies.
      </Text>
      <Skills />
    </AboutContainer>
  );
}
