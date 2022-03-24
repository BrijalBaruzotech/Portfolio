import React from "react";
import Symbol from "./Symbol";
import Graduate from "../../Images/Graduate.jpg";

export default function AboutMe() {
  return (
    <div className="flex-col justify-center items-center space-y-6 ">
      <div className="space-y-4">
        <div className="md:text-4xl text-2xl flex justify-center text-black text-center font-semibold mt-5">
          About Me
        </div>
        <div className="md:text-md text-sm flex justify-center text-black text-center">
          Why choose me?
        </div>
        <div className="flex justify-center pt-2">
          <Symbol />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="md:block hidden flex justify-center items-center shadow-2xl shadow-slate-800">
            <img
              src={Graduate}
              alt="graduate"
              style={{ width: "380px", height: "480px" }}
            ></img>
          </div>
          <div className="md:w-380 w-280 md:h-480 p-5 flex-cols justify-center items-center shadow-2xl shadow-slate-800 space-y-8">
            <p className="text-justify">
              How to start a resume with a summary statement The summary
              statement typically sits right below the job seeker’s contact
              information and right above the body of the resume. A resume
              summary statement is often referred to by other names, including:
              Career summary Personal statement Professional summary Summary of
              experience Summary of qualifications Qualifications summary
              Competencies.
            </p>
            <div className="md:block hidden flex justify-center items-end space-x-3">
              <button className="bg-black text-white text-l rounded-full w-36 h-10 transition duration-150 hover:ease-in hover:bg-cyan-100 hover:text-blue-900">
                Hire Me
              </button>
              <button className="bg-orange-700 text-white text-l rounded-full w-36 h-10 transition duration-150 hover:ease-in hover:bg-yellow-200 hover:text-navyBlue">
                Get Resume
              </button>
            </div>
            <div className="md:hidden block flex-col flex justify-center items-center space-y-3">
              <button className="bg-black text-white text-l rounded-full w-full h-10 transition duration-150 hover:ease-in hover:bg-cyan-100 hover:text-blue-900">
                Hire Me
              </button>
              <button className="bg-orange-700 text-white text-l rounded-full w-full h-10 transition duration-150 hover:ease-in hover:bg-yellow-200 hover:text-navyBlue">
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
