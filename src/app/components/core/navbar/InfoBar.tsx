import React from 'react';

interface InfoBarProps {
    content: string | React.ReactNode;
}

const InfoBar: React.FC<InfoBarProps> = ({ content }) => {
    return (
        <div className="flex items-center justify-center h-full py-1 bg-[#0D9488] text-white">
            {typeof content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
                <div>{content}</div>
            )}
        </div>
    );
};

export default InfoBar;
