import React from 'react';

interface TitleBarProps {
  title?: string;
  subTitle?: string;
  extraInfo?: React.ReactNode;
  btn?: React.ReactNode;
}

const TitleBar: React.FC<TitleBarProps> = ({ title, subTitle, extraInfo, btn }) => {
  return (
    <div className="flex flex-col items-center">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {subTitle && <p className="mb-4">{subTitle}</p>}
      {extraInfo && <div className="mb-4">{extraInfo}</div>}
      {btn && <div>{btn}</div>}
    </div>
  );
};

export default TitleBar;
