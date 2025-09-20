"use client";
import classNames from "classnames";
import React from "react";
import { cn } from "@/cuteui/lib/cn";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "contained" | "outlined" | "text" | "close" | "auth";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "light"
    | "dark";
  text?: string | React.ReactNode;
  size?: "small" | "medium" | "large" | "iconSmall" | "iconMedium" | "iconLarge";
  icon?: React.ReactNode; // changed from boolean to ReactNode
  position?: "leading" | "trailing";
  disabled?: boolean;
  classname?: string;
  children?: React.ReactNode;
}

const buttonStyles = {
  base: "inline-flex font-medium w-full items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-md",
  disabled: {
    contained: "bg-background-disabled cursor-not-allowed text-action-disabled",
    outlined: "bg-text-hint cursor-not-allowed text-action-disabled border-[1px]",
    close: "bg-text-hint cursor-not-allowed text-action-disabled border-[1px]",
    auth: "bg-white cursor-not-allowed border-[1px]",
  },
  size: {
    small: "px-4 py-2 h-8",
    medium: "px-6 py-2.5 h-10",
    large: "px-8 py-4 h-13",
    iconSmall: "px-2 py-2 h-8",
    iconMedium: "px-2.5 py-2.5 h-10",
    iconLarge: "px-4 py-4 h-13",
  },
  variant: {
    contained: "bg-primary-main text-text-hint hover:bg-[#48AE90]",
    outlined: "border border-primary-main bg-text-hint hover:bg-[#E2F3EF]",
    text: "text-blue-500 hover:bg-blue-50",
    close: "text-text-hint hover:bg-text-hint/70 bg-text-hint",
    auth: "text-text-primary hover:bg-[#FAFAFA] border-[1px]",
  },
  color: {
    primary: "text-text-hint",
    secondary: "text-primary-main",
    success: "bg-success text-text-hint",
    error: "bg-error text-text-hint",
    warning: "bg-warning text-red-500 border-red-500 hover:bg-red-100",
    info: "bg-info text-text-hint",
    light: "bg-light text-text-primary",
    dark: "bg-dark text-text-hint",
  },
};

export const Button = ({
  variant = "contained",
  color = "primary",
  text,
  size = "medium",
  icon,
  position,
  disabled = false,
  classname,
  children,
  onClick,
}: ButtonProps) => {
  const classes = classNames(buttonStyles.base, buttonStyles.size[size], {
    [buttonStyles.disabled.contained]: disabled && variant === "contained",
    [buttonStyles.disabled.outlined]: disabled && variant === "outlined",
    [buttonStyles.variant[variant]]: !disabled,
    [buttonStyles.color[color]]: !disabled,
  });

  return (
    <button
      className={cn(classes, classname)}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <div className="bodyMedium flex items-center gap-2.5">
        {icon && position === "leading" && <span className="flex items-center">{icon}</span>}
        {text}
        {icon && position === "trailing" && <span className="flex items-center">{icon}</span>}
      </div>
      {children}
    </button>
  );
};
