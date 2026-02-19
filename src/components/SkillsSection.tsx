import { motion } from "framer-motion";
import { Code, Shield, Cloud, Server, Layout, GitBranch } from "lucide-react";

const skills = [
  { icon: Code, title: "Full-Stack Development", desc: "Python, JavaScript, React, Node.js, Flask" },
  { icon: Shield, title: "Cybersecurity", desc: "Security fundamentals, threat modeling, secure coding" },
  { icon: Cloud, title: "Cloud Computing", desc: "IBM Cloud, AWS basics, deployment & scaling" },
  { icon: Server, title: "Backend Development", desc: "REST APIs, Express.js, database design" },
  { icon: Layout, title: "Frontend Development", desc: "React, HTML5, CSS3, responsive design" },
  { icon: GitBranch, title: "DevOps & Agile", desc: "CI/CD pipelines, Scrum, version control" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section className="section-container py-20" id="skills">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill) => (
          <motion.div key={skill.title} variants={item} className="skill-card">
            <skill.icon className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold font-display text-foreground mb-2">{skill.title}</h3>
            <p className="text-sm text-muted-foreground">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
