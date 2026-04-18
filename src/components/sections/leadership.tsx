import { LEADERSHIP } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const LeadershipSection = () => {
  return (
    <Container id="leadership" className="bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Leadership" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center text-gray-700 dark:text-gray-200">
          Leadership roles and extracurricular activities where I contributed beyond coursework.
        </Typography>
      </div>

      {LEADERSHIP.map((item, index) => (
        <ExperienceDetails {...item} key={index} />
      ))}
    </Container>
  );
};

export default LeadershipSection;
