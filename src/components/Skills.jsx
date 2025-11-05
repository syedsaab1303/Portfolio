// src/components/Skills.jsx
import "./Skills.css";

const skillsData = [
{
category: "Backend Development",
skills: ["Node.js", "Express.js", "REST APIs", "MySQL", "MongoDB","PostgreSQL","Redis" ,"Microservices","Event-Driven Architecture" ],
},
{
category: "Frontend Development",
skills: ["React.js", "Redux", "React Vite", "HTML", "CSS","tailwindcss" ],
},
{
category: "Cloud",
skills: [
"AWS Lambda", "EC2", "S3", "CloudFront", "CloudWatch", "DynamoDB", "ElastiCache", "SQS", "SNS", "ALB"
],
},
{
category: "DevOps",
skills: ["Jenkins", "Docker", "Kubernetes","Nginx","pm2","GitHub Actions"],
},
];

export default function Skills() {
return (
<section className="skills-section">
<h2 className="skills-title">🚀 Skills & Expertise</h2>
<div className="skills-container">
{skillsData.map((cat, idx) => (
<div key={idx} className="skill-card">
<h3 className="skill-category">{cat.category}</h3>
<div className="skill-items">
{cat.skills.map((skill, i) => (
<div key={i} className="skill-item">{skill}</div>
))}
</div>
</div>
))}
</div>
</section>
);
}

