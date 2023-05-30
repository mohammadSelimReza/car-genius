import React from "react";
import banner01 from "../assets/images/banner/1.jpg";
import banner02 from "../assets/images/banner/2.jpg";
import banner03 from "../assets/images/banner/3.jpg";
import banner04 from "../assets/images/banner/4.jpg";
import banner05 from "../assets/images/banner/5.jpg";
import banner06 from "../assets/images/banner/6.jpg";
import BannerItems from "./BannerItems";
const Banner = () => {
  const bannerData = [
    {
      id: 1,
      photo: banner01.src,
      preId: 6,
      nextId: 2,
    },
    {
      id: 2,
      photo: banner02.src,
      preId: 1,
      nextId: 3,
    },
    {
      id: 3,
      photo: banner03.src,
      preId: 2,
      nextId: 4,
    },
    {
      id: 4,
      photo: banner04.src,
      preId: 3,
      nextId: 5,
    },
    {
      id: 5,
      photo: banner05.src,
      preId: 4,
      nextId: 6,
    },
    {
      id: 6,
      photo: banner06.src,
      preId: 5,
      nextId: 1,
    },
  ];
  return (
    <div className="carousel w-full my-12">
      {bannerData.map((slide) => (
        <BannerItems key={slide.id} slide={slide}></BannerItems>
      ))}
    </div>
  );
};

export default Banner;
