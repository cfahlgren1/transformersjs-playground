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
    bg: 'bg-indigo-50',
    text: 'text-indigo-900',
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    iconBg: 'bg-indigo-200',
  },
  teal: {
    bg: 'bg-teal-50',
    text: 'text-teal-900',
    gradient: 'bg-gradient-to-br from-teal-500 to-teal-700',
    iconBg: 'bg-teal-200',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-900',
    gradient: 'bg-gradient-to-br from-rose-500 to-rose-700',
    iconBg: 'bg-rose-200',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-900',
    gradient: 'bg-gradient-to-br from-amber-500 to-amber-700',
    iconBg: 'bg-amber-200',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-900',
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    iconBg: 'bg-purple-200',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-900',
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    iconBg: 'bg-blue-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-900',
    gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    iconBg: 'bg-emerald-200',
  },
  fuchsia: {
    bg: 'bg-fuchsia-50',
    text: 'text-fuchsia-900',
    gradient: 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-700',
    iconBg: 'bg-fuchsia-200',
  },
  lime: {
    bg: 'bg-lime-50',
    text: 'text-lime-900',
    gradient: 'bg-gradient-to-br from-lime-500 to-lime-700',
    iconBg: 'bg-lime-200',
  },
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-900',
    gradient: 'bg-gradient-to-br from-sky-500 to-sky-700',
    iconBg: 'bg-sky-200',
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