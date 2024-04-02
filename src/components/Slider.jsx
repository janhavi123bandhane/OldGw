import React from 'react';
import ImageSlider from './ImageSlider';

const Slider = () => {
  const images = [
    'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2Ff3%2F00f368d0e4cc164f3e4ed0a637525c102aa2df53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F3f%2Fda3fc9f3c5b628a4c192bf670c416310d14a4e92.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4e%2Fd5%2F4ed58d09b31513d8b855bb0cb42baf98524f53fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
  ];

  return (
    <div>
     
      <ImageSlider 
      images={images} 
      ></ImageSlider>
    </div>
  );
};

export default Slider;