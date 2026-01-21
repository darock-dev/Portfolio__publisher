import useScrollAnimation from "../../hooks/useScrollAnimation";
import styles from "./Button.module.scss";

export default function Button({ text, color = "blue", onClick, animateDelay = 0 }) {
  useScrollAnimation();

  return (
    <button
      className={`${color === "blue" ? styles.blueButton : styles.whiteButton} ${
        styles.button
      } scroll-animate`}
      onClick={onClick}
      style={{ transitionDelay: `${animateDelay}s` }}
    >
      {text}
    </button>
  );
}
