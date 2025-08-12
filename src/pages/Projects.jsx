import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 1.5rem 0.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 1rem;
  color: #f39c12;
`;

const WorkBlock = styled.div`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: left;
  color: #dcdcdc;
`;

const CompanyLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectList = styled.ul`
  margin-top: 1rem;
  padding-left: 20px;
  text-align: left;
  color: #dcdcdc;
`;

const WorkProjects = () => {
  return (
    <ProjectsContainer id="work-projects">
      <Title>Work Experience & Projects</Title>

      <WorkBlock>
        <h3>Senior Software Engineer</h3>
        <p>
          <CompanyLink href="https://www.happiestminds.com/" target="_blank">
            Happiest Minds Technology
          </CompanyLink> (July 2024 - Present)
        </p>
        <ProjectList>
          <li><b>Inbound CRM – Maruti:</b>  
            <p>Created a dashboard to analyze customer issues reported via call centers. Developed backend solutions for data extraction, Excel reporting, and real-time UI display for actionable insights.</p>  
            <p>Implemented automated scheduling for daily and monthly reports, ensuring timely email delivery with attachments.</p>  
          </li>
        </ProjectList>
      </WorkBlock>

      <WorkBlock>
        <h3>Software Engineer</h3>
        <p>
          <CompanyLink href="https://www.happiestminds.com/" target="_blank">
            Happiest Minds Technology
          </CompanyLink> (June 2022 - June 2024)
        </p>
        <ProjectList>
          <li><b>Outbound CRM – Maruti Client:</b> Developed a reporting dashboard for Maruti to analyze customer reviews. Engineered APIs for data retrieval and automated Excel report generation, enabling insights to enhance product quality and customer satisfaction.</li>
          <li><b>MI Insurance – Maruti Client:</b> Built a dashboard to analyze insurance purchase trends. Designed APIs and Excel automation for seamless report generation, helping Maruti optimize insurance offerings.</li>
        </ProjectList>
      </WorkBlock>

      <WorkBlock>
        <h3>Personal Projects</h3>
        <ProjectList>
          <li><b>Chat Application:</b> Built a real-time chat app using React, Node.js & Socket.io.</li>
          <li><b>E-Commerce Website:</b> Developed a full-stack e-commerce site using MERN stack.</li>
          <li><b>Portfolio Website:</b> Created my personal portfolio using React.js & Styled Components.</li>
          <li>
<h4>Instagram Reels Downloader</h4>
<p>
  This project enables users to download Instagram Reels easily and quickly.
  It features a clean and simple interface where users can paste the reel link
  and save the video directly to their device.
</p>
<p>
  🔗 Live Demo:{" "}
  <a
    href="https://www.reeldownx.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    www.reeldownx.com
  </a>
</p>

          </li>

          
          
          
        
        </ProjectList>
      </WorkBlock>

    </ProjectsContainer>
  );
};

export default WorkProjects;
