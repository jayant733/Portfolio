import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col gap-4 p-8 md:flex-row md:items-center md:gap-8">
      {/* Logo */}
      <div className="max-md:order-1 md:w-1/4 flex md:justify-center">
        {/* fixed height so we can center relative to the text block */}
        <div className="flex h-24 w-24 items-center justify-center">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={logoAlt}
            className="h-20 w-20 object-contain"
          />
        </div>
      </div>

      {/* Position + bullets */}
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <Typography
          variant="h3"
          className="font-semibold text-white"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          {position}
        </Typography>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>

      {/* Dates */}
      <div className="max-md:order-2 md:w-1/4 md:self-start">
        <Typography className="text-gray-300 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
