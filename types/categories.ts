import type { LucideIcon } from 'lucide-react';

export type CategoryStatus = 'New' | 'Coming Soon' | 'Available';

export interface Category {
  title: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  status: CategoryStatus;
  colorName: string;
  graphic: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  demos?: React.ComponentType[];
}