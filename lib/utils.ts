import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function saltAndHashPassword(password: string) {
  return `hashed-${password}`
}

export const tenTailwindColorMap = [
  {
    hex: '#ef4444', // bg-red-500
    class: 'bg-red-500',
  },
  {
    hex: '#3b82f6', // bg-blue-500
    class: 'bg-blue-500',
  },
  {
    hex: '#22c55e', // bg-green-500
    class: 'bg-green-500',
  },
  {
    hex: '#eab308', // bg-yellow-500
    class: 'bg-yellow-500',
  },
  {
    hex: '#ec4899', // bg-pink-500
    class: 'bg-pink-500',
  },
  {
    hex: '#a21caf', // bg-purple-500
    class: 'bg-purple-500',
  },
  {
    hex: '#6366f1', // bg-indigo-500
    class: 'bg-indigo-500',
  },
  {
    hex: '#14b8a6', // bg-teal-500
    class: 'bg-teal-500',
  },
  {
    hex: '#f97316', // bg-orange-500
    class: 'bg-orange-500',
  },
  {
    hex: '#06b6d4', // bg-cyan-500
    class: 'bg-cyan-500',
  },
];
