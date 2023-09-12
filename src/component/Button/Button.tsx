import React, { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: any;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
  props?: any;
};

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
  disabled,
  loading,
  props,
  style,
}) => {
  return (
    <>
      <button
        style={{
          ...style,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
