import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantClasses = '';
  
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-accent hover:bg-accent-dark text-white focus:ring-accent';
      break;
    case 'secondary':
      variantClasses = 'bg-primary hover:bg-primary-dark text-white focus:ring-primary';
      break;
    case 'outline':
      variantClasses = 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent';
      break;
    default:
      variantClasses = 'bg-accent hover:bg-accent-dark text-white focus:ring-accent';
  }

  const allClasses = `${baseClasses} ${variantClasses} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className="w-full"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={allClasses}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;