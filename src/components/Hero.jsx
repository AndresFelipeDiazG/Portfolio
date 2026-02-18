import React from "react";
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
                    <a 
                    href="https://drive.google.com/uc?export=download&id=1B9NmUypInOHpkP832wv9_diAiyekMylG"
                    download="AndresFelipeDiazGonzalezResume(1).pdf"
                    >
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                        Descargar CV
                    </motion.button>
                    </a>

                    <div className="flex justify-center items-center gap-6 text-4xl md:text-6xl text-blue-500 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href={import.meta.env.VITE_GITHUB_URL}>
                            <AiOutlineGithub />
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href={import.meta.env.VITE_LINKEDIN_URL}>
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

// import React from "react";
// import profilepic from "../assets/profpic2.jpg";
// import { TypeAnimation } from "react-type-animation";
// import ShinyEffect from "./ShinyEffect";
// import {
//   AiOutlineGithub,
//   AiOutlineLinkedin,
// } from "react-icons/ai";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative px-4">
//       {/* Imagen de perfil */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//         className="mb-6"
//       >
//         <img src={profilepic} className="mx-auto w-[100px] md:w-[300px] rounded" alt="Perfil" />
//       </motion.div>

//       {/* Contenido de presentación */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       >
//         {/* Animación de texto */}
//         <TypeAnimation
//           sequence={[
//             "Desarrollador Fullstack",
//             1000,
//             "Analista de datos",
//             1000,
//             "DevOps",
//             1000,
//           ]}
//           speed={50}
//           repeat={Infinity}
//           className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
//         />

//         {/* Nombre con efecto de gradiente */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-gray-200 text-5xl md:text-7xl tracking-tight mb-4"
//         >
//           Hola !!, Mi nombre es <br />
//           <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
//             Andres Felipe Diaz
//           </span>
//         </motion.p>

//         {/* Descripción */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 1 }}
//           className="text-gray-400 text-lg mb-8 max-w-lg mx-auto"
//         >
//           Ingeniero de software en formación apasionado por el desarrollo web full stack, la resolución de problemas y el aprendizaje continuo.
//           Me gusta crear soluciones eficientes y escalables, y siempre estoy aprendiendo nuevas tecnologías para mejorar mis habilidades.
//         </motion.p>

//         {/* Botón y redes sociales */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 1.5 }}
//           className="flex flex-col md:flex-row items-center justify-center gap-6"
//         >
//           {/* Botón de descargar CV */}
//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
//             className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
//                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-blue-500/10"
//           >
//             Descargar CV
//           </motion.button>

//           {/* Redes sociales */}
//           <div className="flex justify-center items-center gap-6 text-4xl md:text-6xl text-blue-500">
//             <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/f3lipe22">
//               <AiOutlineGithub />
//             </motion.a>
//             <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/andresfelipediaz22/">
//               <AiOutlineLinkedin />
//             </motion.a>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Efecto brillante */}
//       <div className="absolute inset-0 hidden md:block">
//         <ShinyEffect left={0} top={0} size={1400} />
//       </div>
//     </section>
//   );
// };

// export default Hero;
