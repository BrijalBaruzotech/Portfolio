import React from "react";

export default function WorkExperience() {
  const workExperience = {
    place: "Baruzotech Private Limited",
    Experience: "Currently Working",
    Designation: "Junior React Devloper",
  };

  return (
    <div>
      <div className="md:block hidden">
        <div className="p-14">
          <div className=" flex flex-col space-y-2">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-row space-x-6">
                <div className="flex justify-center items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <div>{workExperience.place}</div>
              </div>
              <div className="bg-orange-500 rounded-full p-1 text-white text-center text-lg font-semibold">
                {workExperience.Experience}
              </div>
            </div>
            <div>{workExperience.Designation}</div>
          </div>
        </div>
      </div>
      <div className="md:hidden block p-8">
        <div className="p-3 flex flex-col justify-center">
          <div className="flex flex-row space-x-2">
            <div className="flex justify-center items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <div>{workExperience.place}</div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex justify-center items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <div>{workExperience.Designation}</div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex justify-center items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <div>{workExperience.Experience}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
