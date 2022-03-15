import React from "react";

export default function Interest() {
  const interest = [
    { Hobby: "Cooking" },
    { Hobby: "Painting" },
    { Hobby: "Travelling" },
  ];

  return (
    <div className="p-16">
      {interest.map((data) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row space-x-3">
              <div className="flex justify-center items-center"><div className="w-3 h-3 bg-orange-600 rounded-full"></div></div>
              <div className="p-2">{data.Hobby}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
