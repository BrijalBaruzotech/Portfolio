import React from "react";
import { headerMenu } from "./Header";
import { useState } from "react";
import CancelIcon from "../../Images/Cancel.png";

export default function ResponsiveView() {
  const [menuactive, setMenu] = useState("Home");
  const [open, setOpen] = useState(false);
  
  const menuSelect = (index) => {
    setMenu(index);
    console.log("INDEX :", index);
  };

  const response = () => {
    setOpen(!open);
  };

  return (
    <div className="md:hidden block flex-col fixed w-72 h-50 justify-center items-center">
      <div className="flex justify-end bg-slate-200">
        <img src={CancelIcon} alt="cancel" onClick={response}></img>
      </div>
      {headerMenu.map((menu) => {
        return (
          <div className="bg-slate-200 border p-2">
            <button
              key={menu.id}
              onClick={() => menuSelect(menu.title)}
              className={`text-lg text-navyBlue backdrop-blur-md ${
                menuactive === menu.title ? "text-red-500 font-medium" : ""
              }`}
            >
              {menu.title}
            </button>
          </div>
        );
      })}
    </div>
  );
}
