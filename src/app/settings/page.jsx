import styles from "./settings.module.css";
import { SettingsForms, WelcomeMessageBar } from "@/components";
export default function Settings() {
  return (
    <div className={styles.container}>
      <WelcomeMessageBar />
      <h3>Settings</h3>
      <div className={styles.forms}>
        <SettingsForms
          title={"My Account"}
          firstInput={"First Name"}
          middleInput={"Last Name"}
          lastInput={"E-mail"}
        />
        <SettingsForms
          title={"Password"}
          firstInput={"Current Password"}
          middleInput={"New Password"}
          lastInput={"New Password (Confirm)"}
        />
      </div>
    </div>
  );
}
