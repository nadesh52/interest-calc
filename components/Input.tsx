import React from "react";

type InputProps = {
  value?: any;
  name?: string;
  type?: "text" | "number";
  required?: boolean;
  min?: number;
  step?: 0.1 | 0.01 | 0.001;
  onChange: (value: any) => void;
};

const Input = ({
  name,
  type = "text",
  required = false,
  min = 0,
  step,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      min={min}
      step={step}
      required={required}
      autoComplete="off"
      value={value}
      onChange={(e) => onChange(e)}
      className="border border-primary m-3 h-10 rounded-lg px-3 outline-none focus-visible:ring-1 focus-visible:border-secondary"
    />
  );
};

export default Input;
