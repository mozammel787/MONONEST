import React, { useEffect, useState } from 'react';
import Hero1 from "../../assets/Hero1.png";
import Hero2 from "../../assets/Hero2.png";
import Hero3 from "../../assets/Hero3.png";
import Hero4 from "../../assets/Hero4.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev % totalSlides) + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  const handleDotClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };


  const goToPreviousSlide = () => {
    setCurrentSlide(prev => (prev === 1 ? totalSlides : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides ? 1 : prev + 1));
  };

  return (
    <section className='mx-auto container overflow-hidden relative '>

      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle"
        onClick={goToPreviousSlide}
      >
        <GoArrowLeft className='text-3xl text-gray-600' />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle"
        onClick={goToNextSlide}
      >
        <GoArrowRight className='text-3xl text-gray-600' />
      </button>

      <div className="carousel w-full relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
        >
          <div className="carousel-item w-full flex-shrink-0 relative">
            <img src={Hero1}  className="w-full h-[75vh] object-cover brightness-90" />
          </div>

          <div className="carousel-item w-full flex-shrink-0 relative">
            <img src={Hero2} className="w-full h-[75vh] object-cover brightness-90" />
          </div>

          <div className="carousel-item w-full flex-shrink-0 relative">
            <img src={Hero3} className="w-full h-[75vh] object-cover brightness-90" />
          </div>

          <div className="carousel-item w-full flex-shrink-0 relative">
            <img src={Hero4} className="w-full h-[75vh] object-cover brightness-90" />
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">

          <span
            className={`dot  h-3 rounded-full cursor-pointer shadow-2xl bg-white  ${currentSlide === 1 ? ' w-8 ' : 'w-3'}`}
            onClick={() => handleDotClick(1)}
          ></span>

          <span
            className={`dot  h-3 rounded-full cursor-pointer shadow-2xl bg-white ${currentSlide === 2 ? ' w-8' : 'w-3'}`}
            onClick={() => handleDotClick(2)}
          ></span>

          <span
            className={`dot  h-3 rounded-full cursor-pointer shadow-2xl bg-white ${currentSlide === 3 ? ' w-8' : 'w-3'}`}
            onClick={() => handleDotClick(3)}
          ></span>

          <span
            className={`dot  rounded-full cursor-pointer shadow-2xl bg-white ${currentSlide === 4 ? ' w-3 h-3' : ''}`}
            onClick={() => handleDotClick(4)}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
