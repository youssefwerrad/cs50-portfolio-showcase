import { motion } from "framer-motion";

const technologies = [
  { name: "Python", icon: "https://api.iconify.design/skill-icons:python-dark.svg" },
  { name: "HTML5", icon: "https://api.iconify.design/skill-icons:html.svg" },
  { name: "CSS3", icon: "https://api.iconify.design/skill-icons:css.svg" },
  { name: "JavaScript", icon: "https://api.iconify.design/skill-icons:javascript.svg" },
  { name: "React", icon: "https://api.iconify.design/skill-icons:react-dark.svg" },
  { name: "Node.js", icon: "https://api.iconify.design/skill-icons:nodejs-dark.svg" },
  { name: "Express", icon: "https://api.iconify.design/skill-icons:expressjs-dark.svg" },
  { name: "Flask", icon: "https://api.iconify.design/skill-icons:flask-dark.svg" },
  { name: "PostgreSQL", icon: "https://api.iconify.design/skill-icons:postgresql-dark.svg" },
  { name: "Docker", icon: "https://api.iconify.design/skill-icons:docker.svg" },
  { name: "Linux", icon: "https://api.iconify.design/skill-icons:linux-dark.svg" },
  { name: "Git", icon: "https://api.iconify.design/skill-icons:git.svg" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const TechnologiesSection = () => {
  return (
    <section className="section-container py-20" id="technologies">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={item} className="tech-badge">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechnologiesSection;
