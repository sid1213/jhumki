import Navbar from "./components/core/navbar/Navbar";
import SwiperComponent from "./components/core/swiper/SwiperComponent";
import { bannerSwiperComponentProps } from "./data/banners";



export default function Home() {
  return (
    <div className=" w-full mx-auto">
        <Navbar/>

        <div className="my-10 mx-6">
          {/* BANNERS */}
          <SwiperComponent {...bannerSwiperComponentProps}/>
        </div>
    </div>
  );
}
