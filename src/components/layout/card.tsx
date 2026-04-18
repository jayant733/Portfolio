import { mergeClasses } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={mergeClasses(
        'rounded-xl border border-gray-200 bg-white shadow-md',
        'dark:border-slate-700 dark:bg-slate-800 dark:shadow-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
