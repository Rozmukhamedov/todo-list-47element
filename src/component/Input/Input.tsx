import { FC } from "react";
import classes from "./style.module.css";

type InputProps = {
  value?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange: (e: any) => void;
  disabled?: boolean;
  icon?: any;
  className?: any;
};

const Input: FC<InputProps> = ({
  value,
  name,
  placeholder,
  type,
  onChange,
  disabled,
  icon,
  className,
  ...props
}) => (
  <div className={className} style={{ position: "relative" }}>
    <input
      type={type}
      value={value}
      name={name}
      className={classes.input}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      {...props}
    />
  </div>
);

export default Input;
