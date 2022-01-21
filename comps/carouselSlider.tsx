import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css/navigation";
import Image from 'next/image';
import profileImage from "../assets/images/windows.jpg"

SwiperCore.use([Navigation]);

const CarouselSlider = () => {
    return (
        <>
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide><Image className="w-full" src={profileImage} alt="Forest" /></SwiperSlide>
                <SwiperSlide><Image className="w-full" src={profileImage} alt="Forest" /></SwiperSlide>
                <SwiperSlide><Image className="w-full" src={profileImage} alt="Forest" /></SwiperSlide>
                <SwiperSlide><Image className="w-full" src={profileImage} alt="Forest" /></SwiperSlide>
                <SwiperSlide><Image className="w-full" src={profileImage} alt="Forest" /></SwiperSlide>
                <SwiperSlide><Image className="w-full" src={profileImage} alt="Forest" /></SwiperSlide>
            
            </Swiper>
        </>

    );
    
}

export default CarouselSlider;