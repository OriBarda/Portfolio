import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeButton, setActiveButton] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    console.log("Button clicked:", button);
  };

  console.log("Active Button:", activeButton);

  return (
    <>
      <div
        className={`fixed pr-14 flex justify-evenly items-center z-[1000] ${
          isMobile
            ? "bottom-0 bg-gray-900 flex-row w-screen h-20"
            : "right-0 flex-col w-20 h-screen py-32"
        }`}
      >
        <Link to={"/"}>
          <button
            className={`rounded-full shadow-emerald-300 hover:bg-emerald-300 transition-all ease-in-out ${
              activeButton === 1 ? "bg-emerald-500" : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            <div
              className={`size-14 bg-gray-700 p-2 flex items-center justify-center rounded-full active:bg-emerald-500 hover:bg-emerald-400 transition-all ease-in-out`}
            >
              <FaHome className="text-white size-5" />
            </div>
          </button>
        </Link>
        <Link to={"/about"}>
          <button
            className={`rounded-full shadow-emerald-300 hover:bg-emerald-300 transition-all ease-in-out ${
              activeButton === 2 ? "bg-emerald-500" : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <div
              className={`size-14 bg-gray-700 p-2 flex items-center justify-center rounded-full active:bg-emerald-500 hover:bg-emerald-400 transition-all ease-in-out`}
            >
              <FaUser className="text-white size-5" />
            </div>
          </button>
        </Link>
        <Link to={"/projects"}>
          <button
            className={`rounded-full shadow-emerald-300 hover:bg-emerald-300 transition-all ease-in-out ${
              activeButton === 3 ? "bg-emerald-500" : ""
            }`}
            onClick={() => handleButtonClick(3)}
          >
            <div
              className={`size-14 bg-gray-700 p-2 flex items-center justify-center rounded-full active:bg-emerald-500 hover:bg-emerald-400 transition-all ease-in-out`}
            >
              <FaProjectDiagram className="text-white size-5" />
            </div>
          </button>
        </Link>
        <Link to={"/contact"}>
          <button
            className={`rounded-full shadow-emerald-300 hover:bg-emerald-300 transition-all ease-in-out ${
              activeButton === 4 ? "bg-emerald-500" : ""
            }`}
            onClick={() => handleButtonClick(4)}
          >
            <div
              className={`size-14 bg-gray-700 p-2 flex items-center justify-center rounded-full active:bg-emerald-500 hover:bg-emerald-400 transition-all ease-in-out`}
            >
              <FaEnvelope className="text-white size-5" />
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
