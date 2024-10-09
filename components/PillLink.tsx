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
    <Link href={link}>
      <Badge 
        className="
          mb-4 bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-sm 
          transition-all duration-200 
          hover:bg-red-600 
          transform hover:scale-105
        "
      >
        {isNew || newText && (
          <span className="mr-1 rounded bg-white px-1 py-0.5 text-[10px] font-bold text-red-500">
            {newText}
          </span>
        )}
        {text}
      </Badge>
    </Link>
  );
};

export default PillLink;