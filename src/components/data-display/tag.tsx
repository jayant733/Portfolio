import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
      className={mergeClasses(
        'flex items-center justify-center rounded-xl bg-gray-100 dark:bg-slate-700 px-5 py-1',
        className
      )}
      {...props}
      >
      <Typography variant="body3" className="font-medium text-gray-700 dark:text-gray-200">
        {label}
      </Typography>
      </div>    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
