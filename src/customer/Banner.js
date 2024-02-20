import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const path = process.env.PUBLIC_URL + "/images/photo/banners";
    const images = [
        { src: `${path}/banner_1.png`, alt: 'Image 1' },
        { src: `${path}/banner_2.png`, alt: 'Image 2' },
        { src: `${path}/banner_3.png`, alt: 'Image 3' },
        { src: `${path}/banner_4.png`, alt: 'Image 4' },
        { src: `${path}/banner_5.png`, alt: 'Image 5' },
        { src: `${path}/banner_6.png`, alt: 'Image 6' },
        { src: `${path}/banner_7.png`, alt: 'Image 7' },
        { src: `${path}/banner_8.png`, alt: 'Image 8' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false
    };

  return (
    <div>
        <div className="mt-[112px]">
        <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index}  className="bg-black h-[500px]">
                <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
                />
            </div>
            ))}
        </Slider>
        </div>
    </div>
  );
};

export default Banner