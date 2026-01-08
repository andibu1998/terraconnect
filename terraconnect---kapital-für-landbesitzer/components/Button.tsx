
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  // Added disabled prop to support form states and button interaction control
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer";
  
  const variants = {
    // High contrast green background with white text
    primary: "bg-brand-green text-white hover:bg-brand-greenLight shadow-md",
    // White background with olive green text as requested
    secondary: "bg-white text-brand-green border border-white hover:bg-gray-100 shadow-sm",
    outline: "border border-white text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-white/70 hover:text-white transition-colors"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      // Ensure the disabled state is correctly passed to the underlying HTML button
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
