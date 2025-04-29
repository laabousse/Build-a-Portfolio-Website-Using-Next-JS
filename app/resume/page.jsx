"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaPython,
  FaJava,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am a hard working, honest individual. I am a good timekeeper, always wiling to learn new skills. I am friendly, helpful and polite. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Laabousse Idriss",
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+86) 15623850689",
    },
    {
      fieldname: "Experience",
      fieldvalue: "4+ Years",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Moroccan",
    },
    {
      fieldname: "Email",
      fieldvalue: "idriss.laabousse@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldvalue: "Available",
    },
    {
      fieldname: "Languages",
      fieldvalue: "English, French, Arabic, Mandarin",
    },
  ],
};

// experiences data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "My career spans education, web development, and leadership roles. I've taught Python, worked on freelance web projects, and led the Liaison Department at a university. This diverse experience has honed my teaching, technical, and leadership skills, equipping me with a versatile professional toolkit.",
  items: [
    {
      company: "Al-irfan private school, Morocco",
      position: "Python teacher",
      duration: "2020-2022",
    },
    {
      company: "iziproteine Agadir.",
      position: "Freelance web Developer",
      duration: "Summer - 2021",
    },
    {
      company: "Freelance ilo-afou",
      position: "Freelance web Developer",
      duration: "Summer - 2021",
    },
    {
      company: "ICEA / Wuhan University of Technology",
      position: "Head of Liaison Department",
      duration: "2017 - 2018",
    },
    {
      company: "International University of Agadir - Morocco",
      position: "Organizing Committee of TEDxUniversiapolis",
      duration: " December - 2014",
    },
    {
      company: "AMANNET Inc",
      position: "Internship Web Developement",
      duration: "Summer - 2014",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My academic journey in computer science encompasses a Bachelor's in Computer Engineering, a Master's in Information Security, and an ongoing PhD in Images processing. This diverse education has provided me with a comprehensive understanding of technology, from foundational concepts to advanced cybersecurity and cutting-edge research.",
  items: [
    {
      institution: "Wuhan University of Technology",
      degree: "PhD / Images processing",
      duration: "2017 - present",
    },
    {
      institution: "Wuhan University of Technology",
      degree: "Master / Information Security",
      duration: "2015 - 2017",
    },
    {
      institution: "International University of Agadir",
      degree: "Bachelor / Computer engineering",
      duration: "2011 - 2014",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I have experience in web development, cloud technologies, and system administration, with strong skills in research, problem-solving, and project planning. I'm highly adaptable and effective in tackling diverse technical challenges and delivering results.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaGithub />,
      name: "Github Repository",
    },
    {
      icon: <FaAws />,
      name: "AWS Cloud Infrastructure",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDatabase />,
      name: "SQL Server 2008, MySQL, SQLite",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl fond-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">({item.duration})</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl fond-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">({item.duration})</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl-grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
