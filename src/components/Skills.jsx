import React from "react";
import "./Skills.css"; 

const skillsData = [
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Redux", "React Hooks", "HTML", "CSS"],
  },
  {
    category: "Cloud",
    skills: ["AWS Lambda", "EC2", "S3", "Redshift", "SQS", "SNS", "CloudWatch", "AWS SAM"],
  },
  {
    category: "DevOps",
    skills: ["Jenkins", "Docker", "Kubernetes"],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">🚀 Skills & Expertise</h2>
      <div className="skills-container">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-category">{skillCategory.category}</h3>
            <ul>
              {skillCategory.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
