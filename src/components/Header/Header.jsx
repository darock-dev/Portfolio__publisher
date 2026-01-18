import logo from "../../assets/img/common/logo.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <a href="#">
              <img src={logo} alt="로고" />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
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
          <button className={styles.menuToggle} type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
