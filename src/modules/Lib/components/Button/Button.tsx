import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant?: "primary" | "success" | "danger";

  size?: "sm" | "md" | "lg";

  effect?: boolean;
}

const variantStyles = {
  primary: {
    bg: "bg-[#ecd448]",
    hoverBg: "hover:bg-[#4cc9f0]",
    effectBg: "before:bg-[#ff6700]",
    shadow: "shadow-[0_2px_0_2px_#000]",
    hoverShadow: "hover:shadow-[0_2px_0_2px_#0d3b66]",
  },

  success: {
    bg: "bg-green-400",
    hoverBg: "hover:bg-green-600",
    effectBg: "before:bg-green-200",
    shadow: "shadow-[0_2px_0_2px_#166534]",
    hoverShadow: "hover:shadow-[0_2px_0_2px_#14532d]",
  },

  danger: {
    bg: "bg-red-400",
    hoverBg: "hover:bg-red-600",
    effectBg: "before:bg-red-200",
    shadow: "shadow-[0_2px_0_2px_#7f1d1d]",
    hoverShadow: "hover:shadow-[0_2px_0_2px_#450a0a]",
  },
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-[15px]",
  lg: "px-12 py-5 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  effect = true,
  className = "",
  ...props
}: ButtonProps) => {
  const currentVariant = variantStyles[variant];

  return (
    <button
      className={`
        relative overflow-hidden rounded-xl border-2 border-white
        font-bold text-[#131313]
        transition-all duration-300
        active:scale-90
        hover:text-white

        ${sizeStyles[size]}
        ${currentVariant.bg}
        ${currentVariant.hoverBg}
        ${currentVariant.shadow}
        ${currentVariant.hoverShadow}

        ${
          effect
            ? `
          before:absolute
          before:top-1/2
          before:h-[120%]
          before:w-25
          before:-translate-y-1/2
          before:translate-x-[-150%]
          before:skew-x-30
          before:transition-all
          before:duration-500
          hover:before:translate-x-[150%]
          ${currentVariant.effectBg}
        `
            : ""
        }

        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

import React from "react";

type FancyButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const FancyButton = ({
  text = "Add Item",
  icon,
  onClick,
}: FancyButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        flex
        h-10
        w-37.5
        items-center
        overflow-hidden
        rounded-xl
        border-2
        border-zinc-200
        bg-zinc-800
        shadow-[4px_4px_0px_#e4e4e7]
        transition-all
        duration-300
        active:translate-x-0.75
        active:translate-y-0.75
        active:shadow-none
      "
    >
      {/* Text */}
      <span
        className="
          translate-x-6
          font-semibold
          text-zinc-200
          transition-all
          duration-300
          group-hover:text-transparent
        "
      >
        {text}
      </span>

      {/* Icon */}
      <span
        className="
          absolute
          right-0
          flex
          h-full
          w-10
          items-center
          justify-center
          bg-zinc-900
          text-white
          transition-all
          duration-300
          group-hover:w-full
        "
      >
        {icon}
      </span>
    </button>
  );
};



export default Button;