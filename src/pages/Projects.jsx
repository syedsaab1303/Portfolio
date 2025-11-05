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
    title: "CRM Dashboard – Customer Issues Analytics Dashboard (Inbound Calls)",
    description:
      "Developed backend services and reporting modules to analyze customer complaints received from Maruti call centers. Implemented data extraction and automated report generation workflows for real-time and scheduled analytics dashboards to support business decision-making and improve customer experience.",
    link: "", // optional: add link if available
  },
  {
    title: "Outbound CRM – Customer Feedback Reporting Dashboard",
    description:
      "Developed REST APIs and reporting workflows to process customer feedback across dealership networks. Wrote unit & performance test cases to ensure reliability and optimized data visualization processes for faster insights.",
    link: "",
  },
  {
    title: "Insurance Trends & Analytics Dashboard",
    description:
      "Built backend automation to analyze vehicle insurance purchase trends across multiple Lines of Business (LOBs). Helped business teams monitor adoption rates and identify customer behavior patterns.",
    link: "",
  },
  {
    title: "Automated Reporting Scheduler",
    description:
      "Implemented a fully automated daily and monthly reporting system. Reports were generated, formatted in Excel, and delivered via email without manual effort. Greatly improved operational efficiency and ensured timely delivery of business insights to management team",
    link: "",
  },
  // Add more work items here as needed
];

// Personal Projects
const PersonalProjects = [
  {
    title: "Instagram Reels Downloader",
    description:
      "A web application that allows users to download Instagram reels/videos seamlessly. Built scalable backend integrating yt-dlp with Node.js for reliable media extraction. Deployed on AWS EC2 with Docker + Nginx for optimized performance and load handling.",
    link: "https://www.reeldownx.com/",
    demo:"https://youtube.com/shorts/KZJZTHQq4vM?si=-j_j58b6WDKCSqhj"
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
            demo={p.demo}
          />
        ))}
      </Grid>
    </ProjectsWrapper>
  );
}

