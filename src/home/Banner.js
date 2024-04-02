import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ headerHeight }) => {
    const path = process.env.PUBLIC_URL + "/images/photo/banners";
    const images = [
        { src: `${path}/banner_1.png`, alt: 'Banner 1' },
        { src: `${path}/banner_2.png`, alt: 'Banner 2' },
        { src: `${path}/banner_3.png`, alt: 'Banner 3' },
        { src: `${path}/banner_4.png`, alt: 'Banner 4' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    };

  return (
    <div className="w-full mb-8" style={{marginTop: `${headerHeight}px`}}>
        <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index} className= "lg:h-[450px] xl:h-[500px] 2xl:h-[550px] w-full bg-black">
                <Link to="/home/products/all">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain sm:object-scale-down xs:object-scale-down"
                    />
                </Link>
            </div>
            ))}
        </Slider>
    </div>
  );
};

export default Banner