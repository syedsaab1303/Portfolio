import styled from "styled-components";
import Skills from "./../components/Skills";

// const AboutContainer = styled.section`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 1rem 50px;
//   text-align: center;

// `;



const AboutContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;


const Heading = styled.h2`
  font-size: 2rem;
  margin: 5px;
  color: #f39c12;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;

`;

const About = () => {
  return (
    <AboutContainer id="about" >
      <Heading>About Me</Heading>
      <Text>
        I'm a passionate Full Stack Developer with expertise in MERN Stack. 
        I love building scalable web applications and exploring new technologies.
      </Text>
        <Skills />
    </AboutContainer>
  );
};

export default About;
