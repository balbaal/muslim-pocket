import React from "react";

type InputProps = {
  type: string;
  prefix?: React.ReactNode;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type, prefix, placeholder, onChange }) => {
  return (
    <div className="flex items-center gap-2 border border-gray-100 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 bg-gray-100">
      {prefix && <span className="text-gray-500">{prefix}</span>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="flex-1 outline-none bg-transparent text-black font-medium"
      />
    </div>
  );
};

export default Input;
