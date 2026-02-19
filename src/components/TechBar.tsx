import { motion } from "framer-motion";

const techs = [
  { name: "Python", icon: "https://api.iconify.design/skill-icons:python-dark.svg" },
  { name: "HTML5", icon: "https://api.iconify.design/skill-icons:html.svg" },
  { name: "CSS3", icon: "https://api.iconify.design/skill-icons:css.svg" },
  { name: "JavaScript", icon: "https://api.iconify.design/skill-icons:javascript.svg" },
  { name: "React", icon: "https://api.iconify.design/skill-icons:react-dark.svg" },
  { name: "Node.js", icon: "https://api.iconify.design/skill-icons:nodejs-dark.svg" },
  { name: "Docker", icon: "https://api.iconify.design/skill-icons:docker.svg" },
  { name: "GitHub", icon: "https://api.iconify.design/skill-icons:github-dark.svg" },
  { name: "Flask", icon: "https://api.iconify.design/skill-icons:flask-dark.svg" },
  { name: "PostgreSQL", icon: "https://api.iconify.design/skill-icons:postgresql-dark.svg" },
  { name: "Linux", icon: "https://api.iconify.design/skill-icons:linux-dark.svg" },
  { name: "AWS", icon: "https://api.iconify.design/skill-icons:aws-dark.svg" },
];

const TechBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-container py-12"
    >
      <div className="flex flex-wrap justify-center gap-4">
        {techs.map((tech) => (
          <motion.img
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className="w-12 h-12 rounded-lg transition-transform duration-300 hover:scale-110"
            whileHover={{ y: -4 }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default TechBar;
