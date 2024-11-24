"use client";
import { useState } from "react";
import style from './Navbar.module.css'
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={style.navSec}>
      <div className={style.main}>
        <div className={style.nameCont}>
          <h1 className={`sarina-regular ${style.name}`}>
            {" "}
            Noor Un Nisa
          </h1>
        </div>

        <ul className={style.navigations}>
          <li className="itim-regular">
            <Link href="/" className={style.hovr}>
              Home
            </Link>
          </li>
          <li className="itim-regular">
            <Link href="#about" className={style.hovr}>
              About
            </Link>
          </li>

          <li className="itim-regular">
            <Link href="#projects" className={style.hovr}>
              Projects
            </Link>
          </li>
          <li className="itim-regular">
            <Link href="#contact" className={style.hovr}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={style.ham}>
          <button onClick={toggleMenu} className={style.btn}>
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={style.menu}>
          <ul className={style.menuList}>
            <li className="itim-regular">
              <Link href="#home">
                Home
              </Link>
            </li>
            <li className="itim-regular">
              <Link href="#about">
                About
              </Link>
            </li>
            <li className="itim-regular">
              <Link href="#projects">
                Projects
              </Link>
            </li>
            <li className="itim-regular">
              <Link href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
