// src/pages/Contact.jsx
import styled from "styled-components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";

const ContactContainer = styled.section`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #f39c12;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const ContactLink = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(128, 128, 128, 0.3);
  border-radius: 8px;
  padding: 0.5rem 0.9rem;
  transition: 0.3s;

  &:hover {
    color: #f39c12;
    border-color: #f39c12;
  }
`;

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <Title>Contact Me</Title>
      <p>Feel free to reach out for collaborations or job opportunities!</p>
      <ContactInfo>
        <ContactLink
          href="mailto:syedtamzeed1303@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> &nbsp; Email
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/syed-tamzeed-ali-3229b4184"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> &nbsp; LinkedIn
        </ContactLink>
      </ContactInfo>
    </ContactContainer>
  );
}
