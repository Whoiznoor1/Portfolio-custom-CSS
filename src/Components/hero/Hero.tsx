"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div
      id="home"
      className={style.heroSec}
    >
      <div className={style.main}>
        <h1 className={style.intro}>
          Hi There! I am
        </h1>
        <h1 className={style.typeWritter}>
          Frontend
          <Typewriter
            options={{
              strings: ["Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div
          className={style.paraCont}
          data-aos="fade-down-right"
        >
          <p className="font-light">
            Transforming possibilities <br className={style.br} />
            into realities through <br className={style.br} />
            intelligent design!
          </p>
        </div>

        <div className={style.pdfBtn}>
          <a href="/cv update.pdf" target="_blank">
            <button className={style.btn}>
              <span className={style.span}>
                Download My CV
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className={style.imgCont}>
        <Image
          src={"/bg.jpg"}
          alt="background image"
          width={500}
          height={500}
          className={style.img}
        />
      </div>
    </div>
  );
};

export default Hero;
