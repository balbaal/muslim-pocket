import React from "react";

type LoaderProps = {
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ className = "w-4" }) => {
  return (
    <div
      className={`aspect-square rounded-full animate-loader ${className}`}
      role="status"
      aria-label="loading"
    />
  );
};

export default Loader;
