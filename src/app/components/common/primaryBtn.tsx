import React from 'react';

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title }) => {
  return <button className="bg-[#2BD17E] rounded-2xl py-4 px-7 text-base font-bold leading-6 text-white">{title}</button>;
};

export default PrimaryButton;
