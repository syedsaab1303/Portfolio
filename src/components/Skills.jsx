import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Redux", "React Vite", "HTML", "CSS"],
  },
  {
    category: "Cloud",
    skills: [
      "AWS Lambda", "EC2", "S3", "Redshift", "SQS", "SNS", "CloudWatch", 
      "DynamoDb", "Elasticache", "ALB", "ASG", "CloudFront", "AWS SAM"
    ],
  },
  {
    category: "DevOps",
    skills: ["Jenkins", "Docker", "Kubernetes"],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">🚀 Skills &amp; Expertise</h2>
      <div className="skills-container">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-category">{skillCategory.category}</h3>
            
            <div className="skill-items">
              {skillCategory.skills.map((skill, i) => (
                <div key={i} className="skill-item">{skill}</div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
