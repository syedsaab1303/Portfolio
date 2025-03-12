import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  text-align: center;
  width: 90%;  
  margin: 0 auto; 

    @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%; 
  max-width: 150px;
  height: auto; 
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 120px; 
  }

  @media (max-width: 480px) {
    max-width: 100px;
  }
`;


const Hero = () => {
  return (
    <HeroContainer id="hero">
    <ProfileImage src="/images/profile.jpg" alt="My Profile" />
    <h1>Hi, I'm Syed Tamzeed Ali</h1>
    <p>Full Stack Developer | MERN Stack | Passionate Coder</p>
    </HeroContainer>
  );
};

export default Hero;

