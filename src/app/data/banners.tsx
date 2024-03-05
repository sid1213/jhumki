import {
  Images,
  SwiperComponentProps,
  SwiperSlideCustomProps,
} from "../types/types";

export const bannersData: Images[] = [
  {
    src: [
      "https://cdn.picpil.com/fit-in/1800x600/banners/2023/11/314/Rani_Wedding_Special_Edition_Desktop_Banner.jpg",
    ],
  },
  {
    src: [
      "https://cdn.picpil.com/fit-in/1800x600/banners/2023/11/320/Anika_Handmade_Terracotta_Desktop-2023.jpg",
    ],
  },
  {
    src: [
      "https://cdn.picpil.com/fit-in/1800x600/banners/2023/11/326/Avantika_Seasons_New_Styles_Desktop-2023.jpg",
    ],
  },
  {
    src: [
      "https://cdn.picpil.com/fit-in/1800x600/banners/2023/11/326/Avantika_Seasons_New_Styles_Desktop-2023.jpg",
      "https://cdn.picpil.com/fit-in/1800x600/banners/2023/11/326/Avantika_Seasons_New_Styles_Desktop-2023.jpg",
    ],
  },
];

export const bannerSlideData: SwiperSlideCustomProps = {
  images: bannersData,
  width: 1800,
  height: 600,
  alt: "Banner",
};

export const bannerSwiperComponentProps: SwiperComponentProps = {
  swiperSlideData: bannerSlideData,
  navigation: true,
  autoplay: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,
};
