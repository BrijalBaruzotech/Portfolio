import React from "react";
import Symbol from "../AboutMe/Symbol";
import FontAwesome from "react-fontawesome";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Interest from "./Interest";
import { useState } from "react";
import ResponsiveResume from "./ResponsiveResume";

export default function Resume() {
  const icons = [
    { name: "fa-solid fa-graduation-cap" },
    { name: "fas fa-history" },
    { name: "fa-solid fa-briefcase" },
    { name: "fa-solid fa-desktop" },
    { name: "fa-solid fa-user" },
  ];

  const [activeKey, setActiveKey] = useState("Education");

  const makeActive = (title) => {
    setActiveKey(title);
  };

  return (
    <div className="space-y-4 md:mt-7">
      <div className="md:block hidden md:text-4xl text-2xl flex justify-center text-black text-center font-semibold">
        Resume
      </div>
      <div className="md:block hidden md:text-lg flex justify-center text-black text-center">
        My Formal Bio
      </div>
      <div className="flex justify-center pt-2">
        <div className="md:block hidden ">
          <Symbol />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row">
            <div className="flex flex-col ">
              <div className="flex flex-col justify-center items-center shadow-lg shadow-slate-400">
                {icons.map((icon) => {
                  return (
                    <div className="w-12 h-10 bg-navyBlue flex-col flex justify-center items-center py-10">
                      <FontAwesome
                        name={icon.name}
                        size="2x"
                        text-color="white"
                        style={{
                          textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                          color: "white",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="md:block hidden">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center items-center shadow-lg shadow-slate-400">
                    <div className="w-64 h-10 flex-col flex justify-center items-start py-10">
                      <div
                        className="w-56 h-12 p-1 text-center text-lg transition hover:bg-navyBlue rounded-l rounded-full hover:text-white"
                        onMouseEnter={() => makeActive("Education")}
                      >
                        Education
                      </div>
                    </div>
                    <div className="w-64 h-10  flex-col flex justify-center items-start py-10">
                      <div
                        className="w-56 h-12 p-1 text-center text-lg transition hover:bg-navyBlue rounded-l rounded-full hover:text-white"
                        onMouseEnter={() => makeActive("WorkExperience")}
                      >
                        Experience
                      </div>
                    </div>
                    <div className="w-64 h-10  flex-col flex justify-center items-start py-10">
                      <div
                        className="w-56 h-12 p-1 text-center text-lg transition hover:bg-navyBlue rounded-l rounded-full hover:text-white"
                        onMouseEnter={() => makeActive("Projects")}
                      >
                        Projects
                      </div>
                    </div>
                    <div className="w-64 h-10  flex-col flex justify-center items-start py-10">
                      <div
                        className="w-56 h-12 p-1 text-center text-lg transition hover:bg-navyBlue rounded-l rounded-full hover:text-white"
                        onMouseEnter={() => makeActive("Skills")}
                      >
                        Programming Skills
                      </div>
                    </div>
                    <div className="w-64 h-10  flex-col flex justify-center items-start py-10">
                      <div
                        className="w-56 h-12 p-1 text-center text-lg transition hover:bg-navyBlue rounded-l rounded-full hover:text-white"
                        onMouseEnter={() => makeActive("Interest")}
                      >
                        Interest
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:block hidden">
              <div className="w-680 h-400 flex flex-col justify-center shadow-lg shadow-zinc-400">
                <div className="w-680 flex flex-col justify-center">
                  {activeKey === "Education" && (
                    <div>
                      <Education />
                    </div>
                  )}
                  {activeKey === "WorkExperience" && (
                    <div>
                      <WorkExperience />
                    </div>
                  )}
                  {activeKey === "Projects" && (
                    <div>
                      <Projects />
                    </div>
                  )}
                  {activeKey === "Skills" && (
                    <div>
                      <Skills />
                    </div>
                  )}
                  {activeKey === "Interest" && (
                    <div>
                      <Interest />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex justify-center items-center p-7">
          <ResponsiveResume />
        </div>
      </div>
    </div>
  );
}