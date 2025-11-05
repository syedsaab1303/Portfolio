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
I specialize in building production-grade backend systems and cloud-based infrastructure. 
I've delivered enterprise reporting workflows, automation pipelines, analytics dashboards, 
and high-performance API services. My focus is on clean architecture, scalability, and reliability.

If you are looking for someone who understands backend systems end-to-end and can build 
efficient, secure, and scalable solutions — I can help.

      </Text>
      <Skills />
    </AboutContainer>
  );
}
