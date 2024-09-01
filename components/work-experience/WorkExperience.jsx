import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const workExperiences = [
  {
    id: 1,
    title: 'Senior Developer',
    company: 'TechCorp',
    period: '2020 - Present',
    description:
      'Led development of cutting-edge web applications using React and Node.js.',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'InnoSoft',
    period: '2018 - 2020',
    description:
      'Developed and maintained multiple client projects using various technologies.',
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartUp Inc.',
    period: '2016 - 2018',
    description:
      'Assisted in the development of mobile applications and gained valuable experience.',
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex items-center mb-8"
    >
      <div className="absolute left-0 w-4 h-4 bg-primary rounded-full -ml-2" />
      <div className="ml-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-card p-6 rounded-lg shadow-lg relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
          <p className="text-muted-foreground mb-2">{experience.company}</p>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {experience.period}
          </div>
          <p className="text-sm">{experience.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function WorkEx() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 flex items-center"
      >
        <Briefcase className="w-8 h-8 mr-4 text-primary" />
        Work Experience
      </motion.h2>
      <div className="relative pl-4 border-l-2 border-primary">
        {workExperiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
