import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { FaSuitcase, FaBomb } from "react-icons/fa";
import moment from "moment";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSecondSectionVisible, setSecondSectionVisible] = useState(false);
  const secondSectionRef = useRef(null);

  const SkillCard = ({ name, percentage, description }) => {
    const [isFlipped, setFlipped] = useState(false);

    return (
      <motion.div
        className={`skill-card-container ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div className="skill-card cursor-none">
          <motion.div className="front">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <div className="progress-bar">
              <motion.div
                className="progress"
                style={{ width: `${percentage}%` }}
              ></motion.div>
            </div>
            <p className="text-sm mt-2">{percentage}% proficiency</p>
          </motion.div>
          <motion.div className="back">
            <p className="text-sm">{description}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const skillsData = [
    {
      name: "Python",
      percentage: 70,
      description:
        "Python is a high-level, interpreted programming language known for its simplicity and readability.",
    },
    {
      name: "React.js",
      percentage: 75,
      description:
        "React is a JavaScript library for building user interfaces or UI components.",
    },
    {
      name: "TypeScript",
      percentage: 70,
      description:
        "TypeScript is a typed extension of JavaScript that compiles to plain JS, offering static typing to catch errors early and enhance code quality and maintainability.",
    },
    {
      name: "C#",
      percentage: 40,
      description:
        "Versatile high-level programming language for efficient desktop, web, and mobile applications.",
    },
    {
      name: "Node.js",
      percentage: 80,
      description:
        "Node.js is a runtime environment that executes JavaScript code outside the web browser.",
    },
    {
      name: "SQL",
      percentage: 85,
      description:
        "Powerful relational database management system widely used for managing data in corporate information systems and for web applications.",
    },
    {
      name: "MongoDB",
      percentage: 95,
      description:
        "MongoDB is a flexible and scalable NoSQL database widely used for modern web applications, offering a JSON-like document-oriented data model.",
    },
    {
      name: "Unity",
      percentage: 30,
      description:
        "Leading game development framework for creating innovative games, simulations, and virtual reality experiences with a user-friendly interface.",
    },
    {
      name: "PHP",
      percentage: 55,
      description:
        "Server-side scripting language designed for web development, supporting dynamic content generation and facilitating interaction with databases.",
    },
  ];

  const timelineData = [
    {
      icon: FaBomb,
      duration: "2020 - 2024",
      title: "IDF Combat engineer.",
      company: "601/603 Battalion.",
      description:
        "In my service, I was a Sergeant in the 603 battalion where I commanded over 30 soldiers.",
    },
    {
      icon: FaSuitcase,
      duration: "2023 - 2024",
      title: "Full-Stack course.",
      company: "CyberPro.",
      description:
        "During my service, I started a Full-Stack course at CyberPro with more than 700 academic hours.",
    },
    {
      icon: FaSuitcase,
      duration: "2024 - Current",
      title: "Full-Stack Developer.",
      company: "BSW Group.",
      description:
        "At BSW Group, I am currently serving as a Full-Stack Developer, contributing to the development and maintenance of web applications. My role involves designing and implementing both front-end and back-end components, ensuring seamless integration and optimal performance. With a focus on using modern technologies and frameworks, I collaborate closely with cross-functional teams to deliver innovative solutions that meet business requirements and drive user engagement.",
    },
  ];

  const currentDate = moment();

  const targetDate = moment("2024-03", "YYYY-MM");

  const years = targetDate.diff(currentDate, "years");
  const months = targetDate.diff(currentDate, "months") - years * 12;

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

  return (
    <>
      <motion.section
        className={`w-screen min-h-screen flex flex-col justify-center items-center transition-opacity duration-300 bg-gray-900 p-12 sm:py-16 `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <header className="text-6xl font-extrabold text-white opacity-15 absolute">
            About <span className="text-emerald-500 font-light">Me</span>
          </header>
          <header className="text-6xl font-extrabold text-white py-12 ">
            About <span className="text-emerald-500 font-light">Me</span>
          </header>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="text-gray-300 w-[500px] text-2xl p-4 m-3">
            <header className="font-extrabold text-4xl">
              Information about me
            </header>
            <motion.p
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring", bounce: 0.4 }}
              className="font-extralight"
            >
              After my service as a Combat Engineer, I pivoted to become a Full
              Stack Developer, starting with the "Lohamim Le Hightech" course
              which laid the groundwork for my career shift. This intensive
              five-month program, despite my lack of prior development
              experience, provided me with crucial skills and an advantage in
              the field. Securing a position at BSW Group as a Full Stack
              Developer, I've since been able to apply and expand my skills in
              technologies like TypeScript, React, SQL, and PHP. This role has
              offered me the opportunity to grow professionally, contributing to
              the development of web applications and enhancing my capabilities
              in a dynamic environment.
            </motion.p>
          </div>
          <div className="xl:grid xl:grid-cols-2 xl:grid-rows-2 gap-8 flex flex-col items-center justify-center">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -30 }}
              transition={{ duration: 0.2 }}
              className="w-60 h-64 rounded-lg border-gray-800 border-2 bg-transparent hover:drop-shadow-2xl hover:-translate-y-2 shadow-emerald-300 hover:border-emerald-600 transition-all ease-in-out duration-700 flex flex-col justify-start items-start p-6"
            >
              <motion.header
                className="font-extrabold text-6xl text-emerald-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                700+
              </motion.header>
              <p className="text-3xl text-gray-400">Academic Hours</p>
            </motion.div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              whileHover={{ y: -30 }}
              transition={{ duration: 0.2 }}
              className="w-60 h-64 rounded-lg border-gray-800 border-2 bg-transparent hover:drop-shadow-2xl hover:-translate-y-2 shadow-emerald-300 hover:border-emerald-600 transition-all ease-in-out duration-700 flex flex-col justify-start items-start p-6"
            >
              <motion.header
                className="font-extrabold text-6xl text-emerald-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {years == 0 ? `${-months} Month` : `${years} Years`}
              </motion.header>
              <p className="text-3xl text-gray-400">Work Experience</p>
            </motion.div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              whileHover={{ y: -30 }}
              transition={{ duration: 0.2 }}
              className="w-60 h-64 rounded-lg border-gray-800 border-2 bg-transparent hover:drop-shadow-2xl hover:-translate-y-2 shadow-emerald-300 hover:border-emerald-600 transition-all ease-in-out duration-700 flex flex-col justify-start items-start p-6"
            >
              <motion.header
                className="font-extrabold text-6xl text-emerald-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                10+
              </motion.header>
              <p className="text-3xl text-gray-400">
                Front And Full-Stack Projects
              </p>
            </motion.div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              whileHover={{ y: -30 }}
              transition={{ duration: 0.2 }}
              className="w-60 h-64 rounded-lg border-gray-800 border-2 bg-transparent hover:drop-shadow-2xl hover:-translate-y-2 shadow-emerald-300 hover:border-emerald-600 transition-all ease-in-out duration-700 flex flex-col justify-start items-start p-6"
            >
              <motion.header
                className="font-extrabold text-6xl text-emerald-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                1000+
              </motion.header>
              <p className="text-3xl text-gray-400">Home Study hours</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="min-h-screen bg-gray-900 flex flex-col items-center justify-center w-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="w-72 h-1 bg-gray-600 my-8" />
        <motion.h1
          className="text-6xl text-emerald-500 font-extralight mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <span className="text-white">My</span> Skills
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              description={skill.description}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="w-72 h-1 bg-gray-800 my-8" />
        <motion.h4
          className="text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          My <span className="font-light text-emerald-500">Timeline</span>
        </motion.h4>
        <div className="grid lg:grid-cols-2 grid-cols-1 p-4">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="flex p-4 md:flex-row flex-col"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="size-16 bg-emerald-500 rounded-full m-3 flex items-center justify-center">
                <div>
                  <item.icon size={32} color="white" />
                </div>
              </div>
              <div className="flex flex-col items-start pl-4">
                <p className="bg-gray-700 w-fit px-2 py-[0.5px] rounded-full font-extralight">
                  {item.duration}
                </p>
                <h5 className="font-extrabold text-xl">
                  {item.title}
                  <span className="font-light"> - {item.company}</span>
                </h5>
                <p className="w-96">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
