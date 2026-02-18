import RevealOnScroll from "../RevealOnScroll";


const About = () => {

    const frontendSkills = [
        "React",
        "JavaScript",
        "Bootsrap",
        "TailwindCSS",
    ];

    const backendSkills = [
        "Node.js",
        "SpringBoot",
        "FastApi",
        "AWS",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "GitHub",
        "nestJs",
    ];

  return (
    <section 
    id="about"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx=-auto px-4"> 
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Sobre Mi

            </h2>
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 mt-4">
                Soy Ingeniero de Software con experiencia en desarrollo full stack, con mayor enfoque en backend y arquitectura de sistemas.
                He trabajado en la construcción de APIs REST, autenticación con JWT, manejo de bases de datos PostgreSQL y MongoDB, y despliegue 
                en entornos cloud. También tengo experiencia en automatización de procesos y administración de plataformas CRM mediante integraciones técnicas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hocer:-transparent -y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                                >
                                {tech}
                              </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hocer:-transparent -y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                                >
                                {tech}
                              </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

                <div className="p-6 rounded-xl border-white/10 border mt-8 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font0-bold mb-4">🏫 Estudios </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Ingenieria de Software </strong> - Universidad Surcolombiana ( 2020 - 2025 )
                        </li>
                        <li>
                            Cursos relevantes: Desarrollo Web, Inteligencia Artificial, SCRUM, DevOps...
                        </li>
                    </ul>
                </div>
                {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font0-bold mb-4">🏫 Experiencia Laboral </h3>
                    <div className="space-y-4 text-gray-300">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Desarrollador Full Stack</strong> - Transvirtur S.A.S ( 02/2025 - 08/2025 )
                        </li>
                        <li>
                            <strong> Especialista en Automatización y Flujos de Integración </strong> - Factech Group sas ( 10/2025 - actualidad... )
                        </li>
                    </ul>
                    </div>
                </div> */}

            </div>
        </RevealOnScroll>
    </section>
  )
}

export default About
