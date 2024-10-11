import type { LucideIcon } from 'lucide-react';

export type CategoryStatus = 'New' | 'Coming Soon' | 'Available';

export interface Demo {
  component: React.ComponentType;
  title: string;
  description: string;
  slug: string;
  snippet?: string;  
}

export interface Category {
  title: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  status: CategoryStatus;
  colorName: string;
  graphic: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  demos?: Demo[];
}