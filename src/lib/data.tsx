import { Github, Linkedin, Globe } from 'lucide-react';
import { StaticImageData } from 'next/image';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoJava from "/public/images/logos/Java.svg"

import LogoSpringBoot from "/public/images/logos/Spring.svg"


import LogoDocker from "/public/images/logos/Docker.svg"

import LogoMaven from "/public/images/logos/Maven.svg"

import LogoPostman from "/public/images/logos/Postman.svg"

import LogoHibernate from "/public/images/logos/Hibernate.svg"


import LogoMySQL from "/public/images/logos/MySQL.svg"

import LogoMozillaFirefoxClub from "/public/images/logos/firefox.svg"
//new urls


import ProjectOrderProcessing from  "/public/images/logos/Spring.svg"

import ProjectFirefoxPortal from "/public/images/logos/firefox.svg"


import LogoIBM from  "/public/images/logos/ibm.svg"


import LogoMicrosoft from  "/public/images/logos/Microsoft.svg"
import LogoGoogleCloud from  "/public/images/logos/google.svg"

import LogoMeta from   "/public/images/logos/MetaLogo.png"


import LogoOracleCloud from   "/public/images/logos/Oracle.svg"
import LogoGoogleCloud2 from  "/public/images/logos/google_cloud-ar21.svg"

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/jayant733',
  GITHUB_REPO: 'https://github.com/jayant733',
  LINKEDIN: 'https://www.linkedin.com/in/jayant-sharma-0a009328b',
  PORTFOLIO: 'https://myportfolio-lime-three-14.vercel.app',
};

export type Certificate = {
  title: string;
  issuer: string;
  issuedOn: string; // e.g. "Nov 2024"
  link: string;     // verification / certificate URL
  logo?: StaticImageData; // optional issuer logo
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Certificates',
    href: '#certifications',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/jayant733',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jayant-sharma-0a009328b',
  },
  {
    icon: Globe,
    url: 'https://myportfolio-lime-three-14.vercel.app',
  },
];
export const TECHNOLOGIES: TechDetails[] = [
  // Backend
  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.oracle.com/java/',
  },
  {
    label: 'Spring Boot',
    logo: LogoSpringBoot,
    url: 'https://spring.io/projects/spring-boot',
  },
  {
    label: 'Hibernate / JPA',
    logo: LogoHibernate,
    url: 'https://hibernate.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Maven',
    logo: LogoMaven,
    url: 'https://maven.apache.org/',
  },

  // Frontend
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },

  // Database
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'MySQL',
    logo: LogoMySQL,
    url: 'https://www.mysql.com/',
  },

  // Tools/Infrastructure
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Postman',
    logo: LogoPostman,
    url: 'https://www.postman.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  
{
  label: 'GCP',
  logo: LogoGoogleCloud2,
  url: 'https://cloud.google.com/',
},
{
  label: 'Oracle',
  logo: LogoOracleCloud,
  url: 'https://www.oracle.com/cloud/',
},


];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    logoAlt: 'Marvedge logo',
    position: 'Full Stack Developer Intern, Marvedge',
    companyUrl: 'https://marvedge.com/',
    employmentType: 'Remote',
    startDate: new Date(2026, 2),
    currentlyWorkHere: true,
    summary: [
      'Built an AI-powered platform for generating interactive product demo videos, improving product showcase efficiency by 25%.',
      'Developed scalable backend and full stack features with Node.js, Express.js, the MERN stack, and Next.js, reducing page load time by 20%.',
      'Designed secure authentication and access control systems, improving onboarding success rate by 30%.',
      'Integrated REST APIs, language models, FFmpeg, and real-time collaboration workflows to automate video generation and increase engagement.',
    ],
  },
  {
    logo: LogoJava,
    logoAlt: 'Bluestock logo',
    position: 'Software Development Engineer Intern, Bluestock Fintech',
    companyUrl: 'https://bluestock.in/',
    employmentType: 'Remote',
    startDate: new Date(2026, 2),
    currentlyWorkHere: true,
    summary: [
      'Developed scalable backend services for a stock analytics platform serving thousands of users.',
      'Built and optimized REST APIs using Java and Spring Boot, improving response time by 25%.',
      'Implemented secure authentication and authorization mechanisms, reducing unauthorized access risks by 40%.',
      'Applied microservices and cloud deployment strategies across AWS and Azure to improve system reliability and scalability.',
    ],
  },
];

export const LEADERSHIP: ExperienceDetails[] = [
  {
    logo: LogoMozillaFirefoxClub,
    logoAlt: 'Mozilla Firefox Club logo',
    position: 'Technical Committee Member, Mozilla Firefox Club',
    companyUrl: 'https://mfcvit.github.io/',
    employmentType: 'VIT Vellore',
    startDate: new Date(2024, 7),
    currentlyWorkHere: true,
    summary: [
      'Maintained and supported the official club website used by a large student community.',
      'Contributed to technical initiatives and helped support developer-focused activities inside the club.',
    ],
  },
];



export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Machine Learning-Enabled Course Learning Platform',
    description:
      'Cloud backend for a course learning platform with 25+ REST APIs, token-based authentication, role-based access control, PostgreSQL-backed data modeling, and Dockerized deployment for production-style reliability.',
    url: 'https://course-api-java.onrender.com',
    repositoryUrl: 'https://github.com/jayant733/Course_api_java',
    liveUrl: 'https://course-api-java.onrender.com',
    previewImage: ProjectOrderProcessing,
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'REST APIs',
      'Docker',
      'Maven',
    ],
  },
  {
    name: 'Mozilla Firefox Community Portal Revamp',
    description:
      'Collaborative revamp of the Mozilla Firefox Club portal with modules for blogs, events, and user management using TypeScript, Node.js, Express, React, and MongoDB, following structured team workflows and deployment practices.',
    url: 'https://mfcvit.github.io/',
    repositoryUrl: 'https://github.com/MFC-VIT/MFC-Website2.0',
    liveUrl: 'https://mfcvit.github.io/',
    previewImage: ProjectFirefoxPortal,
    technologies: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'React',
      'MongoDB',
      'REST APIs',
      'Git / GitHub',
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'IBM Java Developer Professional Certificate',
    issuer: 'IBM',
    issuedOn: '2025',
    link: 'https://www.coursera.org/account/accomplishments/specialization/K1GEGV8NXPXT', // replace with your actual credential URL
    logo: LogoIBM,
  },
  {
    title: 'Meta Backend Developer Professional Capstone',
    issuer: 'Meta',
    issuedOn: '2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/SMDB6SDRFWFG', // actual link
    logo: LogoMeta,
  },
  {
    title: 'Meta Advanced React Professional Certificate',
    issuer: 'Meta',
    issuedOn: '2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/7U55B5WB3B36', // actual link
    logo: LogoMeta,
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle',
    issuedOn: '2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/G3YQ7PGX0LZC', // actual link
    logo: LogoOracleCloud,
  },
  {
    title: 'Google Cloud Infrastructure Core Services',
    issuer: 'Google Cloud',
    issuedOn: '2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/LCN2DJ3RH9LO', // actual link
    logo: LogoGoogleCloud,
  },
  {
    title: 'Cloud Native, Microservices & DevOps',
    issuer: 'IBM',
    issuedOn: '2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/J92MSE8LXGGR', // actual link
    logo: LogoIBM,
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'Microsoft',
    issuedOn: '2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/SMDB6SDRFWFG', // actual link
    logo: LogoMicrosoft,
  },
];
