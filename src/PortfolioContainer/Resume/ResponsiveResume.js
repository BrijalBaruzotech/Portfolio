import React from "react";
import Symbol from "../AboutMe/Symbol";
import FontAwesome from "react-fontawesome";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Interest from "./Interest";
import { useState } from "react";

export default function ResponsiveResume() {
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
    <div className="space-y-4">
      <div className="text-2xl flex justify-center text-black text-center font-semibold">
        Resume
      </div>
      <div className="flex justify-center text-black text-center">
        My Formal Bio
      </div>
      <div className="flex justify-center">
        <Symbol />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center space-y-2">
          <div>
            <div className="flex flex-col justify-center items-center shadow-lg shadow-slate-700">
              {icons.map((icon) => {
                return (
                  <div className="w-12 h-8 bg-navyBlue flex-col flex justify-center items-center py-10">
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
          <div className="w-52">
            <div className="flex flex-col justify-center items-center shadow-lg shadow-slate-500">
              <div
                className="w-20 h-80 flex justify-start items-center py-2 text-base"
                onMouseEnter={() => makeActive("Education")}
              >
                Education
              </div>
              <div
                className="w-20 h-80 flex justify-start items-center py-2 text-base"
                onMouseEnter={() => makeActive("WorkExperience")}
              >
                Working Experience
              </div>
              <div
                className="w-20 h-80 flex justify-start items-center py-2 text-base"
                onMouseEnter={() => makeActive("Projects")}
              >
                Projects
              </div>
              <div
                className="w-20 h-80 flex justify-start items-center py-2 text-base"
                onMouseEnter={() => makeActive("Skills")}
              >
                Programming Skills
              </div>
              <div
                className="w-20 h-80 flex justify-start items-center py-2 text-base"
                onMouseEnter={() => makeActive("Interest")}
              >
                Interest
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-slate-500 shadow-lg flex justify-center items-center mt-5">
          <div className="flex flex-col justify-center">
            <div className="flex-col justify-center items-center">
              {activeKey === "Education" ? (
                <div>
                  <Education />
                </div>
              ) : (
                ""
              )}
              {activeKey === "WorkExperience" ? (
                <div>
                  <WorkExperience />
                </div>
              ) : (
                ""
              )}
              {activeKey === "Projects" ? (
                <div>
                  <Projects />
                </div>
              ) : (
                ""
              )}
              {activeKey === "Skills" ? (
                <div>
                  <Skills />
                </div>
              ) : (
                ""
              )}
              {activeKey === "Interest" ? (
                <div>
                  <Interest />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}