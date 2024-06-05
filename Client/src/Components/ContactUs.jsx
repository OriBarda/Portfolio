import React, { useContext, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserGraduate,
  FaGlobeAfrica,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { messageContext } from "./context";
function ContactUs() {
  const { handleSendMessage } = useContext(messageContext);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(message);
    try {
      await handleSendMessage(message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section
        className="min-h-screen flex justify-center items-center flex-col sm:py-20 py-8"
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
        <div className="flex md:flex-row flex-col items-center justify-center w-screen px-20">
          <div className="flex md:flex-row flex-col  justify-center w-full">
            <div className="left-contact md:w-1/2 p-6">
              <motion.h4 className="text-4xl font-bold">
                Contact me here
              </motion.h4>
              <motion.p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                laborum numquam? Quam excepturi perspiciatis quas quasi.
              </motion.p>
              <div className="contact-info space-y-2">
                <div className="contact-item flex items-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaMapMarkerAlt className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Location:</span>Or Akiva,
                    Israel
                  </motion.p>
                </div>
                <div className="contact-item flex items-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaEnvelope className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Email:</span>
                    oribarda10@gmail.com
                  </motion.p>
                </div>
                <div className="contact-item flex items-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaUserGraduate className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Studies:</span>CyberPro
                    Ramat Gan
                  </motion.p>
                </div>
                <div className="contact-item flex items-center">
                  <div className="size-12 bg-emerald-500 rounded-full flex justify-center items-center m-3">
                    <FaGlobeAfrica className="size-6" />
                  </div>
                  <motion.p className="text-2xl font-light">
                    <span className="font-bold pr-3">Languages:</span>Hebrew,
                    English
                  </motion.p>
                </div>
              </div>
              <div className="contact-icons">
                <motion.div className="contact-icon flex">
                  <a
                    href="www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f mr-2"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter mr-2"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github mr-2"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </motion.div>
              </div>
            </div>
            <div className="right-contact md:w-1/2 p-6">
              <form onSubmit={(e) => sendMessage(e)} className="w-full">
                <div className="flex mb-4 ">
                  <input
                    className="rounded-full outline-none bg-gray-800 px-4 py-3 w-1/2 mr-2"
                    type="text"
                    value={message.name}
                    onChange={(e) =>
                      setMessage({ ...message, name: e.target.value })
                    }
                    required
                    placeholder="YOUR NAME"
                  />
                  <input
                    className="rounded-full outline-none bg-gray-800 px-4 py-3 w-1/2"
                    type="email"
                    value={message.email}
                    onChange={(e) =>
                      setMessage({ ...message, email: e.target.value })
                    }
                    required
                    placeholder="YOUR EMAIL"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="rounded-full outline-none bg-gray-800 px-4 py-3 w-full"
                    type="text"
                    value={message.subject}
                    onChange={(e) =>
                      setMessage({ ...message, subject: e.target.value })
                    }
                    required
                    placeholder="ENTER SUBJECT"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="rounded-3xl w-full outline-none bg-gray-800 px-4 py-3"
                    cols="15"
                    rows="8"
                    value={message.message}
                    onChange={(e) =>
                      setMessage({ ...message, message: e.target.value })
                    }
                    placeholder="Message Here..."
                  />
                </div>
                <button
                  type="submit"
                  className="custom-button rounded-full duration-700 transform transition-all ease-in-out px-4 py-2 bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none pr-16 font-bold text-lg tracking-widest"
                >
                  Send
                  <span className="size-12 bg-emerald-600 absolute top-0 right-0 rounded-full flex justify-center items-center">
                    <FaDownload className="" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
