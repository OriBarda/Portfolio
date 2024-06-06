import React from "react";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiMongodb, SiTailwindcss, SiUnity } from "react-icons/si";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PhoneProjectDisplay = () => {
  const projectsData = [
    {
      name: "Gym Website",
      images: [
        `${import.meta.env.VITE_CLOUDINARY}pe9`,
        `${import.meta.env.VITE_CLOUDINARY}pe1`,
        `${import.meta.env.VITE_CLOUDINARY}pe2`,
        `${import.meta.env.VITE_CLOUDINARY}pe3`,
        `${import.meta.env.VITE_CLOUDINARY}pe4`,
        `${import.meta.env.VITE_CLOUDINARY}pe6`,
        `${import.meta.env.VITE_CLOUDINARY}pe7`,
        `${import.meta.env.VITE_CLOUDINARY}pe8`,
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
        `${import.meta.env.VITE_CLOUDINARY}cv1`,
        `${import.meta.env.VITE_CLOUDINARY}cv2`,
        `${import.meta.env.VITE_CLOUDINARY}cv3`,
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
        `${import.meta.env.VITE_CLOUDINARY}abs1`,
        `${import.meta.env.VITE_CLOUDINARY}abs2`,
        `${import.meta.env.VITE_CLOUDINARY}abs3`,
        `${import.meta.env.VITE_CLOUDINARY}abs4`,
      ],
      style: ["text-emerald-400", "bg-emerald-500"],
      icons: [
        { icon: <SiCsharp />, style: "text-gray-400" },
        { icon: <SiUnity />, style: "text-gray-500" },
        { icon: <FaDatabase />, style: "text-gray-300" },
      ],
    },
  ];

  return (
    <div className="h-fit bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="min-h-screen"
      >
        {projectsData.map((project, projectIndex) => (
          <SwiperSlide key={projectIndex}>
            <div className="rounded-lg overflow-x-hidden shadow-lg p-6 bg-gradient-to-tr from-gray-900 via-gray-900 to-emerald-950">
              <h2
                className={`text-3xl font-bold ${project.style[0]} mb-4 text-center`}
              >
                {project.name}
                <div className="flex justify-center mt-4">
                  {project.icons.map((iconData, iconIndex) => (
                    <span
                      key={iconIndex}
                      className={`text-4xl mx-2 ${iconData.style}`}
                    >
                      {iconData.icon}
                    </span>
                  ))}
                </div>
              </h2>
              <Swiper
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                className="rounded-lg overflow-hidden mb-4 sm:h-fit h-screen"
              >
                {project.images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <img
                      className="w-[90vw] md:h-[90vh] h-fit object-cover rounded-lg"
                      src={image}
                      alt={`${project.name} ${imageIndex + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhoneProjectDisplay;
