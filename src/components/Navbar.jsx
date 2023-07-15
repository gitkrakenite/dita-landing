import { useState } from "react";

// import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "../assets/dita.png";

const Navbar = () => {
  const [toggle, setToggle] = useState("");
  return (
    <div>
      {/* desktop navbar */}
      <div
        className=" hidden xl:block py-[14px] top-0 left-0 fixed w-full px-[2em]  xl:px-[5em] "
        style={{
          background: "rgba(12, 7, 7, 0.9)",
          backdropFilter: "blur(4px)",
          zIndex: 2,
        }}
      >
        {/* desktop navbar */}
        <div className="flex justify-between items-center">
          <div>
            <a href="#home">
              <img src={Image} alt="" className="w-[100px]" />
            </a>
          </div>
          <div>
            <ul className="flex gap-[40px] text-white text-sm">
              <li>
                <a href="#home" className="hover:text-[#02AEEE]  no-underline">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Projects
                </a>
              </li>
              {/* <li>
                <a
                  href="#testimonial"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Testimonials
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {!toggle && (
        <div
          className="xl:hidden h-[8vh] top-0 left-0 flex justify-between items-center w-full fixed px-[1em] py-[1em]"
          style={{
            background: "rgba(12, 7, 7, 0.9)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          <div>
            <a href="#home">
              <img src={Image} alt="" className="w-[100px]" />
            </a>
          </div>
          <div>
            <AiOutlineMenu
              className="text-3xl cursor-pointer text-white"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      )}

      {toggle && (
        <div
          className="xl:hidden h-[100vh] top-0 left-0  w-full fixed px-[1em]"
          style={{
            background: "rgba(12, 7, 7, 0.6)",
            backdropFilter: "blur(3px)",
            zIndex: 2,
          }}
        >
          <div className="flex justify-between items-center pt-[10px]">
            <div>
              <a href="#home">
                <img src={Image} alt="" className="w-[100px]" />
              </a>
            </div>
            <div>
              <AiOutlineClose
                className="text-4xl cursor-pointer text-white"
                onClick={() => setToggle(false)}
              />
            </div>
          </div>
          {/* links */}
          <div className="pt-[1em]">
            <ul className="flex flex-col gap-[40px] text-end text-white text-sm">
              <li className="" onClick={() => setToggle(false)}>
                <a href="#home" className="hover:text-[#02AEEE]  no-underline">
                  Home
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#about"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  About
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#events"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Events
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#services"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Services
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#projects"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Projects
                </a>
              </li>
              {/* <li onClick={() => setToggle(false)}>
                <a
                  href="#testimonial"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Testimonials
                </a>
              </li> */}
              <li onClick={() => setToggle(false)}>
                <a
                  href="#contact"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Navbar;
