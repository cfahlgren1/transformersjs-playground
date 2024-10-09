import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ColorConfig = {
  bg: string;
  text: string;
  gradient: string;
  iconBg: string;
};

export const colorConfigs: Record<string, ColorConfig> = {
  indigo: {
    bg: 'bg-indigo-200',
    text: 'text-indigo-800',
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    iconBg: 'bg-indigo-200',
  },
  teal: {
    bg: 'bg-teal-200',
    text: 'text-teal-800',
    gradient: 'bg-gradient-to-br from-teal-500 to-teal-700',
    iconBg: 'bg-teal-200',
  },
  rose: {
    bg: 'bg-rose-200',
    text: 'text-rose-800',
    gradient: 'bg-gradient-to-br from-rose-500 to-rose-700',
    iconBg: 'bg-rose-200',
  },
  amber: {
    bg: 'bg-amber-200',
    text: 'text-amber-800',
    gradient: 'bg-gradient-to-br from-amber-500 to-amber-700',
    iconBg: 'bg-amber-200',
  },
};

export const getColorConfig = (colorName: string): ColorConfig => {
  return colorConfigs[colorName] || {
    bg: 'bg-gray-200',
    text: 'text-gray-800',
    gradient: 'bg-gradient-to-br from-gray-500 to-gray-700',
    iconBg: 'bg-gray-200',
  };
};