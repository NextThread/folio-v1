import React from "react";
import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-24 md:pt-20 md:pb-44 lg:pt-20 lg:pb-52"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-36">
        <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed text-[#e4ded7]/80 md:mb-16 md:gap-6 md:text-[24px] md:leading-relaxed lg:mb-16 lg:max-w-[70%]  lg:text-[24px]">
          <AnimatedTitle
            text={"Hi there!"}
            className={
              "text-[40px] font-bold text-[#e4ded7] md:text-[44px] lg:text-[48px]"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"mr-[0.01em]"}
          />

          <AnimatedBody
            text={
              "I'm a software engineer based in Lagos, Nigeria. I'm passionate about building software that solves real-world problems. I'm currently working on a few projects that I hope to launch soon. In the meantime, I'm open to new opportunities. Feel free to reach out to me on any of the platforms below."
            }
          />
          <AnimatedBody
            text={
              "I enjoy watching anime and I am very into the Marvel franchise. I listen to lots of music — RnB, UK Drill, and Chill Rap are some of my favourite genres. Let's not forget the guys at Snarky Puppy, they are magical. I spend most of my free time with my family."
            }
          />
          <AnimatedBody
            text={
              "You can find below, some of my favourite songs. I'll update them periodically."
            }
          />
        </div>

        <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-10 md:text-[24px] md:leading-normal lg:mt-24 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
          <div className="flex flex-col gap-4 md:gap-6">
            <AnimatedTitle
              text={"Frontend Tools"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[24px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik."
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <AnimatedTitle
              text={"UI Libraries"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[24px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, Bootstrap, Chart.js."
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <AnimatedTitle
              text={"Design Tools"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[24px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "  Figma, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX Research, UI Design, Prototyping."
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-10 md:-mt-0 lg:mt-32">
        <SongCarousel />
      </div>
    </section>
  );
};

export default About;
