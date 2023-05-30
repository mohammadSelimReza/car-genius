import React from "react";

const BannerItems = ({ slide }) => {
  const { id, photo, preId, nextId } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="img-gradient w-full">
        <img src={photo} className="w-full" />
      </div>

      <div className="absolute flex flex-col transform -translate-y-1/2 left-24 top-1/2">
        <h1 className="text-6xl text-white font-bold">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
        <p className="text-xl text-white my-8 w-1/2">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="btn glass w-44 h-14">Discover More</button>
          <button className="btn glass w-44 h-14 mx-4">Latest Projects</button>
        </div>
      </div>
      <div className="absolute flex transform -translate-y-1/2 right-10 bottom-10">
        <a
          href={`#slide${preId}`}
          className="btn rounded-full mx-6 bg-inherit border-2 border-orange-700 text-xl"
        >
          ❮
        </a>
        <a
          href={`#slide${nextId}`}
          className="btn btn-circle bg-inherit border-2 border-orange-700 text-xl"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
