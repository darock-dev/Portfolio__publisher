import useScrollAnimation from "../../../hooks/useScrollAnimation";
import styles from "./Textarea.module.scss";

export default function Textarea({ label, placeholder, isRequired = false, name, onChange }) {
  useScrollAnimation();

  return (
    <div className={`${styles.textareaWrap} scroll-animate`}>
      <div className={styles.label}>
        {label}
        <span>{isRequired ? "*" : ""}</span>
      </div>
      <textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        minLength={1}
        maxLength={500}
      />
    </div>
  );
}
