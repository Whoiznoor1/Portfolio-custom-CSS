import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Project.module.css'

const Projects = () => {
  return (
    <div id="projects" className={style.projectSec}>
      <h1 className={`coiny-regular ${style.projectHeading}`}>
        Projects
      </h1>

      <div className={style.work}>
        Showcasing My Work
      </div>

      <div className={style.dot}>
        <h1>.....</h1>
      </div>

      <div className={style.container}>
        <div className={style.main}>
          <div className={style.imgCont}>
            <Image
              src={'/P1.png'}
              alt="Project 1"
              width={500}
              height={300}
              className={style.img}
            />
            <p className={`itim-regular ${style.para}`}>
              Presenting my Static Resume Builder: a sleek, interactive tool crafted with HTML, CSS, and TypeScript to effortlessly showcase personal and professional details in a well-organized, visually appealing layout. Tailored for simplicity and style!
            </p>
            <Link
              href="https://hackathon-milestone-1-and-2-by-noor-un-nisa.vercel.app/"
              className={`itim-regular ${style.link} `}
            >
              View Project 1
            </Link>
          </div>

          <div className={style.imgCont}>
            <Image
              src={'/P2.png'}
              width={500}
              height={300}
              alt="Project 2"
              className={style.img}
            />
            <p className={`itim-regular ${style.para}`}>
              I developed a lightweight, interactive Static Resume Builder using HTML, CSS, and TypeScript. This tool enables users to effortlessly create a professional resume by inputting their personal and professional details, which are then dynamically displayed in a clean, visually appealing format.
            </p>
            <Link
              href="https://hackathon-milestone-3-4-and-5-by-noor-un-nisa.vercel.app/"
              className={`itim-regular ${style.link}`}
            >
              View Project 2
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
