import styled from "styled-components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";

const ContactContainer = styled.section`
  text-align: center;
  padding: 4rem 2rem;
 `;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #f39c12;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1.5rem;
`;

const ContactLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

const Contact = ({ theme }) => {
  return (
    <ContactContainer id="contact" >
      <Title>Contact Me</Title>
      <p>Feel free to reach out for collaborations or job opportunities!</p>
      
      <ContactInfo>
        <ContactLink href="mailto:syedtamzeed1303@gmail.com" target="_blank" theme={theme}>
          <FaEnvelope /> Email
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/syed-tamzeed-ali-3229b4184" target="_blank" theme={theme}>
          <FaLinkedin /> LinkedIn
        </ContactLink>
        {/* <ContactLink href="https://github.com/yourgithub" target="_blank">
          <FaGithub /> GitHub
        </ContactLink> */}
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
