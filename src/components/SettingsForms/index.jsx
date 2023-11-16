import styles from "./settingsForms.module.css";
import { CustomButton } from "@/components";
export default function SettingsAccount({
  title,
  firstInput,
  middleInput,
  lastInput,
}) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <form className={styles.form}>
        <input type="text" placeholder={firstInput} />
        <input type="text" placeholder={middleInput} />
        <input type="text" placeholder={lastInput} />
      </form>
      <div className={styles.buttonContainer}>
        <CustomButton classname={"contained"} size={"small"} text={"Save"} />
      </div>
    </div>
  );
}
