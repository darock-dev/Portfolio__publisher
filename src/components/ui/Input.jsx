import styles from "./Input.module.scss";

export default function Input({
  label,
  type = "text",
  placeholder,
  isRequired = false,
  name,
  onChange,
}) {
  return (
    <div className={styles.inputWrap}>
      <div className={styles.label}>
        {label}
        <span>{isRequired ? "*" : ""}</span>
      </div>
      <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
    </div>
  );
}
