"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "System Administration",
    title: "Active Directory Home Lab",
    description:
      "This project provides step-by-step instructions for setting up a home lab with Active Directory using Oracle VirtualBox, including installing Windows Server 2019 as a Domain Controller and configuring Windows 10 clients to join the domain. Ideal for IT students and enthusiasts exploring AD in a virtual environment.",
    stack: [
      { name: "VirtualBox" },
      { name: "Windows Server 2019" },
      { name: "Windows 10" },
      { name: "Active Directory" },
      { name: "DNS" },
      { name: "Group Policy Management" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/laabousse/Active-Directory-Home-Lab.git",
  },
  {
    num: "02",
    category: "Web Development",
    title: "Create a Portfolio website",
    description:
      "A feature-rich web application with multilingual support, built using HTML5, CSS3, JavaScript, jQuery, and Bootstrap for a responsive and interactive interface, and Firebase for secure backend functionality.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "jQuery" },
      { name: "Bootstrap" },
      { name: "Firebase" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://iziproteine-agadir.web.app",
    github: "",
  },
  {
    num: "03",
    category: "Web Development",
    title: "Create an E-commerce website",
    description:
      "A scalable and visually engaging e-commerce platform featuring real-time shopping cart updates, Stripe-powered payments, dynamic CMS-driven content, and a secure user experience with modern authentication methods.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Sanity" },
      { name: "Stripe" },
      { name: "Tailwind CSS" },
      { name: "Clerk" },
    ],
    image: "/assets/work/thumb8.png",
    live: "https://morocco-grove-naturals.vercel.app/",
    github: "https://github.com/laabousse/Morocco-Grove-Naturals",
  },
  {
    num: "04",
    category: "Web Development",
    title: "Create a Portfolio website",
    description:
      "An innovative web development project showcasing responsive design and dynamic functionality. Built using HTML5, CSS3, JavaScript, and Bootstrap for seamless user experience, and powered by Firebase for robust backend integration.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "Firebase" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://ilo-afou.web.app",
    github: "",
  },
  {
    num: "05",
    category: "Web Development",
    title: "Create an E-commerce website",
    description:
      "A complete, modern e-commerce solution with advanced shopping features, responsive UI, secure authentication, and scalable architecture, built using Next.js, Sanity CMS, Stripe, and Tailwind CSS.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Sanity" },
      { name: "Stripe" },
      { name: "Zustand" },
      { name: "Tailwind CSS" },
      { name: "Clerk" },
    ],
    image: "/assets/work/thumb9.png",
    live: "https://ecommerce-trendy.vercel.app/",
    github:
      "https://github.com/laabousse/E-Commerce-Platform-with-Next.js-Sanity-and-Stripe",
  },

  {
    num: "06",
    category: "Web Development",
    title: "Front End Development Libraries Certification",
    description:
      "A front-end development project showcasing responsive and dynamic user interfaces using modern web technologies like HTML5, CSS3, JavaScript, React, and Tailwind CSS. Explore the project and certification details through the links provided below.",
    stack: [
      { name: "Html 5" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Tailwind" },
      { name: "Css 3" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://www.freecodecamp.org/certification/laabousse/front-end-development-libraries",
    github: "",
  },
  {
    num: "07",
    category: "Web Design",
    title: "Responsive Web Design Certification",
    description:
      "This project is part of the Responsive Web Design Certification and includes a series of creative and functional web pages: a Survey Form, a Tribute Page, a Technical Documentation Page, a Product Landing Page, and a Personal Portfolio Webpage. Developed using HTML5, CSS3, these projects demonstrate expertise in creating responsive designs. Explore the certificate and project links below.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/thumb5.png",
    live: "https://www.freecodecamp.org/certification/laabousse/responsive-web-design",
    github: "",
  },
  {
    num: "08",
    category: "JavaScript & Data Structures",
    title: "JavaScript Algorithms and Data Structures (Beta) Certification",
    description:
      "This project is part of the JavaScript Algorithms and Data Structures (Beta) Certification. It includes practical applications of JavaScript through the following projects: a Palindrome Checker, a Roman Numeral Converter, a Telephone Number Validator, a Cash Register, and a Pokémon Search App. These projects demonstrate a strong foundation in algorithms and problem-solving using JavaScript. Explore the certificate and project links below.",
    stack: [{ name: "Html 5" }, { name: "JavaScript" }, { name: "Css 3" }],
    image: "/assets/work/thumb6.png",
    live: "https://www.freecodecamp.org/certification/laabousse/javascript-algorithms-and-data-structures-v8",
    github: "",
  },
  {
    num: "09",
    category: "Full Stack Development",
    title: "Back End Development and APIs Certification",
    description:
      "This project is part of the Back End Development and APIs Certification. It showcases practical backend development using HTML5, CSS3, JavaScript, MongoDB, and APIs through projects like a Timestamp Microservice, URL Shortener, Exercise Tracker, and File Metadata Microservice. These projects highlight skills in building scalable microservices and integrating MongoDB solutions. Explore the certification and project links below.",
    stack: [
      { name: "Html 5" },
      { name: "JavaScript" },
      { name: "Css 3" },
      { name: "Mangodb" },
      { name: "APIs" },
    ],
    image: "/assets/work/thumb7.png",
    live: "https://www.freecodecamp.org/certification/laabousse/back-end-development-and-apis",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get the current slide index
    const currentIndex = swiper.activeIndex;
    // update the current project current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap=[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project title */}
              <h3 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="grid grid-cols-3 gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm xl:text-base text-accent"
                    >
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Github project button */}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl-h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-neutral-light">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-neutral-dark/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-[585px] h-[460px]">
                        <Image
                          src={project.image}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex justify-between items-center absolute bottom-[calc(50%_-_22px)] right-0 z-20 w-full sm:relative sm:mt-4 sm:justify-between md:justify-center md:gap-4 md:w-full"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
