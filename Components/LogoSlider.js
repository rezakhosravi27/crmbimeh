import React from 'react';
import styles from '../styles/components/logoSlider.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);


const LogoSlider = () => {
    return (
        <div className="container">
            <div className="row mt-3 mb-5 d-none d-md-block">
                <div className="col-sm-12">
                <Swiper className={styles.slider} slidesPerView={5} spaceBetween={0} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} navigation={true} className="mySwiper">
                        <SwiperSlide className={styles.slider_item}>
                            <img src="/images/bime1.jpg" className={styles.img_logo}/>
                            <p className={styles.para}>بيمه ايران</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider_item}>
                        <img src="/images/bime2.jpg" className={styles.img_logo}/>
                        <p className={styles.para}>بيمه دي</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider_item}>
                        <img src="/images/bime4.jpg" className={styles.img_logo}/>
                        <p className={styles.para}>بيمه البرز</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider_item}>
                        <img src="/images/bime5.jpg" className={styles.img_logo}/>
                        <p className={styles.para}>بيمه معلم</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider_item}>
                        <img src="/images/bime6.jpg" className={styles.img_logo}/>
                        <p className={styles.para}>بيمه نوين</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider_item}>
                        <img src="/images/bime7.jpg" className={styles.img_logo}/>
                        <p className={styles.para}>بيمه پارسيان</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slider_item}>
                        <img src="/images/bime4.jpg" className={styles.img_logo}/>
                        <p className={styles.para}>بيمه ملت</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default LogoSlider;