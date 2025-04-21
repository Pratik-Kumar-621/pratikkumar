import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="h-[2px] w-16 bg-[#636870]"></div>
      <h2 className="text-4xl font-bold mx-4 text-gray-900">{title}</h2>
      <div className="h-[2px] w-16 bg-[#636870]"></div>
    </div>
  );
};

export default SectionHeading;
