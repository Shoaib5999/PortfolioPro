import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "./Card";
const Hero = () => {
  const handleScrollToSection = ({ section }) => {
    const contactSection = document.getElementById(section);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="bg-[rgb(245,252,247)] flex flex-col p-3 md:p-10 bg-gradient-to-r from-blue-100 to-white min-h-screen">
        <div className="mt-20">
          <div>
            <p className="text-2xl text-blue-500">
              <span className="inline-block md:w-10 h-1 bg-blue-500 mr-2 align-middle"></span>
              Frontend Software Engineer
            </p>
          </div>
          <div className="w-full flex p-3 md:p-10">
            <div className="md:w-1/2">
              <div>
                <h1 className="font-bold text-3xl mt-5 mb-5 md:text-5xl ">
                  Hi, I'm <span className="text-[rgb(0,112,243)]">Shoaib Akram</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
                  I build exceptional and accessible digital experiences for the web and apps . Focused on creating clean, user-friendly interfaces with modern technologies.
                </p>
              </div>
            </div>
            <div className="hidden md:block   md:w-1/2">
              <Card />
            </div>
          </div>
        </div>
        <div className="ml-3 mt-3">
          <button className="rounded-md bg-[rgb(0,113,243)] p-2 text-white cursor-pointer mr-2 hover:bg-[rgb(0,130,300)]" onClick={() => handleScrollToSection({ section: "projects" })}>
            <ArrowForwardIcon className="" />
            View My Work
          </button>
          <button className="rounded-md bg-transparent border-1  p-2 text-black border-gray-500 hover:border-[rgb(0,130,300)] hover:text-[rgb(0,130,300)] hover:bg-white cursor-pointer " onClick={() => handleScrollToSection({ section: "contact" })}>
            Get In Touch
          </button>
        </div>
        <div className="p-5 pt-5 text-gray-500 ">
          <GitHubIcon className="hover:text-[rgb(0,113,243)] hover:cursor-pointer mr-3" />
          <InstagramIcon className="mr-3 hover:text-[rgb(0,113,243)] hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Hero;
