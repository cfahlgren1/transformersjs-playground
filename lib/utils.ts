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
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    iconBg: 'bg-indigo-200',
  },
  teal: {
    bg: 'bg-teal-50',
    text: 'text-teal-900',
    gradient: 'bg-gradient-to-br from-teal-400 to-emerald-600',
    iconBg: 'bg-teal-200',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-900',
    gradient: 'bg-gradient-to-br from-rose-400 to-pink-600',
    iconBg: 'bg-rose-200',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-900',
    gradient: 'bg-gradient-to-br from-amber-400 to-orange-500',
    iconBg: 'bg-amber-200',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-900',
    gradient: 'bg-gradient-to-br from-purple-400 to-indigo-600',
    iconBg: 'bg-purple-200',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-900',
    gradient: 'bg-gradient-to-br from-blue-400 to-cyan-600',
    iconBg: 'bg-blue-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-900',
    gradient: 'bg-gradient-to-br from-emerald-400 to-green-600',
    iconBg: 'bg-emerald-200',
  },
  fuchsia: {
    bg: 'bg-fuchsia-50',
    text: 'text-fuchsia-900',
    gradient: 'bg-gradient-to-br from-fuchsia-400 to-pink-600',
    iconBg: 'bg-fuchsia-200',
  },
  lime: {
    bg: 'bg-lime-50',
    text: 'text-lime-900',
    gradient: 'bg-gradient-to-br from-lime-400 to-green-500',
    iconBg: 'bg-lime-200',
  },
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-900',
    gradient: 'bg-gradient-to-br from-sky-400 to-blue-600',
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