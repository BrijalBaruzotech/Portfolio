import React from "react";
import mike from "../../Images/mike.png";
import daizy from "../../Images/daisy.jpg";
import ezih from "../../Images/ehiz.jpg";
import lady from "../../Images/lady.png";
import man from "../../Images/man.png";
import Symbol from "../AboutMe/Symbol";
import Slider from "react-slick";
import Review from "./Review";
import NewFooter from "./NewFooter"

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col justify-center items-center mt-3">
      <div className="md:block hidden">
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
      </div>
      <div className="w-full h-full flex justify-center items-center mt-3 backGroundForTest">
        <div className="md:w-3/4 md:h-800 flex-col flex justify-center items-center">
          <div className="md:block hidden flex justify-center items-center w-3/4 h-82">
            <Slider {...settings}    >
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <p className="w-48 h-56 text-white text-lg">
                    "I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project. He is a very honest guy and he
                    delivers ontime."
                  </p>
                </div>
                <div className="flex justify-center items-center bg-transperent rounded-full">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={mike}
                    alt="profile"
                  ></img>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <p className="w-48 h-56 text-white text-lg">
                    "I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project. He is a very honest guy and he
                    delivers ontime."
                  </p>
                </div>
                <div className="flex justify-center items-center bg-transperent rounded-full">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={daizy}
                    alt="profile"
                  ></img>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <p className="w-48 h-56 text-white text-lg">
                    "I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project. He is a very honest guy and he
                    delivers ontime."
                  </p>
                </div>
                <div className="flex justify-center items-center bg-transperent rounded-full">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={ezih}
                    alt="profile"
                  ></img>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <p className="w-48 h-56 text-white text-lg">
                    "I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project. He is a very honest guy and he
                    delivers ontime."
                  </p>
                </div>
                <div className="flex justify-center items-center bg-transperent rounded-full">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={lady}
                    alt="profile"
                  ></img>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <p className="w-48 h-56 text-white text-lg">
                    "I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project. He is a very honest guy and he
                    delivers ontime."
                  </p>
                </div>
                <div className="flex justify-center items-center bg-transperent rounded-full">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={man}
                    alt="profile"
                  ></img>
                </div>
              </div>
            </Slider> 
          </div>
        </div>
      </div>
      <div className="md:block hidden w-full -mt-32"><NewFooter/></div>
      <div className="md:hidden block">
        <Review />
      </div>
    </div>
  );
}
