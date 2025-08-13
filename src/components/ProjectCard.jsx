// src/components/ProjectCard.jsx
import styled from "styled-components";

const Card = styled.div`
  background: #222;
  color: white;
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 340px;
  min-width: 0;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    background: #292929;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    padding: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #ddd;
  margin-bottom: 1rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  background: #f39c12;
  color: black;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    background: #d68910;
  }
`;

export default function ProjectCard({ title, description, link }) {
  return (
    <Card>
      <ProjectTitle>{title}</ProjectTitle>
      <Description>{description}</Description>
      {link && (
        <ViewButton href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </ViewButton>
      )}
    </Card>
  );
}
