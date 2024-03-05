'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CiHeart, CiStar } from "react-icons/ci";
import { SwiperSlideCustomProps } from '@/app/types/types';
import ShowImage from '../../common/ImageShow';
import { Navigation } from 'swiper/modules';

const SwiperSlideCustom: React.FC<SwiperSlideCustomProps> = ({
  images,
  width,
  height,
  alt,
  wishlist,
  rating,
  title,
  tags,
  description,
  btn,
  discountedPrice,
  MRP,
  discountPercentage,
}) => {

  // console.log(images)
  return (
    <>
      {Array.isArray(images) && images.map((imageObject, index) => (
        <div className="relative" key={index}>
          {Array.isArray(imageObject.src) && imageObject.src.length > 1 ? (
            <Swiper
              slidesPerView={1}
              navigation
              modules={[Navigation]}
              className='w-3/4 mx-auto mySwiper'
            >
              {imageObject.src.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex gap-2">
                    <ShowImage src={image} width={width} height={height} alt={`${alt} ${idx + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div>
              <ShowImage src={imageObject.src as string} width={width} height={height} alt={alt} />
              {wishlist && (
                <div className="absolute top-2 right-2">
                  <CiHeart className="h-6 w-6 text-white" />
                </div>
              )}
              {rating && (
                <div className="absolute bottom-2 left-2 flex items-center text-white">
                  <CiStar className="h-5 w-5 mr-1" />
                  <span>{rating}</span>
                </div>
              )}
              <div className=" flex flex-col gap-2">
                {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}

                {tags && (
                  <div className="mb-2">
                    Tags: {tags.map((tag, idx) => <span key={idx} className="mr-2">{tag}</span>)}
                  </div>
                )}

                {description && <p className="text-white mb-4">{description}</p>}

                {btn && <div>{btn}</div>}

                {discountedPrice && MRP && discountPercentage && (
                  <div className="flex items-center text-white">
                    <span className="text-xl font-bold mr-2">Discounted Price: ${discountedPrice}</span>
                    <span className="text-xl line-through">MRP: ${MRP}</span>
                    <span className="text-xl ml-2">Discount: {discountPercentage}%</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SwiperSlideCustom;
