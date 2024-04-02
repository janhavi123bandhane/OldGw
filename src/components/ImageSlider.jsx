import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
         onClick={nextImage}
        className="md:hidden w-[50rem] h-[60rem] cursor-pointer"
      />
         {/* Navigation dots */}
         <div className="flex space-x-4 justify-center mt-[-1.5rem]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[0.7rem] h-[0.7rem] bg-[#686060] rounded-full cursor-pointer`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
      {/* <div className=' flex space-x-7 justify-center  mt-[-2rem]'>
        <div 
        className='w-[1rem] h-[1rem] bg-[#686060] rounded-full'
        onClick={nextImage}
        ></div>
        <div 
        className='w-[1rem] h-[1rem] bg-[#686060] rounded-full'
        onClick={nextImage}
        ></div>
        <div 
        className='w-[1rem] h-[1rem] bg-[#686060] rounded-full'
        onClick={nextImage}
        ></div>
      </div> */}
      
    </div>
  );
};

export default ImageSlider;
