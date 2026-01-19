import { useState } from "react";
import logo from "../../assets/img/common/logo.png";
import styles from "./Header.module.scss";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  // Mobile menu toggle
  const onClickMenuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <a href="#">
            <img src={logo} alt="로고" />
          </a>
        </div>
        <nav
          className={`${styles.nav} ${isActive ? styles.active : ""}`}
          onClick={onClickMenuToggle}
        >
          <ul>
            <li>
              <a href="#animation">Animation</a>
            </li>
            <li>
              <a href="#accordion-menu">Accordion Menu</a>
            </li>
            <li>
              <a href="#form">Form</a>
            </li>
            <li>
              <a href="#slide">Slide</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          className={`${styles.menuToggle} ${isActive ? styles.active : ""}`}
          type="button"
          onClick={onClickMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
