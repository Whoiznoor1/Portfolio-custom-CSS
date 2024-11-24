import React from "react";
import style from './Contact.module.css'

const Contact = () => {
  return (
    <div
      id="contact"
      className={style.contactSec}
      style={{ backgroundColor: "rgb(10, 10, 10)" }}
    >
      <div className={style.headingSec}>
        <h1 className={`${style.heading} coiny-regular`}>
          Contact Me
        </h1>
        <p className={style.msg}>
          You can reach out to me through
        </p>
        <div className={style.dot}>
          <h1>.....</h1>
        </div>
      </div>

      <div className={style.main}>
        <ul className={style.ul}>
          <li className={`itim-regular ${style.li}`}>
            <a
              href="mailto:murkmyman5@gmail.com"
              className={`${style.email} ${style.link}`}
            >
              <span>Email</span>
            </a>
            <p className={style.text}>
              Reach out to me directly through email for any inquiries or
              connections!
            </p>
          </li>

          <li className={`itim-regular ${style.li}`}>
            <a
              href="https://www.linkedin.com/in/noor-un-nisa-b4301a315/"
              className={`${style.linkedin} ${style.link}`}
            >
              <span>LinkedIn</span>
            </a>
            <p className={style.text}>
              You can easily connect with me on LinkedIn for professional
              discussions and networking!
            </p>
          </li>

          <li className={`itim-regular ${style.li}`}>
            <a
              href="https://github.com/Whoiznoor1"
              className={`${style.git} ${style.link}`}
            >
              <span>GitHub</span>
            </a>
            <p className={style.text}>
              Feel free to connect with me on GitHub for collaborations or to
              explore my projects!
            </p>
          </li>

          <li className={`itim-regular ${style.li}`}>
            <a
              href="https://www.npmjs.com/~murk_myman"
              className={`${style.npm} ${style.link}`}
            >
              <span>Npm</span>
            </a>
            <p className={style.text}>
              Catch me on npm for my packages, collaborations, or project
              discussions!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
