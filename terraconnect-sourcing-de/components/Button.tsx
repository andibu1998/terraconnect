
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
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
  const baseStyles = "px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const variants = {
    // Standard Green (Primary Action)
    primary: "bg-brand-green text-white hover:bg-brand-greenLight shadow-md hover:shadow-lg",
    
    // Gold / Accent (High Priority CTA) - Solves the white-on-white hover issue
    // Normal: Gold BG, Green Text
    // Hover: White BG, Green Text, Gold/Dark Shadow
    accent: "bg-brand-accent text-brand-green hover:bg-white hover:text-brand-green shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 font-bold",

    // Secondary (White)
    secondary: "bg-white text-brand-green border border-white hover:bg-gray-100 shadow-sm",
    
    // Outline (Transparent)
    outline: "border border-white text-white hover:bg-white/10 backdrop-blur-sm",
    
    // Ghost (Minimal)
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
