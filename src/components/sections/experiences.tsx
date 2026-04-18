import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
<<<<<<< HEAD
    <Container className="bg-white dark:bg-slate-900">
=======
    <Container className="section-dark">
>>>>>>> 4e0c44cb34427d8082687ec58dddaad3dddd1259
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center text-gray-700 dark:text-gray-200">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
