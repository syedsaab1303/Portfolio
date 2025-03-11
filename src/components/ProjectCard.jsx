import styled from "styled-components";

const Card = styled.div`
  background: #222;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  width: 300px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
    background: #292929;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  background: #f39c12;
  color: black;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #d68910;
  }
`;

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card>
      <ProjectTitle>{title}</ProjectTitle>
      <Description>{description}</Description>
      {link && <ViewButton href={link}>View Project</ViewButton>}
    </Card>
  );
};

export default ProjectCard;
