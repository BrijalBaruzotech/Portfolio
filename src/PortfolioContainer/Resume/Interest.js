import React from "react";

export default function Interest() {
  const interest = [
    { Hobby: "Cooking" },
    { Hobby: "Painting" },
    { Hobby: "Travelling" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {interest.map((data) => {
        return (
          <div className="flex flex-col justify-center items-center p-3">
            <div className="grid grid-cols-2">
              <div className="flex w-24 h-6 justify-center items-center "><div className="w-3 h-3 bg-orange-600 rounded-full"></div></div>
              <div className="flex w-12 h-6 justify-center items-center ">{data.Hobby}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
