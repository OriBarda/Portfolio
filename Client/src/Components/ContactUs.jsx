import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserGraduate,
  FaGlobeAfrica,
} from "react-icons/fa";
import { motion } from "framer-motion";
function ContactUs() {
  return (
    <>
      <section
        className="flex flex-col justify-center h-screen w-screen"
        id="contact"
      >
        <motion.h2
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          transition={{ duration: 2, type: "spring", bounce: 0.5 }}
          className="relative text-center text-6xl text-emerald-500"
        >
          Contact <span className="text-white">Me</span>
          <span className="absolute left-1/2 text-9xl z-0 opacity-10 transform -translate-x-1/2 -top-12">
            Contact
          </span>
        </motion.h2>
        <div className="flex md:flex-row flex-col flex-wrap items-center justify-center sm:px-20 px-0">
          <div className="flex md:flex-row flex-col flex-wrap justify-center w-full">
            <div className="p-6">
              <motion.h4 className="text-4xl font-bold text-center">
                Contact me here
              </motion.h4>
              <div className="space-y-2">
                <div className="contact-item flex items-center flex-wrap sm:justify-normal justify-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaMapMarkerAlt className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Location:</span>Or Akiva,
                    Israel
                  </motion.p>
                </div>
                <div className="contact-item flex items-center flex-wrap sm:justify-normal justify-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaEnvelope className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Email:</span>
                    oribarda10@gmail.com
                  </motion.p>
                </div>
                <div className="contact-item flex items-center flex-wrap sm:justify-normal justify-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaUserGraduate className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Studies:</span>CyberPro
                    Ramat Gan
                  </motion.p>
                </div>
                <div className="contact-item flex items-center flex-wrap sm:justify-normal justify-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaGlobeAfrica className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Languages:</span>Hebrew,
                    English
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
