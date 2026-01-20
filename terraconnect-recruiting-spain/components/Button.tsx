import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm";
  
  const variants = {
    primary: "bg-brand-gold hover:bg-brand-goldHover text-brand-green font-bold shadow-md hover:shadow-lg",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
    white: "bg-white text-brand-green hover:bg-gray-100 font-bold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};