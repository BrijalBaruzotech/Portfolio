import React from "react";
import FontAwesome from "react-fontawesome";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../Images/Profile.JPG";

export const icons = [
  { name: "facebook", link: "https://www.facebook.com/baruzotech/" },
  {
    name: "google-plus",
    link: "https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1",
  },
  { name: "twitter", link: "https://twitter.com/iambrijal" },
  { name: "instagram", link: "https://www.instagram.com/" },
];

export function TypingText() {
  return (
    <div>
      <Typewriter
              options={{
                strings: ["Welcomes you", "I am Jr React Developer","I am Hardworking"],
                autoStart: true,
                loop: true,
              }}
            />
    </div>
  );
}

export default function Profile() {
  return (
    <div className=" md:flex md:flex-row justify-center md:space-x-20 space-y-6 items-center bg-navyBlue py-4">
      <div className="flex justify-center items-center px-12">
        <div className="md:hidden block w-80 h-60 bg-transparent flex justify-center items-center">
          <img
            src={ProfilePic}
            alt="profile"
            className="w-60 h-60 rounded-full"
          ></img>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex-row justify-center items-center md:space-y-6 space-y-2">
          <div className="flex justify-center items-center space-x-2">
            {icons.map((icon) => {
              return (
                <a href={icon.link} target="_blank">
                  <FontAwesome
                    className="flex-row justify-center items-center super-crazy-colors"
                    name={icon.name}
                    size="2x"
                    text-color="white"
                    style={{
                      textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                      color: "white",
                    }}
                  />
                </a>
              );
            })}
          </div>
          <div className="flex justify-center items-center md:text-5xl text-l font-semibold text-cyan-400">
            Hello I'm Brijal
          </div>
          <div className="md:text-5xl flex justify-center items-center text-2xl text-justify text-yellow-300 newFont">
            <Typewriter
              options={{
                strings: ["Welcomes you", "I am Jr React Developer","I am Hardworking"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex justify-center items-center text-center">
            <span className="md:flex justify-center items-center text-white md:text-xl text-sm">
              Knack of building application with frontend operations.
            </span>
          </div>
          <div className="flex justify-center space-x-3">
            <button className="bg-black border border-slate-400 text-white md:text-l text-base rounded-full md:w-36 w-28 md:h-10 h-8 transition duration-150 hover:ease-in hover:bg-grey">
              Hire Me
            </button>
            <button className="bg-orange-700 text-white md:text-l text-base rounded-full md:w-36 w-28 md:h-10 h-8 transition duration-150 hover:ease-in hover:bg-yellow-200 hover:text-navyBlue">
              Get Resume
            </button>
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <div className="w-84 h-90 bg-transparent flex justify-center items-center ">
          <img
            src={ProfilePic}
            alt="profile"
            className="rounded-full w-72 h-72"
          ></img>
        </div>
      </div>
    </div>
  );
}
