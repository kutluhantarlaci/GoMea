import styles from "./loginSignup.module.css";
import { CustomButton } from "@/components";

export default function LoginSignup() {
  return (
    <div className={styles.container}>
      <CustomButton classname="contained" text="Login" size="medium" />
      <CustomButton classname="outlined" text="Signup" size="medium" />
    </div>
  );
}
