import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="relative pb-4">
        <div className="flex items-center justify-center">
          <div className="h-[2px] w-16 bg-[#636870]"></div>
          <h2 className="text-4xl font-bold mx-4 text-gray-900">{title}</h2>
          <div className="h-[2px] w-16 bg-[#636870]"></div>
        </div>
      </div>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
