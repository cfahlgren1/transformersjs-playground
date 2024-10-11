import Link from 'next/link';

interface PillLinkProps {
  text: string;
  link: string;
  isNew?: boolean;
  newText?: string;
}

const PillLink: React.FC<PillLinkProps> = ({ text, link, isNew = false, newText = 'NEW' }) => (
  <Link 
    href={link} 
    target="_blank" 
    className="inline-flex items-center bg-white border border-gray-200 rounded-full py-1 px-2.5 mb-3 shadow-sm hover:shadow transition-all duration-200 ease-in-out cursor-pointer"
  >
    <span className="font-mono text-xs flex items-center">
      {(isNew || newText) && (
        <span className="mr-1.5 rounded-full bg-red-500 px-2 py-0.5 text-[8px] font-bold text-white">
          {newText}
        </span>
      )}
      <span className="text-gray-800 text-[11px]">{text}</span>
    </span>
  </Link>
);

export default PillLink;