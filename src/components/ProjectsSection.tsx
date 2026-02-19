import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Web App",
    description: "Full-stack e-commerce platform built with React, Node.js, Express, and PostgreSQL. Features user authentication, product management, and Stripe payment integration.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    color: "from-accent/10 to-accent/5",
  },
  {
    title: "Cybersecurity Dashboard",
    description: "Real-time security monitoring dashboard with threat detection visualization, log analysis, and alert management built with Python and Flask.",
    tags: ["Python", "Flask", "Security", "Data Viz"],
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    title: "AI Chatbot Application",
    description: "Intelligent chatbot using Python and AI APIs for natural language processing, context-aware conversations, and knowledge retrieval.",
    tags: ["Python", "AI", "NLP", "Flask"],
    color: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    title: "DevOps Pipeline Manager",
    description: "CI/CD pipeline management tool with Docker containerization, automated testing, and deployment tracking. Capstone project for DevOps certification.",
    tags: ["Docker", "CI/CD", "DevOps", "Node.js"],
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    title: "Cloud Task Manager",
    description: "Cloud-native task management application deployed on IBM Cloud with microservices architecture, REST APIs, and agile sprint tracking.",
    tags: ["Cloud", "IBM", "REST API", "Agile"],
    color: "from-violet-500/10 to-violet-500/5",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and modern web technologies. Features smooth animations, responsive design, and performance optimization.",
    tags: ["React", "CSS3", "JavaScript", "Responsive"],
    color: "from-rose-500/10 to-rose-500/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
  return (
    <section className="section-container py-20" id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item} className="project-card">
            <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <span className="text-4xl font-bold font-display text-foreground/10">{project.title.charAt(0)}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold font-display text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
