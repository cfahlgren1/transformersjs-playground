import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface PillLinkProps {
  text: string;
  link: string;
  isNew?: boolean;
  newText?: string;
}

const PillLink: React.FC<PillLinkProps> = ({ text, link, isNew = false, newText = 'NEW' }) => {
  return (
    <Link target="_blank" href={link}>
      <Badge 
        className="
          mb-4 bg-gray-900 px-3 py-1.5 text-xs font-medium text-white
          shadow-md transition-all duration-200 
          hover:bg-gray-800 hover:shadow-lg
          transform hover:scale-105
          rounded-full relative
          overflow-hidden
          group
        "
      >
        <span className="relative z-10">
          {(isNew || newText) && (
            <span className="mr-2 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold text-gray-900">
              {newText}
            </span>
          )}
          {text}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></span>
      </Badge>
    </Link>
  );
};

export default PillLink;