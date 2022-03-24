import React from "react";
import mike from "../../Images/mike.png"
import daizy from "../../Images/daisy.jpg"
import ezih from "../../Images/ehiz.jpg"
import lady from "../../Images/lady.png"
import man from "../../Images/man.png"
import Symbol from "../AboutMe/Symbol";
import Slider from "react-slick";
import NewFooter from "./NewFooter";

export default function Review() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="md:hidden block ">
            <div>
              <div className="space-y-4">
                <div className="md:text-4xl text-2xl flex justify-center text-black text-center font-semibold mt-5">
                  Testimonial
                </div>
                <div className="md:text-md text-sm flex justify-center text-black text-center">
                  What client say about me?
                </div>
                <div className="flex justify-center pt-2">
                  <Symbol />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center backGroundForTest mt-5">
              <div className="md:hidden block container w-64 h-480">
                <Slider {...settings} className="pt-5">
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-col justify-center items-center">
                      <p className="w-36 h-48 text-white">
                        "I patronized Ehizeex and when He delivered, I honestly fell
                        in love with the project. He is a very honest guy and he
                        delivers ontime."
                      </p>
                    </div>
                    <div className="flex justify-center items-center rounded-full">
                      <img
                        className="w-36 h-36 rounded-full"
                        src={mike}
                        alt="profile"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-col justify-center items-center">
                      <p className="w-36 h-48 text-white">
                        "I patronized Ehizeex and when He delivered, I honestly fell
                        in love with the project. He is a very honest guy and he
                        delivers ontime."
                      </p>
                    </div>
                    <div className="flex justify-center items-center rounded-full">
                     <img
                        className="w-36 h-36 rounded-full"
                        src={daizy}
                        alt="profile"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-col justify-center items-center">
                      <p className="w-36 h-48 text-white">
                        "I patronized Ehizeex and when He delivered, I honestly fell
                        in love with the project. He is a very honest guy and he
                        delivers ontime."
                      </p>
                    </div>
                    <div className="flex justify-center items-center rounded-full">
                     <img
                        className="w-36 h-36 rounded-full"
                        src={ezih}
                        alt="profile"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-col justify-center items-center">
                      <p className="w-36 h-48 text-white">
                        "I patronized Ehizeex and when He delivered, I honestly fell
                        in love with the project. He is a very honest guy and he
                        delivers ontime."
                      </p>
                    </div>
                    <div className="flex justify-center items-center rounded-full">
                    <img
                        className="w-36 h-36 rounded-full"
                        src={lady}
                        alt="profile"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-col justify-center items-center">
                      <p className="w-36 h-48 text-white">
                        "I patronized Ehizeex and when He delivered, I honestly fell
                        in love with the project. He is a very honest guy and he
                        delivers ontime."
                      </p>
                    </div>
                    <div className="flex justify-center items-center rounded-full">
                    <img
                        className="w-36 h-36 rounded-full"
                        src={man}
                        alt="profile"
                      ></img>
                    </div>
                  </div> 
                </Slider>
              </div>
            </div>
            <div className="relative -mt-8"><NewFooter/></div>
          </div>
        </div>
      );
}