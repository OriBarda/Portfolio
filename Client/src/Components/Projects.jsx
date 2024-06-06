import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiCsharp, SiUnity, SiMongodb } from "react-icons/si";

function ProjectsCarousel() {
  const projectsData = [
    {
      name: "Gym Website",
      images: [
        ` ${import.meta.env.VITE_CLOUDINARY}pe9`,
        ` ${import.meta.env.VITE_CLOUDINARY}pe1`,
        ` ${import.meta.env.VITE_CLOUDINARY}pe2`,
        ` ${import.meta.env.VITE_CLOUDINARY}pe3`,
        ` ${import.meta.env.VITE_CLOUDINARY}pe4`,
        ` ${import.meta.env.VITE_CLOUDINARY}pe6`,
        ` ${import.meta.env.VITE_CLOUDINARY}pe7`,
        ` ${import.meta.env.VITE_CLOUDINARY}pe8`,
      ],
      style: ["text-orange-500", "bg-orange-500"],
      icons: [
        { icon: <FaReact />, style: "text-sky-600" },
        { icon: <FaNodeJs />, style: "text-green-600" },
        { icon: <SiMongodb />, style: "text-green-500" },
        { icon: <SiTailwindcss />, style: "text-sky-300" },
      ],
    },
    {
      name: "CV Maker",
      images: [
        ` ${import.meta.env.VITE_CLOUDINARY}cv1`,
        ` ${import.meta.env.VITE_CLOUDINARY}cv2`,
        ` ${import.meta.env.VITE_CLOUDINARY}cv3`,
      ],
      style: ["text-rose-500", "bg-rose-500"],
      icons: [
        { icon: <FaReact />, style: "text-sky-600" },
        { icon: <FaNodeJs />, style: "text-green-600" },
        { icon: <SiMongodb />, style: "text-green-500" },
        { icon: <SiTailwindcss />, style: "text-sky-300" },
      ],
    },
    {
      name: "Zombie Fighter Game",
      images: [
        ` ${import.meta.env.VITE_CLOUDINARY}abs1`,
        ` ${import.meta.env.VITE_CLOUDINARY}abs2`,
        ` ${import.meta.env.VITE_CLOUDINARY}abs3`,
        ` ${import.meta.env.VITE_CLOUDINARY}abs4`,
      ],
      style: ["text-emerald-400", "bg-emerald-500"],
      icons: [
        { icon: <SiCsharp />, style: "text-gray-400" },
        { icon: <SiUnity />, style: `text-gray-500` },
        { icon: <FaDatabase />, style: "text-gray-300" },
      ],
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentProjectImage, setCurrentProjectImage] = useState(0);

  const nextSlide = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentProjectImage(0);
  };

  const prevSlide = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
    setCurrentProjectImage(0);
  };

  return (
    <div className="overflow-hidden flex justify-center pt-8">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-2/3 transform -translate-y-1/2 text-emerald-400 hover:text-emerald-200 transition-all ease-in-out ml-4 hover:bg-white hover:bg-opacity-10 text-6xl font-bold bg-transparent rounded-full shadow-md z-[500]"
      >
        <IoIosArrowDown />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-0 top-1/3 transform -translate-y-1/2 text-emerald-400 hover:text-emerald-200 transition-all ease-in-out ml-4 hover:bg-white hover:bg-opacity-10 text-6xl font-bold bg-transparent rounded-full shadow-md z-[500]"
      >
        <IoIosArrowUp />
      </button>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 sm:space-y-0 space-y-12 ${
            index === currentProjectIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="group sm:flex-row flex-col relative w-full h-full flex items-center justify-center">
            <img
              src={project.images[currentProjectImage]}
              alt={project.name}
              className="w-[95vw] h-[95vh] mb-4 rounded-lg"
            />
            <div className="sm:absolute inset-0 z-50 w-full h-full flex items-center justify-center flex-col sm:bg-black bg-transparent sm:bg-opacity-0 sm:group-hover:bg-opacity-60 text-white transition-all ease-in-out duration-500 sm:opacity-0 sm:group-hover:opacity-100">
              <div className="flex flex-col items-center sm:px-20 px-10 text-center h-full justify-evenly py-20">
                <h3
                  className={`text-4xl font-bold uppercase ${project.style[0]}`}
                >
                  {project.name}{" "}
                  <div className={`w-full h-1 ${project.style[1]}`} />
                </h3>
                <div className="flex space-x-4 justify-center mt-2">
                  {project.icons.map((icon, i) => {
                    return (
                      <div className={`text-4xl ${icon.style} `} key={i}>
                        {icon.icon}
                      </div>
                    );
                  })}
                </div>
                <div className="overflow-x-scroll overflow-y-hidden sm:img_scroller max-w-screen">
                  <div className="img_scroller flex flex-row items-center justify-evenly">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        onClick={() => setCurrentProjectImage(index)}
                        className={`h-[20vh] cursor-pointer border-[4px] mx-2 rounded-lg hover:border-emerald-500 transition-all ease-in-out ${
                          index === currentProjectImage
                            ? "border-emerald-300"
                            : "border-white"
                        }`}
                        src={image}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsCarousel;
