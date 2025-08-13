// src/components/Hero.jsx
import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding-top: 28px;
  padding-bottom: 5px;
  text-align: center;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media (max-width: 480px) {
    padding-top: 10px;
    padding-bottom: 2px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 180px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 165px;
  }
  @media (max-width: 480px) {
    max-width: 165px;
  }
`;

const Title = styled.h1`
  margin: 0.25rem 0;
  font-size: 2.2rem;

  @media (max-width: 480px) {
    font-size: 1.45rem;
  }
`;

const Subtitle = styled.p`
  margin: 0.5rem 0 0;
  opacity: 0.9;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default function Hero() {
  return (
    <HeroContainer id="home">
      <ProfileImage src="/images/profile.jpg" alt="Profile" />
      <Title>Hi, I'm Syed Tamzeed Ali</Title>
      <Subtitle>Full Stack Developer | MERN Stack | Passionate Coder</Subtitle>
    </HeroContainer>
  );
}
