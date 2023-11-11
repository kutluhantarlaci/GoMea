import styles from "./customButton.module.css";
export default function CustomButton({
  classname,
  size = "",
  type,
  text,
  action = null,
}) {
  return (
    <div className={styles.container}>
      <button
        type={type}
        className={`${styles[classname]} ${styles[size]}`}
        onClick={() => (action ? action() : null)}
      >
        {text}
      </button>
    </div>
  );
}
