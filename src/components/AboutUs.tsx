import React from "react";

const AboutUs = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center text-4xl font-bold mt-[10vw]">
          <span className="border-b-3 border-blue-500">About Me</span>
        </h1>
        <div className="flex mt-10">
          <div className=" hidden md:block md:w-1/2 ">profile image</div>
          <div className="md:w-1/2  p-5">
            <h1 className="sm:text-2xl text-xl font-bold p-5 sm:pr-11">
              Frontend Software Engineer in <span className="text-blue-500">Mumbai</span>
            </h1>
            <div className="mb-5 text-gray-500 font-normal">
              I'm Shoaib Akram, a passionate Frontend Software Engineer with expertise in creating responsive and interactive web applications. With a strong foundation in modern JavaScript frameworks and libraries, I specialize in building
              user-friendly interfaces that deliver exceptional user experiences.
            </div>
            <div className="text-gray-500 font-normal">
              My journey in web development began several years ago, and since then, I've worked on various projects ranging from small business websites to complex web applications. I'm constantly learning and adapting to new technologies to stay at
              the forefront of web development trends.
            </div>
            <div className="  flex   p-4">
              <div className="grid grid-cols-2 gap-4 max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <div>
                  <p className="text-gray-600 font-medium">Name:</p>
                  <p className="text-gray-900">Shoaib Akram</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Email:</p>
                  <p className="text-gray-900">shoaibakramdev12@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">From:</p>
                  <p className="text-gray-900">Mumbai</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Experience:</p>
                  <p className="text-gray-900">2+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
