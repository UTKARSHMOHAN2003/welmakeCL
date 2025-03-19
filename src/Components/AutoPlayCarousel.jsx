import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import silder1 from "../assets/2X Stain Remover.jpg";
import silder2 from "../assets/silder2.png";
import silder3 from "../assets/Fregnance.jpeg.jpg";
const AutoPlayCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        <div>
          <img
            src={silder1}
            alt="Slide 1"
            className="w-full h-1/2 object-cover"
          />
        </div>
        <div>
          <img
            src={silder2}
            alt="Slide 2"
            className="w-full h-[1060px]object-cover"
          />
        </div>
        <div>
          <img
            src={silder3}
            alt="Slide 3"
            className="w-full h-1/2 object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlayCarousel;