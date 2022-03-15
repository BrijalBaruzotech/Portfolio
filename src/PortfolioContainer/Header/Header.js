import React, { useState } from "react";
import NavbarIcon from "../../Images/Navbar.png";
import CancelIcon from "../../Images/Cancel.png";

export const headerMenu = [
  { id: 1, title: "Home" },
  { id: 2, title: "AboutMe" },
  { id: 3, title: "Resume" },
  { id: 4, title: "ContactMe" },
  { id: 5, title: "Testimonial" },
];

export default function Header() {
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
    <div>
      <div>
        {open === true ? 
        <>
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
        </>
        : ""}
        <div className="md:block hidden w-full bg-navyBlue ">
          <div className="flex justify-center items-center">
            <div className="w-3/5 h-36 flex justify-between space-x-2 items-center">
              <div className="text-6xl font-bold text-white text-justify items-center">
                EHIZEEX ~
              </div>
              <div className="flex justify-between items-center space-x-8">
                {headerMenu.map((menu) => {
                  return (
                    <button
                      key={menu.id}
                      onClick={() => menuSelect(menu.title)}
                      className={`text-lg text-white ${
                        menuactive === menu.title
                          ? "text-red-500 font-medium"
                          : ""
                      }`}
                    >
                      {menu.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block bg-navyBlue">
          <div className="flex justify-between items-center pt-10 px-8">
            <div className="text-2xl font-bold text-white text-justify items-center">
              EHIZEEX ~
            </div>
            <div>
              {open === false ? (
                <img
                  src={NavbarIcon}
                  alt="navbar"
                  width={"30px"}
                  height={"80px"}
                  onClick={response}
                ></img>
              ) : (
                <img
                  src={NavbarIcon}
                  alt="navbar"
                  width={"40px"}
                  height={"60px"}
                  onClick={response}
                ></img>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
