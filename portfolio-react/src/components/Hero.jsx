import React from "react";
import { TypeAnimation } from 'react-type-animation';

import hero from "../assets/images/hero.jpg";

const Hero = () => {
  const social_media = [
    // "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-github",
  ];

  const socialMediaLinks = [
    // Add the corresponding links for each social media icon
    // Make sure the order of the links matches the order of the icons in the social_media array
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
    "https://github.com/",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-10/12 object-cover rounded-full scale-y-75"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h2 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              My name is <span className=" text-white">Chito Saba</span>
              <br />
            </span>
            
          </h2>
          <h3 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-cyan-600">I'm a </span>
          <TypeAnimation sequence={[
            'Front End', 2000,
            'Web', 2000,
            'Developer', 2000,
            ]}   
            wrapper="span"
            speed={50}
            className="text-yellow-500"
            repeat={Infinity} 
            />
            </h3>
          
          
          
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


