// src/pages/Projects.jsx
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const ProjectsWrapper = styled.section``;

const SectionTitle = styled.h2`
  color: #f39c12;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.h3`
  margin: 1rem 0;
  color: var(--text-color);
  opacity: 0.9;
  text-align: center;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const IntroText = styled.p`
  margin: 0 auto 1.5rem;
  max-width: 900px;
  text-align: center;
  opacity: 0.9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

// Work Projects (Company/Client)
const WorkProjects = [
  {
    title: "Customer Issues Analytics Dashboard",
    description:
      "Built a dashboard to analyze customer issues from call centers with real-time UI, automated Excel reporting, and backend data extraction for actionable insights.",
    link: "", // optional: add link if available
  },
  {
    title: "Automated Reporting Scheduler",
    description:
      "Implemented daily and monthly scheduled reports with email delivery and attachments, improving operational visibility and timeliness.",
    link: "",
  },
  // Add more work items here as needed
];

// Personal Projects
const PersonalProjects = [
  {
    title: "Instagram Reels Downloader",
    description:
      "This project enables users to download Instagram Reels easily and quickly. It features a clean and simple interface where users can paste the reel link and save the video directly to their device.",
    link: "https://www.reeldownx.com/",
  },
  // Add more personal items here as needed
];

export default function Projects() {
  return (
    <ProjectsWrapper id="projects">
      <SectionTitle>Projects & Experience</SectionTitle>
      <IntroText>
        A selection of professional work delivered for organizations and a few
        personal projects that showcase problem-solving, product thinking, and
        end-to-end implementation.
      </IntroText>

      <SubTitle>Work Projects</SubTitle>
      <Grid>
        {WorkProjects.map((p, i) => (
          <ProjectCard
            key={`work-${i}`}
            title={p.title}
            description={p.description}
            link={p.link}
          />
        ))}
      </Grid>

      <SubTitle style={{ marginTop: "2rem" }}>Personal Projects</SubTitle>
      <Grid>
        {PersonalProjects.map((p, i) => (
          <ProjectCard
            key={`personal-${i}`}
            title={p.title}
            description={p.description}
            link={p.link}
          />
        ))}
      </Grid>
    </ProjectsWrapper>
  );
}

