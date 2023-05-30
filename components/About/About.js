import React from "react";
import Image from "next/image";
import aboutImg01 from "../assets/images/about_us/person.jpg";
import aboutImg02 from "../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <Image
            src={aboutImg01}
            className=" w-4/5 h-full rounded-lg shadow-2xl"
          />
          <Image
            src={aboutImg02}
            className="absolute rounded-lg shadow-2xl w-2/4 right-5 top-2/4 border-8"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-bold mb-8">About Us</h3>
          <h2 className="text-5xl font-bold mb-8">
            We are qualified <br />
            & of experience <br />
            in this field
          </h2>
          <p className="text-base w-3/4 mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-base w-3/4 mb-8">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="bg-orange-600 rounded-lg w-44 h-14  text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
