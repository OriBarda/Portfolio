import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";
import image from "../assets/me.jpg";
import { FaDownload } from "react-icons/fa";
import CV from "../assets/MyCV.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSecondSectionVisible, setSecondSectionVisible] = useState(false);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSecondSectionVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  const mountStyle = {
    borderBottomWidth: `${scrollY * 0.5}px`,
  };

  const contentStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  const headerStyle = {
    transform: `translateX(-${scrollY * 0.1}px)`,
  };

  return (
    <>
      <motion.section
        className="flex md:flex-row flex-col items-center justify-evenly h-screen p-10 relative overflow-hidden text-gray-200 bg-gray-900"
        ref={secondSectionRef}
      >
        <motion.div
          className="absolute w-0 h-0 
          border-t-[640px] border-t-transparent
          border-l-[715px] border-l-green-500
          border-b-[720px] border-b-transparent bottom-0 left-0"
          style={mountStyle}
        />
        <motion.div
          className="relative z-50 flex w-full justify-evenly"
          style={contentStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="max-w-lg text-left relative z-10">
            <motion.h2
              className="text-4xl font-extralight mb-4"
              style={headerStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hey, I'm{" "}
              <span className="text-emerald-500 font-bold">Ori Barda</span>
            </motion.h2>
            <motion.p
              className="text-5xl font-bold mb-6"
              style={headerStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full-stack developer creating seamless web experiences.
            </motion.p>
            <motion.div
              className="button-container space-x-4 mb-8 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button
                className="custom-button rounded-full duration-700 transform transition-all ease-in-out px-4 py-2 bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none pr-16 font-bold text-lg tracking-widest"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={CV}
                  download="CV-pdf-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </Link>
                <span className="size-12 bg-emerald-600 absolute top-0 right-0 rounded-full flex justify-center items-center">
                  <FaDownload className="" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.img
            className="bubble transition-transform duration-300 transform hover:rotate-12 h-96 w-80"
            src={image}
            alt="Profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;
