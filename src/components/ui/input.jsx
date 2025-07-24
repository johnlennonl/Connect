import React from "react";

export const Input = React.forwardRef(
  ({ className = "", type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 " +
          className
        }
        ref={ref}
        {...props}
      />
    );
  }
);
