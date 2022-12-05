import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CardProducts from "../CardProducts/CardProducts";

// Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';

// Styles
import styles from './SpecialSale.module.css';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// Image
import sale  from '../../assets/slider/sale.png';


const SpecialSale = ({productData}) => {
    const params = {
        modules: [Navigation, FreeMode],

        navigation: {
            prevEl: '.swiper-button-next',
            nextEl: '.swiper-button-prev'
        },

        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 50,
            }
        }
    }

    return (
        <div>
            <section className={styles.container}>
                <div className="m-auto" id={styles.saleProduct}>
                    <div className="d-flex justify-content-between px-3" id={styles.title}>
                        <h6 className="py-3"> فروش ویژه </h6>
                        <Link to="/" className="d-flex align-items-center">
                            <p className={styles.more}>بیشتر</p>
                            <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                        </Link>
                    </div>

                    <div className="position-relative" id={styles.boxSlider}>
                        <div className="my-0 mx-auto d-flex" id={styles.dFlex}>
                            <div className="container-start" id={styles.imgSale}>
                                <img src={sale} alt="sale" />
                            </div>

                            <div className="swiper " id={styles.divSlider}>
                                <Swiper {...params}
                                        freeMode={true}
                                        className="mySwiper swiper-wrapper"
                                        id={styles.slider}
                                >

                                    {
                                        productData.slice(0,1).map(product => {
                                            return(
                                                <SwiperSlide key={product._id} id={styles.swiperSlide}>
                                                    <CardProducts productData={product} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>

                        <div className="swiper-button-prev" id={styles.buttonPrev}></div>
                        <div className="swiper-button-next" id={styles.buttonNext}></div>

                    </div>

                    <div className="m-auto" id={styles.mobileContainer}>
                        <div className="my-0" id={styles.mobileSlider}>
                            <div className="container-start" id={styles.imgSale}>
                                <img src={sale} alt="sale" />
                            </div>

                            <div className="d-flex" id={styles.saleBox}>
                                <div className="d-flex" >
                                    {
                                        productData.slice(0,1).map(product => {
                                            return(
                                                <CardProducts key={product._id} className="d-flex" productData={product} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpecialSale;