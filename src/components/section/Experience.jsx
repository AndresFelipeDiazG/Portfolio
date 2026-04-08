import RevealOnScroll from "../RevealOnScroll"


const Experience = () => {
  return (
    <section 
    id="experience"
    className="min-j-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Experiencia Laboral
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadowshadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Desarrollador Full Stack </h3>
                    
                     <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <strong>Transvitur S.A.S | 02/2025 – 08/2025</strong>
                            <p className="text-gray-400">
                                Participé en el desarrollo de un sistema web a medida para la gestión operativa de la empresa, 
                                enfocado en optimizar procesos internos y centralizar la información.
                            </p>
                        <li>
                            Desarrollo de API REST con NestJS siguiendo arquitectura modular.
                        </li>
                        <li>
                            Modelado y gestión de base de datos PostgreSQL.
                        </li>
                        <li>
                            Desarrollo de interfaces dinámicas con React.
                        </li>
                        <li>
                            Integración entre frontend y backend.
                        </li>
                        <li>
                            Trabajo colaborativo bajo metodologías ágiles.
                        </li>
                    </ul>
                    
                    <div className="w-full flex flex-wrap gap-2 justify-center">
                        {["React", "PostgreSQL", "Node.Js", "GitHub", "Docker", "NestJs", ].map((tech, key) => (
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

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadowshadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> Especialista en Automatización e Integraciones </h3>
                    <p className="text-gray-400">
                     <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <strong> Factech Group S.A.S | 10/2025 – 03/31 </strong>
                        <li>
                            Diseño e implementación de automatizaciones en plataformas CRM.
                        </li>
                        <li>
                            Integración de APIs externas para sincronización de datos.
                        </li>
                        <li>
                            Optimización de flujos de trabajo reduciendo procesos manuales.
                        </li>
                        <li>
                            Configuración de webhooks y automatización de eventos.
                        </li>
                    </ul>
                    </p>
                    <div className="w-full flex flex-wrap gap-2 justify-center">
                        {["Webhooks", "APIs REST", "JavaScript", "n8n", "GoHighLevel"].map((tech, key) => (
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
        </RevealOnScroll>
    </section>
  )
}

export default Experience
