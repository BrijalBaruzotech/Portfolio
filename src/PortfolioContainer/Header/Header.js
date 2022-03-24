import React, { useState } from "react";
import { Link } from "react-scroll";
import NavbarIcon from "../../Images/Navbar.png";
import CancelIcon from "../../Images/Cancel.png";

export default function Header() {
  const [menuactive, setMenu] = useState("Home");
  const [open, setOpen] = useState(false);

  const menuSelect = () => {
    setMenu();

    console.log("INDEX :");
  };

  const response = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        {open === true ? (
          <>
            <div className="md:hidden block flex-col fixed w-full h-64 justify-center items-center">
              <div className="flex justify-end bg-slate-200 p-3">
                <img
                  src={CancelIcon}
                  alt="cancel"
                  width={"20px"}
                  height={"20px"}
                  onClick={response}
                ></img>
              </div>
              <div className="flex flex-col w-full justify-center items-center">
                <div className="w-full bg-slate-200">
                  <Link to="home" spy={true} smooth={true}>
                    <div className="text-navtBlue text-xl flex justify-center items-center p-1">
                      Home
                    </div>
                  </Link>
                </div>
                <div className="w-full bg-slate-200">
                  <Link to="aboutMe" spy={true} smooth={true}>
                    <div className="w-full text-navtBlue text-xl flex justify-center items-center p-1">
                      AboutMe
                    </div>
                  </Link>
                </div>
                <div className="w-full bg-slate-200">
                  <Link to="resume" spy={true} smooth={true}>
                    <div className="w-full text-navtBlue text-xl flex justify-center items-center p-1">
                      Resume
                    </div>
                  </Link>
                </div>
                <div className="w-full bg-slate-200">
                  <Link to="contactMe" spy={true} smooth={true}>
                    <div className="w-full text-navtBlue text-xl flex justify-center items-center p-1">
                      ContactMe
                    </div>
                  </Link>
                </div>
                <div className="w-full bg-slate-200">
                  <Link to="testimonial" spy={true} smooth={true}>
                    <div className="w-full text-navtBlue text-xl flex justify-center items-center p-1">
                      Testimonial
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="md:block hidden w-full bg-navyBlue ">
          <div className="flex justify-center items-center">
            <div className="w-3/5 h-36 flex justify-between space-x-2 items-center">
              <div className="text-6xl font-bold text-white text-justify items-center">
                Ehizeex ~
              </div>
              <div className="flex justify-between items-center space-x-8">
                <Link to="home" spy={false} smooth={false}>
                  <button className="text-white text-xl">Home</button>
                </Link>
                <Link to="aboutMe" spy={true} smooth={true}>
                  <button className="text-white text-xl">AboutMe</button>
                </Link>
                <Link to="resume" spy={true} smooth={true}>
                  <button className="text-white text-xl">Resume</button>
                </Link>
                <Link to="contactMe" spy={true} smooth={true}>
                  <button className="text-white text-xl">ContactMe</button>
                </Link>
                <Link to="testimonial" spy={true} smooth={true}>
                  <button className="text-white text-xl">Testimonial</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block bg-navyBlue">
          <div className="w-full flex justify-between items-center pt-10 px-8">
            <div className="text-2xl font-bold text-white text-justify items-center">
              Ehizeex ~
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