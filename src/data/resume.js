export const LINKS = {
  email: 'syedtamzeed1303@gmail.com',
  phone: '+91 97545 58869',
  phoneHref: 'tel:+919754558869',
  linkedin: 'https://www.linkedin.com/in/syed-tamzeed-ali-3229b4184',
  github: 'https://github.com/syedsaab1303',
  leetcode: 'https://leetcode.com/u/syedtamzeed_123/',
  demo: 'https://youtube.com/shorts/reeldownx',
}

export const MARQUEE = [
  'Node.js', 'TypeScript', 'Hapi.js', 'Express.js', 'MongoDB', 'Redis',
  'AWS Lambda', 'SQS', 'Kafka', 'Docker', 'Kubernetes', 'Serverless', 'React.js',
]

export const DEPARTMENTS = [
  { name: 'Languages', chips: [['JavaScript', 1], ['TypeScript', 1], ['SQL']] },
  { name: 'Backend', chips: [['Node.js', 1], ['Hapi.js', 1], ['Express.js'], ['REST APIs'], ['Microservices'], ['Event-Driven'], ['Serverless']] },
  { name: 'Databases', chips: [['MongoDB', 1], ['Mongoose'], ['Aggregation Pipelines'], ['Redis', 1], ['MySQL'], ['Redshift']] },
  { name: 'Cloud / AWS', chips: [['Lambda', 1], ['EC2'], ['S3'], ['API Gateway'], ['CloudWatch'], ['CloudFront'], ['ELB · ALB · ASG']] },
  { name: 'Messaging', chips: [['AWS SQS', 1], ['Kafka']] },
  { name: 'DevOps & Tooling', chips: [['Docker', 1], ['Kubernetes'], ['PM2'], ['Nginx'], ['Jenkins'], ['GitHub Actions'], ['CI/CD'], ['Swagger']] },
  { name: 'Frontend', chips: [['React.js', 1], ['HTML5'], ['CSS3']] },
]

export const ACTS = [
  {
    no: 'ACT II',
    company: 'Appinventiv',
    role: 'Senior Software Engineer — Backend',
    when: 'Feb 2026 — Present',
    where: 'Noida, India',
    project: 'ReelTrack — Film & TV Production Management SaaS',
    sub: 'User Service · Admin Service · Production Service',
    bullets: [
      [['Sole backend owner of 3 microservices'], ' managing ', ['200+ REST APIs'], ' for an enterprise platform used by studios, production houses and crew members.'],
      ['Designed a ', ['hierarchical, entity-scoped RBAC system'], ' (Studio → Production → Episode → Set → Location) with per-entry access levels — Full / Limited / Restricted — resolved at query time across services.'],
      ['Built ', ['crew & member management APIs'], ': uniqueness validation, department-wise listings, and scoped permission assignment across every production entity.'],
      ['Led the ', ['V1 → V2 API migration'], ' with full backward compatibility — dual-version routing in Hapi.js, zero broken consumers.'],
      ['Shipped ', ['Department Details APIs'], ' for all entities, with entity-scoped permission filtering applied on every response.'],
    ],
    award: null,
    tech: ['Node.js', 'TypeScript', 'Hapi.js', 'MongoDB', 'JWT', 'RBAC', 'Swagger'],
  },
  {
    no: 'ACT I',
    company: 'Happiest Minds',
    role: 'Software Engineer → Senior Software Engineer',
    when: 'Jun 2022 — Nov 2025',
    where: 'Bangalore, India',
    project: 'Maruti CRM — Reporting Dashboard',
    sub: 'Inbound & Outbound · Serverless on AWS',
    bullets: [
      ['Built ', ['scalable serverless microservices'], " processing CRM and customer-complaint data for Maruti's internal LOBs on AWS Lambda + Serverless Framework."],
      ['Developed the ', ['Ecall Automailer'], ' — auto-generated daily/monthly Excel reports via ExcelJS and Lambda schedulers, eliminating manual reporting effort.'],
      [['Cut API response times'], ' by moving heavy data pipelines to SQS-based async processing, removing synchronous bottlenecks.'],
      [['Reduced Redshift query time'], ' by rewriting SQL joins and aggregations — noticeably faster dashboard loads.'],
      ['Hardened production with ', ['CloudWatch alarms, Lambda retry policies and DLQs'], ' for reliable error handling and observability.'],
    ],
    award: 'Team Excellence Award — Maruti Reporting Dashboard',
    tech: ['Node.js', 'AWS Lambda', 'SQS', 'S3', 'API Gateway', 'Redshift', 'CloudWatch', 'ExcelJS'],
  },
]

export const FEATURE = {
  bullets: [
    [['Redis-backed job queue'], ' managing concurrent yt-dlp download jobs behind a Node.js API.'],
    [['High availability on AWS'], ' — EC2 behind an Application Load Balancer with Auto Scaling; CloudFront + S3 caching for performance.'],
    [['React frontend'], ' served through Nginx + PM2 inside Docker containers on EC2.'],
  ],
  tech: ['Node.js', 'Express.js', 'React.js', 'Redis', 'EC2 · ALB · ASG', 'CloudFront', 'Docker', 'yt-dlp'],
}

export const CREDS = [
  { role: 'Education', title: 'PG Diploma, Advanced Computing', body: 'CDAC Bangalore', yr: '2022' },
  { role: 'Education', title: 'B.Tech, Mechanical Engineering', body: 'Indira Gandhi Engineering College, Sagar', yr: '2020' },
  { role: 'Honour', title: 'Team Excellence Award', body: 'Happiest Minds Technologies — outstanding delivery on the Maruti CRM Reporting Dashboard.', yr: '★' },
]

/* Renders the ['bold'] / 'plain' rich-text arrays used above (no JSX — this is a .js file) */
import { createElement } from 'react'
export function rich(parts) {
  return parts.map((p, i) => (Array.isArray(p) ? createElement('b', { key: i }, p[0]) : p))
}
