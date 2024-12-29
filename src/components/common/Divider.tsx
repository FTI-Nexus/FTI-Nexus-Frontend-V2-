import React from 'react';

interface DividerProps {
  children: React.ReactNode;
}

const Divider = ({ children }: DividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-2 text-gray-500">{children}</span>
      </div>
    </div>
  );
};

export default Divider;