import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-party-purple disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-party-dark text-white hover:bg-party-dark/90': variant === 'primary',
            'bg-party-light text-party-dark hover:bg-gray-200': variant === 'secondary',
            'border-2 border-party-dark bg-transparent hover:bg-party-dark hover:text-white': variant === 'outline',
            'hover:bg-party-light text-party-dark': variant === 'ghost',
            'bg-gradient-party text-white hover:opacity-90 shadow-lg shadow-party-purple/25': variant === 'gradient',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
