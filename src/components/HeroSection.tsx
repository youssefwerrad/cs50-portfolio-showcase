import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.png";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground mb-4">
            Your Name
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            Full-Stack Developer & CS enthusiast with a passion for Python, web development, and cybersecurity.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={heroAvatar}
            alt="Developer avatar"
            className="w-72 md:w-96 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
