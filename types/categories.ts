import type { LucideIcon } from 'lucide-react';

export interface Category {
  title: string;
  icon: LucideIcon;
  description: string;
  isNew?: boolean;
  colorName: string;
  graphic: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
};