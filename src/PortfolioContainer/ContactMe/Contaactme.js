import React from "react";
import Symbol from "../AboutMe/Symbol";
import Typewriter from "typewriter-effect";
import { icons } from "../Home/Profile";
import FontAwesome from "react-fontawesome";
import Mailz from "../../Images/mailz.jpeg";

export default function Contaactme() {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 mt-2 mb-8">
      <div className="md:text-4xl text-lg flex justify-center text-black text-center font-semibold">
        Contact Me
      </div>
      <div className="md:text-lg text-sm flex justify-center text-black text-center">
        Let's Keep in Touch
      </div>
      <div className="flex justify-center p-3">
        <div>
          <Symbol />
        </div>
      </div>
      <div className="md:w-3/5 w-10/12 md:h-400 h-580 flex flex-col p-5 bg-navyBlue rounded-2xl shadow-slate-400 shadow-2xl space-y-2 p-5">
        <div className="flex justify-start text-white fontPoppins md:text-2xl text-sm">
        <Typewriter
              options={{
                strings: ["Get in Touch📧", "Contact me📱"],
                autoStart: true,
                loop: true,
              }}
            />
        </div>
        <div>
          <div className="flex justify-start items-center space-x-3">
            {icons.map((icon) => {
              return (
                <a href={icon.link} target="_blank" rel="noreferrer">
                  <FontAwesome
                    className="flex-row justify-center items-center super-crazy-colors"
                    name={icon.name}
                    size="1x"
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
        </div>
        <div className="grid md:grid-cols-2 space-x-4 space-y-4">
          <div className="col-span-1 flex flex-col">
            <div className="flex items-end text-gray-400 fontPoppins text-sm">
              Send your message here!
            </div>
            <div className="w-full h-full flex items-center">
              <img src={Mailz} alt="noImage" className="opacity-60"></img>
            </div>
          </div>
          <div className="col-span-1">
            <div className="">
              <form className="rounded-xl bg-greyOff p-5 space-y-2">
                <div>
                  <label className="text-sm">Name</label>
                </div>
                <div>
                  <input
                    className="w-full h-5 bg-smoke rounded"
                    type="text"
                  ></input>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                </div>
                <div>
                  <input
                    className="w-full h-5 bg-smoke rounded"
                    type="text"
                  ></input>
                </div>
                <div>
                  <label className="text-sm">Message</label>
                </div>
                <div>
                  <input
                    className="w-full h-12 bg-smoke rounded"
                    type="text"
                  ></input>
                </div>
                <div className="flex justify-center items-center mt-3">
                  <button className="bg-smoke text-black w-24 h-6 text-sm rounded-full">
                    Send me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}