// components/data-display/certificate-card.tsx
import Image from 'next/image';
import { type Certificate } from '@/lib/data';
import Typography from '@/components/general/typography';

const CertificateCard = ({
  title,
  issuer,
  issuedOn,
  link,
  logo,
}: Certificate) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
        group flex flex-col justify-between gap-4 rounded-2xl
        border border-slate-200 bg-white/95
        px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]
        transition-transform duration-200 hover:-translate-y-1
        dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_18px_45px_rgba(0,0,0,0.45)]
      "
    >
      <div className="flex items-center gap-3">
        {logo && (
          <div
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              bg-slate-100
              dark:bg-slate-800
            "
          >
            <Image
              src={logo}
              alt={issuer}
              className="h-7 w-7 object-contain"
            />
          </div>
        )}
        <div>
          <Typography
            variant="body1"
            className="line-clamp-2 font-semibold text-slate-900 dark:text-slate-50"
          >
            {title}
          </Typography>
          <Typography
            variant="body3"
            className="text-slate-500 dark:text-slate-400"
          >
            {issuer} • {issuedOn}
          </Typography>
        </div>
      </div>

      <Typography
        variant="body3"
        className="
          text-emerald-600 group-hover:underline
          dark:text-emerald-400
        "
      >
        View certificate →
      </Typography>
    </a>
  );
};

export default CertificateCard;
