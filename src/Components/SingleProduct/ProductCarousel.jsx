import React, { useState } from 'react';
import Hero1 from '../../assets/LivingRoom.png'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
const images = [
  {
    img: Hero1,
  },
  {
    img: Hero1,
  },
  {
    img: Hero1,
  },
  {
    img: Hero1,
  },

]

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  console.log(images);

  return (
    <div className="relative w-full max-w-xl ">
      {/* Images */}
      <div className="overflow-hidden relative">
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt={`Product ${index}`}
              className="inline-block w-full object-cover"
            />
          ))}
        </div>
        <div className="absolute top-4 left-4 badge badge-secondary rounded bg-white border-0 font-bold shadow-xl">NEW</div>
        <div className="absolute top-12 left-4 badge bg-[#d17f34] rounded border-0 font-bold text-white shadow-xl">-50%</div>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
      >
        <GoArrowLeft className='text-xl md:text-3xl text-gray-600' />
      </button>


      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
      >
        <GoArrowRight className='text-xl md:text-3xl text-gray-600' />
      </button>

      {/* Thumbnails */}
      <div className="mt-4 flex justify-center space-x-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.img}
            alt={`Thumbnail ${index}`}
            className={`w-32 h-32 object-cover cursor-pointer ${currentIndex === index ? 'brightness-100 opacity-100' : 'brightness-75 opacity-75'
              }`}
            onClick={() => handleThumbnailClick(index)}
          />

        ))}

      </div>


    </div>
  );
};

export default ProductCarousel;
