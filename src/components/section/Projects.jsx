import RevealOnScroll from "../RevealOnScroll"


const Projects = () => {
  return (
    <section 
    id="projects"
    className="min-j-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Proyectos Realizados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadowshadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> Sistema de gestion de eventos mulitplataforma</h3>
                    <p className="text-gray-400">
                        
                        Sistema mulitplataforma que permite gestionar eventos, ademas, mediante inteligencia artificial predice y recomienda 
                        las fechas ideales para agendar evento.... En progreso.. 🚧🛠️
                    </p>
                    <div className="w-full flex flex-wrap gap-2 justify-center">
                        {["React", "Node.JS", "Railway", "PostgreSQL", "GitHub"].map((tech, key) => (
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

                    <div className="flex justify-between items-center">
                        <a href="" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Vista del Proyecto ➡️ </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadowshadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> Sistema de Detección de Malezas, Plagas y Enfermedades en cultivos de Arroz. </h3>
                    <p className="text-gray-400">
                        
                        Sistema web responsive que lleva la trazabilidad en el cultivo del Arroz
                        durante todo el ciclo de vida del cultivo, ademas de poder detectar afecciones
                        mediante inteligencia artificial.
                    </p>
                    <div className="w-full flex flex-wrap gap-2 justify-center">
                        {["React", "FastApi", "Render", "Pyhton", "GitHub", "PostgreSQL"].map((tech, key) => (
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

                    <div className="flex justify-between items-center">
                        <a href="https://arroz-ia.vercel.app" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Vista del Proyecto ➡️ </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects
