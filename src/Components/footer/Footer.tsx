import React from "react";
import Link from "next/link";
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`body-font ${style.footerSec}`}>
      <div className={`container ${style.container}`}>
        <Link
          href="/"
          className={`title-font ${style.link}`}
        >
          <span className={style.dot}>.</span>
          <span className={style.my}>My Portfolio</span>
        </Link>

        <p className={style.para}>
          © 2024 Portfolio —
          <Link
            href="mailto:murkmyman@gmail.com"
            className={style.mail}
            rel="noopener noreferrer"
            target="_blank"
          >
            murkmyman5@gmail.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
