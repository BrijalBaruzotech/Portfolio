import { data } from "autoprefixer";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Mobile Resctriction on Highways",
      Details: "Ministry : Port and Transport",
    },
    { title: "Search Engine for MSME", Details: "Mobile app for MSME schemes" },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="md:w-580 w-250 flex-col justify-start items-start p-3">
        <div>
          {projects.map((data) => {
            return (
              <div className="flex flex-col text-justify items-start space-y-2">
                <div className="flex flex-row items-start space-y-3">
                  <div className="flex justify-center items-center">{data.title}</div>
                </div>
                <div className="flex justify-center items-center">{data.Details}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
