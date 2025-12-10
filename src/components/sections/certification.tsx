// components/sections/certifications-section.tsx
import { CERTIFICATES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import CertificateCard from '../layout/certification-card';

const CertificationsSection = () => {
  return (
    <Container
      id="certifications"
      className="
        bg-slate-50
        dark:bg-gray-50
      "
    >
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certifications" />
        </div>
        <Typography
          variant="subtitle"
          className="max-w-2xl text-center text-slate-700 dark:text-slate-200"
        >
          Credentials and certifications that validate my skills.
        </Typography>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((certificate) => (
          <CertificateCard key={certificate.title} {...certificate} />
        ))}
      </div>
    </Container>
  );
};

export default CertificationsSection;
