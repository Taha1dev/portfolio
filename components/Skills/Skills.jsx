import React from 'react';
import HyperOne from '../customH1/HyperOne';
import SkillCard from './skillsCard/SkillsCard';
const Skills = () => {
  const skillsData = [
    { name: 'React', imageSrc: '/svg/skills/react.svg' },
    { name: 'Next.js', imageSrc: '/svg/skills/nextjs.svg' },
    { name: 'Redux', imageSrc: '/svg/skills/redux.svg' },
    { name: 'vite', imageSrc: '/svg/skills/vite.svg' },
    { name: 'React Query', imageSrc: '/svg/skills/rq.svg' },
    { name: 'Git', imageSrc: '/svg/skills/git.svg' },
    { name: 'GitHub', imageSrc: '/svg/skills/github.svg' },
    { name: 'Tailwind CSS', imageSrc: '/svg/skills/tailwindcss.svg' },
    { name: 'Type Script', imageSrc: '/svg/skills/ts.svg' },
    { name: 'Java Script', imageSrc: '/svg/skills/js.svg' },
    { name: 'Sass', imageSrc: '/svg/skills/scss.svg' },
    { name: 'API', imageSrc: '/svg/skills/api.svg' },
    { name: 'HTML5', imageSrc: '/svg/skills/html.svg' },
    { name: 'CSS', imageSrc: '/svg/skills/css.svg' },
    { name: 'Pug', imageSrc: '/svg/skills/pug.svg' },
    { name: 'Bootstrap', imageSrc: '/svg/skills/bootstrap.svg' },
    { name: 'Figma', imageSrc: '/svg/skills/figma_.svg' },
  ];
  return (
    <div id="skills" className="container lg:my-24">
      <div className="flex flex-col items-center">
        <HyperOne value="My Skills" />
        <p className="text-center mt-2 lg:mx-32 lg:text-2xl sm:text-xl">
          These are the essential tools, libraries, and frameworks that
          constitute my current tech stack, enabling me to develop robust and
          innovative applications{' '}
        </p>
      </div>
      <div className="skillCard mt-12 flex justify-center flex-wrap lg:mx-32 z-1 gap-8 ">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            imageSrc={skill.imageSrc}
            delay={index * 100} // Adding animation delay
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
