import React from "react";
import Symbol from "../AboutMe/Symbol";
import Typewriter from "typewriter-effect";
import { icons } from "../Home/Profile";
import FontAwesome from "react-fontawesome";
import Mailz from "../../Images/mailz.jpeg";

export default function ContactMe() {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 ">
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
      <div className="md:w-3/5 w-10/12 md:h-400 h-580 flex flex-col p-5 bg-navyBlue rounded-2xl shadow-slate-400 shadow-2xl space-y-2">
        <div className="flex justify-start text-white fontPoppins md:text-2xl text-sm">
          <Typewriter
            className="animate-infinite text-white"
            onInit={(typewriter) => {
              typewriter
                .start()
                .typeString("Get In Touch ✉️")
                .pauseFor(100)
                .deleteAll()
                .typeString("Contact Me 📱")
                .pauseFor(100)
                .start();
            }}
          />
        </div>
        <div>
          <div className="flex justify-start items-center space-x-3">
            {icons.map((icon) => {
              return (
                <a href={icon.link} target="_blank">
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
          <div className="md:block hidden">
            <div className="w-82 flex flex-rows items-center">
              <div className="flex flex-col space-y-8">
                <div className="flex items-end text-gray-400 fontPoppins text-xl">
                  Send your message here!
                </div>
                <div className="w-2/3 h-180 flex items-center space-x-6">
                  <img src={Mailz} alt="noImage" className="opacity-70"></img>
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col p-3">
                      <form className="w-480 h-450 rounded-xl space-y-8 bg-greyOff p-5">
                        <div>
                          <label>Name</label>
                        </div>
                        <div>
                          <input
                            className="w-400 h-6 bg-smoke rounded-lg"
                            type="text"
                          ></input>
                        </div>
                        <div>
                          <label>Email</label>
                        </div>
                        <div>
                          <input
                            className="w-400 h-6 bg-smoke rounded-lg"
                            type="text"
                          ></input>
                        </div>
                        <div>
                          <label>Message</label>
                        </div>
                        <div>
                          <input
                            className="w-400 h-80 bg-smoke rounded-lg"
                            type="text"
                          ></input>
                        </div>
                        <div className="flex justify-center items-center">
                          <button className="bg-smoke text-black w-24 h-8  rounded-full">
                            Send me
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block p-2">
            <div className="w-full flex flex-rows space-y-3">
              <div className="flex flex-col space-y-2">
                <div className="flex text-gray-400 fontPoppins text-sm">
                  Send your message here!
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center space-y-3">
              <img src={Mailz} alt="noImage" className="opacity-70"></img>
              <div className="flex justify-center items-center"></div>
            </div>
            <div className="flex justify-center items-center">
              <form className="w-full h-full rounded-xl bg-greyOff p-2">
                <div>
                  <label className="text-sm">Name</label>
                </div>
                <div>
                  <input
                    className="w-full h-8 bg-smoke rounded"
                    type="text"
                  ></input>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                </div>
                <div>
                  <input
                    className="w-full h-8 bg-smoke rounded"
                    type="text"
                  ></input>
                </div>
                <div>
                  <label className="text-sm">Message</label>
                </div>
                <div>
                  <input
                    className="w-full h-14 bg-smoke rounded"
                    type="text"
                  ></input>
                </div>
                <div className="flex justify-center items-center mt-3">
                  <button className="bg-smoke text-black w-24 h-8 text-sm rounded-full">
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