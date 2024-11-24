import React from "react";
import style from './About.module.css'
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      style={{ backgroundColor: "rgb(10, 10, 10)" }}
      className={style.aboutSec}
    >
      <div className={style.headingCont}>
        <h1 className={`coiny-regular -4xl ${style.heading}`}>
          About Me
        </h1>
      </div>

      <div className={style.profile}>
        <h1>Professional Profile - All About Me</h1>
      </div>

      <div className={style.dot}>
        <h1>.....</h1>
      </div>

      <div className={style.main}>
        <div className={style.imgCont}>
          <Image
            src={"/bg.jpg"}
            alt="my image"
            width={300}
            height={300}
            className={style.img}
          />
        </div>

        <div className={style.textCont}>
          <h1 className={style.name}>
            I am Noor Un Nisa
          </h1>
          <p className={`itim-regular ${style.para} `}>
            I am a front-end developer with proficiency in HTML, CSS, Tailwind
            CSS, TypeScript, and Next.js. Currently, I am a student at the{" "}
            <i>Governor Sindh Initiative for Cloud Applied Generative AI </i>
            where I am expanding my knowledge in cutting-edge AI technologies.
            With a keen interest in artificial intelligence, I am passionate
            about building visually engaging and intuitive user interfaces. My
            goal is to leverage my technical skills and creativity to develop
            seamless web experiences and stay at the forefront of modern web
            development and AI innovations.
          </p>
        </div>
      </div>

      <div className={style.detail}>
        <div className={style.flex}>
          <span className={style.bold}>Date of Birth: </span> 25<sup>th</sup> {" "}
          April 2006
        </div>
        <div className={style.flex}>
          <span className={style.bold}>  Nationality: </span>    Pakistani
        </div>
      </div>
    </div>
  );
};

export default About;






