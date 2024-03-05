'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MyImageProps } from '@/app/types/types';

const ShowImage: React.FC<MyImageProps> = ({ src , alt, width, height}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ShowImage;
