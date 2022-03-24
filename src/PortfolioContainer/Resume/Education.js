import { data } from "autoprefixer";
import React from "react";

export default function Education() {
  const education = [
    {
      board: "Higher Secondary",
      details: "73.84%",
      year: "2015",
      place: "Shree Saraswati Vidhyalaya",
    },
    {
      board: "Bachelor of Engineering - Computer",
      details: "CGPA : 7.83",
      year: "2019",
      place: "Shree Swami Aatmanand Saraswati institute of Technology",
    },
  ];
  return (
    <div>
      {education.map((data) => {
        return (
          <div>
            <div className="md:block hidden p-5">
              <div className="text-lg font-semibold">{data.place}</div>
              <div className="flex flex-row justify-between items-center">
                <div classname="flex justify-start items-center text-lg">
                  {data.board}
                </div>
                <div classname="flex justify-start items-center text-lg">
                  <div className="w-20 h-8 flex justify-center items-center bg-orange-500 p-2 rounded-full">{data.year}</div>
                </div>
              </div>
              <div classname="flex justify-center items-center text-lg">
                {data.details}
              </div>
            </div>
            <div className="md:hidden block p-3">
              <div classname="flex justify-start items-center text-sm">
                {data.place}
              </div>
              <div classname="flex justify-start items-center text-sm">
                {data.board}
              </div>
              <div classname="flex justify-start items-center text-sm">
                {data.details}
              </div>
              <div classname="flex justify-start items-center text-sm">
                {data.year}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
