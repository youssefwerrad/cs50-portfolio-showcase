import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const courses = [
  { name: "CS50's Introduction to Programming with Python", provider: "Harvard" },
  { name: "CS50's Introduction to Computer Science", provider: "Harvard" },
  { name: "CS50's Introduction to Cybersecurity", provider: "Harvard" },
  { name: "CS50's Computer Science for Business", provider: "Harvard" },
  { name: "CS50's Web Programming with Python and JavaScript", provider: "Harvard" },
  { name: "Introduction to Cloud Computing", provider: "IBM" },
  { name: "Software Engineering Basics for Everyone", provider: "IBM" },
  { name: "Full Stack Application Development Project", provider: "IBM" },
  { name: "Back-end Application Development with Node.js and Express", provider: "IBM" },
  { name: "Developing Front End Apps with React", provider: "IBM" },
  { name: "Introduction to Web Development with HTML5, CSS3, and JavaScript", provider: "IBM" },
  { name: "DevOps and Software Engineering Capstone Project", provider: "IBM" },
  { name: "Agile and Scrum Fundamentals", provider: "IBM" },
  { name: "Python for AI & Development Project", provider: "IBM" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const CoursesSection = () => {
  return (
    <section className="section-container py-20" id="courses">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12"
      >
        Courses & Certifications
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {courses.map((course) => (
          <motion.div key={course.name} variants={item} className="course-chip">
            <GraduationCap className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{course.name}</span>
            <span className="text-xs text-muted-foreground">• {course.provider}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoursesSection;
