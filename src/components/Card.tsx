import React from "react";
function Card() {
  return (
    <div className=" p-6 flex justify-center  ">
      <div className="bg-gray-900 text-gray-200 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center bg-gray-800 text-green-400 px-4 py-2 rounded-t-lg">
          <span className="text-green-500">➜</span>
          <span className="ml-2">~ Hello World!</span>
        </div>
        <pre className="p-4 text-sm overflow-x-auto">
          <code>
            <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-cyan-400">name</span>: <span className="text-green-400">'Shoaib Akram'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-cyan-400">skills</span>: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'TypeScript'</span>, <span className="text-green-400">'Tailwind'</span>],
            <br />
            &nbsp;&nbsp;<span className="text-cyan-400">passion</span>: <span className="text-green-400">'Building beautiful UIs'</span>
            <br />
            {"};"}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Card;
