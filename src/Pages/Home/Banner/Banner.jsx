import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
const Banner = () => {
    return (
        <div className="relative">
  <Carousel
   showThumbs={false}
  autoPlay={true}
  infiniteLoop={true}
  showStatus={false}
  interval={2000}
  >
    <div className="relative">
      <img src={banner1} />

      <p className="absolute bottom-49 left-32">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.<br />
        From personal packages to business shipments — we deliver on time, every time.
      </p>
    </div>

    <div className="relative">
      <img src={banner2} />
       <p className="absolute bottom-49 left-32">
       
        From personal packages to business shipments — we deliver on time, every time.
      </p>
    </div>

    <div className="relative">
      <img src={banner3} />
       <p className="absolute bottom-49 left-32">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.<br />
        
      </p>
    </div>
  </Carousel>

  {/* This MUST also be inside the same relative parent */}
  <div className="absolute bottom-30 left-50 -translate-x-1/2">
    <button className="bg-[#CAEB66] text-white py-2 px-4 rounded">
      Track your parcel
    </button>
  </div>
</div>

    );
};

export default Banner;