import styles from "./Button.module.scss";

export default function Button({ text, color = "blue", onClick }) {
  return (
    <button
      className={`${color === "blue" ? styles.blueButton : styles.whiteButton} ${styles.button}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
