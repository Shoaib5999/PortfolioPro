import React from "react";
import ProgressBar from "../components/ProgressBar";

const skillList = [
  { skill: "HTML/CSS", percent: 95, category: "frontend" },
  //   { skill: "CSS", percent: 90, category: "frontend" },
  { skill: "JavaScript", percent: 92, category: "frontend" },
  { skill: "React", percent: 88, category: "frontend" },
  { skill: "Tailwind CSS", percent: 85, category: "frontend" },
  { skill: "Redux", percent: 80, category: "frontend" },
  { skill: "Responsive Design", percent: 87, category: "frontend" },
  { skill: "Node.js", percent: 90, category: "backend" },
  { skill: "Express.js", percent: 87, category: "backend" },
  { skill: "MongoDB", percent: 85, category: "backend" },
  //   { skill: "Mongoose", percent: 80, category: "backend" },
  { skill: "RESTful APIs", percent: 88, category: "backend" },
  //   { skill: "Backend Security", percent: 75, category: "backend" },
  //   { skill: "Authentication (JWT)", percent: 82, category: "backend" },
];
const technologiesWorkedWith = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Redux", "Bootstrap", "TypeScript", "RESTful APIs", "GraphQL", "Webpack", "Git", "Docker", "JWT", "Postman", "NPM"];

const Skills = () => {
  return (
    <>
      <div className="skills" id="skills">
        <h1 className="flex justify-center text-4xl font-bold mt-[10vw]">
          <span className="border-b-3 border-blue-500">Skills</span>
        </h1>
        <p className="flex text-gray-500 font-normal justify-center mt-6 p-5">I've worked with a variety of technologies in the web development world. Here are my main areas of expertise and the technologies I use.</p>
        <div className="grid sm:grid-cols-2 ">
          {skillList.map((s) => (
            <ProgressBar skill={s?.skill} percent={s?.percent} />
          ))}
        </div>
        <h1 className="font-bold text-2xl my-10 flex justify-center">Technologies I've worked with</h1>
        <div className="flex flex-wrap justify-center items-center mx-10 my-15">
          {technologiesWorkedWith.map((t) => (
            <span className="h-10 bg-gray-100 rounded-4xl p-2 mx-2 my-2 sm:p-4 sm:mx-4 sm:my-2 flex items-center justify-center text-gray-500">{t}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
