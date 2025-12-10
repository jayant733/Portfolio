import { Github, Twitter, Figma } from 'lucide-react';
import { StaticImageData } from 'next/image';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import LogoJava from "/public/images/logos/Java.svg"

import LogoSpringBoot from "/public/images/logos/Spring.svg"


import LogoDocker from "/public/images/logos/Docker.svg"

import LogoMaven from "/public/images/logos/Maven.svg"

import LogoPostman from "/public/images/logos/Postman.svg"

import LogoHibernate from "/public/images/logos/Hibernate.svg"


import LogoMySQL from "/public/images/logos/MySQL.svg"

import LogoMyCollegeFest from "/public/images/logos/1491907982.png"


import LogoMozillaFirefoxClub from "/public/images/logos/Firefox.svg"
//new urls


import ProjectOrderProcessing from  "/public/images/logos/Spring.svg"

import ProjectFirefoxPortal from "/public/images/logos/Firefox.svg"

import ProjectCloudWallet from  "/public/images/logos/Wallet.png"


import LogoIBM from  "/public/images/logos/ibm.svg"


import LogoMicrosoft from  "/public/images/logos/Microsoft.svg"
import LogoGoogleCloud from  "/public/images/logos/google.svg"

import LogoMeta from   "/public/images/logos/MetaLogo.png"


import LogoOracleCloud from   "/public/images/logos/Oracle.svg"


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/jayant733',
  GITHUB_REPO: 'https://github.com/jayant733',

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
  
];

export const TECHNOLOGIES: TechDetails[] = [


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
  label: 'Tailwindcss',
  logo: LogoTailwindcss,
  url: 'https://tailwindcss.com/',
},
{
  label: 'Git',
  logo: LogoGit,
  url: 'https://git-scm.com/',
},

// --- New logos from your resumes ---

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
  label: 'MySQL',
  logo: LogoMySQL,
  url: 'https://www.mysql.com/',
}
,
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
  label: 'Maven',
  logo: LogoMaven,
  url: 'https://maven.apache.org/',
},

];

export const EXPERIENCES: ExperienceDetails[] = [
    {
    logo: LogoMozillaFirefoxClub,
    logoAlt: 'Mozilla Firefox Club logo',
    position: 'Panel Member, Mozilla Firefox Club',
    startDate: new Date(2024, 7), // Jan 2024 (approx)
    currentlyWorkHere: true,
    summary: [
      'Evaluate candidates during developer selections and participate in technical interview rounds.',
      'Coordinate technical activities and support the team in planning developer-focused events.',
    ],
  },
  {
    logo: LogoMyCollegeFest,
    logoAlt: 'College tech fest logo',
    position: 'Technical Volunteer, College Fest',
    startDate: new Date(2025, 3), // Jul 2024 (approx)
    endDate: new Date(2024, 4),   // Oct 2024 (approx)
    summary: [
      'Assisted backend and frontend teams with deployment and integration during live events.',
      'Helped troubleshoot production issues under time constraints to keep event applications stable.',
    ],
  },
  {
    logo: LogoGit,
    logoAlt: 'Open source logo',
    position: 'Open Source Contributor',
    startDate: new Date(2024, 3), // Apr 2024 (approx)
    currentlyWorkHere: true,
    summary: [
      'Refactored components and improved API response consistency in community projects.',
      'Added unit tests and fixed bugs reported by maintainers and users to increase reliability.',
    ],
  },
];



export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Java Order Processing System',
    description:
      'Backend service for managing orders, authentication, and structured data retrieval using Java, Spring Boot, Hibernate, and Oracle Database. Focused on robust REST APIs, schema design, and production-style logging and exception handling.',
    url: 'https://github.com/jayant733', // replace with repo/project link
    previewImage: ProjectOrderProcessing,
    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate / JPA',
      'REST APIs',
      'Oracle 12c',
      'Docker',
      'Maven',
    ],
  },
  {
    name: 'Mozilla Firefox Community Portal Revamp',
    description:
      'Collaborative redesign of the Mozilla Firefox community portal, with new modules for blogs, events, and user management built using Node.js, TypeScript, Express, React, and MongoDB, following SDLC best practices and Git-based workflows.',
    url: 'https://github.com/MFC-VIT/MFC-Website2.0', // replace with specific repo
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
  {
    name: 'CloudWallet Full Stack dApp',
    description:
      'Full stack wallet application on Solana Devnet with a React and TypeScript frontend, Node.js/Express backend APIs, and an on-chain Solana program for secure token transfers, emphasizing logging, error handling, and Devnet-based testing.',
    url: 'https://github.com/jayant733/CloudWallet', // replace with specific repo
    previewImage: ProjectCloudWallet,
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Solana Web3.js',
      'Rust (on-chain)',
      'Postman',
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'IBM Java Developer Professional Certificate',
    issuer: 'IBM',
    issuedOn: '2025',
    link: '', // replace with your actual credential URL
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
