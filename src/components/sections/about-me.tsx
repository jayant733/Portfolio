import Image from 'next/image';

import JayantFullPose from '/public/images/jayant-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            { <Image
              src={JayantFullPose}
              alt="Full pose of Jayant"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            /> }
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>

          <Typography>
            I&apos;m a motivated Computer Science undergraduate and backend-focused
            developer who enjoys building reliable services and full-stack
            applications using Java, Spring Boot, SQL, and TypeScript with
            Node.js and React/Next.js. I care a lot about writing clean,
            maintainable code, designing reusable components, and improving
            performance and reliability across the stack.
          </Typography>

          <Typography>
            I&apos;m currently pursuing my B.Tech in Computer Science and
            Engineering at Vellore Institute of Technology (VIT), where I
            combine strong CS fundamentals with hands-on projects in RESTful
            APIs, microservices (learning), and cloud-native development on
            Oracle Cloud, Docker, and Git-based workflows.
          </Typography>

          <Typography>
            Over the past few years, I&apos;ve worked on projects like a
            Java-based Order Processing System using Spring Boot and Oracle 12c,
            a Mozilla Firefox community portal revamp with TypeScript, Node.js,
            Express, React, and MongoDB, and a CloudWallet dApp that uses
            TypeScript, Node.js, React, and Solana Web3 for wallet actions and
            on-chain interactions. These projects helped me deepen my backend
            skills, API design, debugging, logging, and deployment practices.
          </Typography>

          <Typography>
            I enjoy working end to end on products: understanding requirements,
            designing APIs and data models, implementing features, writing tests,
            and iterating based on feedback. I&apos;ve also been actively
            learning through professional certificates in Java, backend
            development, React, cloud infrastructure, and generative AI, which
            keeps me close to modern engineering practices.
          </Typography>

          <Typography>
            Outside of coding, I mentor juniors through my college Coding Club,
            help with technical events, and participate in developer communities
            like the Mozilla Firefox Club. You can check out my work and what
            I&apos;m currently building on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            , and connect with me on{' '}
            {/* <Link
              noCustomization
              externalLink
              withUnderline
              // href={EXTERNAL_LINKS.LINKEDIN}
            >
              LinkedIn
            </Link> */}
            .
          </Typography>

          <Typography>Finally, some quick bits about me.</Typography>

          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Tech in Computer Science and Engineering @ VIT (2023–2027)
              </Typography>
              <Typography component="li">
                Backend-focused developer (Java, Spring Boot, TypeScript, Node.js)
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Experience with React, Next.js, and cloud-native basics
              </Typography>
              <Typography component="li">
                Coding Club mentor & active community contributor
              </Typography>
            </ul>
          </div>

          <Typography>
            I&apos;m actively looking for impactful backend and full-stack
            internship opportunities, so feel free to reach out if you&apos;d
            like to collaborate or work together on something meaningful.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
