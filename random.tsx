// 'use client'
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { CiHeart, CiStar } from "react-icons/ci";
// import { SwiperSlideCustomProps } from '@/app/types/types';
// import ShowImage from '../../common/ImageShow';
// import { Navigation } from 'swiper/modules';
// import SwiperComponent from './SwiperComponent';

// const SwiperSlideCustom: React.FC<SwiperSlideCustomProps> = ({
//   images,
//   width,
//   height,
//   alt,
//   wishlist,
//   rating,
//   title,
//   tags,
//   description,
//   btn,
//   discountedPrice,
//   MRP,
//   discountPercentage,
// }) => {

//   const isMultipleImages = Array.isArray(images) && images.length > 1;

//   const insideSwiperSlideData: SwiperSlideCustomProps = {
//     images,
//     width,
//     height,
//     alt
//   }

//   return (
//     <div className="relative">
//       {isMultipleImages ? (
//         // <Swiper
//         //   slidesPerView={1}
//         //   navigation
//         //   modules={[Navigation]}
//         // >
//         //   {images.map((imageSet, index) => (
//         //     <SwiperSlide key={index}>
//         //       <div className="flex gap-2">
//         //         {Array.isArray(imageSet.src) ? (
//         //           imageSet.src.map((image) => (
//         //             <ShowImage key={index} src={image} width={width} height={height} alt={`${alt} ${index + 1}`}/>
//         //           ))
//         //         ) : (
//         //           <ShowImage src={imageSet.src} width={width} height={height} alt={`${alt} ${index + 1}`} />
//         //         )}
//         //       </div>
//         //     </SwiperSlide>
//         //   ))}
//         // </Swiper>
//         <SwiperComponent swiperSlideData={insideSwiperSlideData}/>
//       ) : (
//         <div>
//           <ShowImage src={Array.isArray(images[0].src) ? images[0].src[0] : images[0].src} width={width} height={height} alt={alt} />
//           {wishlist && (
//             <div className="absolute top-2 right-2">
//               <CiHeart className="h-6 w-6 text-white" />
//             </div>
//           )}
//           {rating && (
//             <div className="absolute bottom-2 left-2 flex items-center text-white">
//               <CiStar className="h-5 w-5 mr-1" />
//               <span>{rating}</span>
//             </div>
//           )}
//         </div>
//       )}

//       <div className=" flex flex-col gap-2">
//         {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}

//         {tags && (
//           <div className="mb-2">
//             Tags: {tags.map((tag, index) => <span key={index} className="mr-2">{tag}</span>)}
//           </div>
//         )}

//         {description && <p className="text-white mb-4">{description}</p>}

//         {btn && <div>{btn}</div>}

//         {discountedPrice && MRP && discountPercentage && (
//           <div className="flex items-center text-white">
//             <span className="text-xl font-bold mr-2">Discounted Price: ${discountedPrice}</span>
//             <span className="text-xl line-through">MRP: ${MRP}</span>
//             <span className="text-xl ml-2">Discount: {discountPercentage}%</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SwiperSlideCustom;
