export interface Images {
  src: string[] | string;
}

export interface SwiperSlideCustomProps {
  images: Images[];
  width: number;
  height: number;
  alt: string;
  wishlist?: boolean;
  rating?: number;
  title?: string;
  tags?: string[];
  description?: string;
  btn?: React.ReactNode;
  discountedPrice?: number;
  MRP?: number;
  discountPercentage?: number;
}

export interface SwiperComponentProps {
  swiperSlideData: SwiperSlideCustomProps;
  navigation?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  freeMode?: boolean;
  modules?: string[];
}

export interface MyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
