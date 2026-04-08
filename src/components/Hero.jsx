import React, { useState } from "react";
import profilepic from "../assets/photo.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";


const Hero = () => {

  const [language, setLanguage] = useState("es");

  return (
    <section
    id="home" 
    className="min-h-screen flex items-center justify-center relative pt-20"
    >

        <div className="text-center z-10 px-4">
            <div className="text-center">
                <motion.img 
                    src={profilepic}
                    className="mt-8 mx-auto w-[130px] md:w-[170px] rounded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>

            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Desarrollador Fullstack | Software Engineer",
                        3000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-4xl italic- mb-4 mt-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-5xl text-5xl tracking-tight mb-4"
                >
                    Mi nombre es <br/>
                    <span className="text-5xl md:text-7x1 font-bold mb-6 mt-6 gradient-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Andres Felipe Diaz Gonzalez
                    </span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-center leading-relaxed"
                >
                    Ingeniero de Software especializado en desarrollo backend y arquitectura de aplicaciones web. 
                    Construyo APIs escalables y soluciones robustas utilizando Node.js, Spring Boot y bases de datos relacionales y NoSQL.
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-center leading-relaxed"
                >
                    Abierto a oportunidades como Backend Developer Junior o Full Stack Developer.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 my-4 md:mb-0 w-full"
                >

                    {/* SWITCH + DOWNLOAD CV */}
                    <div className="flex flex-col items-center gap-3">

                        {/* Switch */}
                        <div className="flex items-center gap-3 bg-gray-800 p-1 rounded-full border border-blue-500/30">
                            
                            <button
                                onClick={() => setLanguage("es")}
                                className={`px-4 py-1 rounded-full text-sm transition-all ${
                                language === "es"
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-400"
                                }`}
                            >
                                ES
                            </button>

                            <button
                                onClick={() => setLanguage("en")}
                                className={`px-4 py-1 rounded-full text-sm transition-all ${
                                language === "en"
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-400"
                                }`}
                            >
                                EN
                            </button>

                        </div>

                        {/* Download Button */}
                        <a 
                            href={
                                language === "es"
                                ? "https://drive.google.com/file/d/1om3j8DDYOuaj7FkR0lKo2NKXsKVuXGAz/view?usp=drive_link"
                                : "https://drive.google.com/file/d/1srl4V0bJ95r7ovw7_IeZE64wBRg2SB_W/view?usp=drive_link"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                                            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                            >
                                {language === "es" ? "Descargar CV" : "Download Resume"}
                            </motion.button>
                        </a>

                    </div>

                    <div className="flex justify-center items-center gap-6 text-4xl md:text-6xl text-blue-500 z-20">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href={import.meta.env.VITE_GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineGithub />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href={import.meta.env.VITE_LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineLinkedin />
                        </motion.a>

                        {/* <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineInstagram />
                        </motion.a> */}
                    </div>
                </motion.div>
            </motion.div>
        </div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
    </section>
  )
}

export default Hero