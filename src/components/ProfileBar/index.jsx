import styles from "./profileBar.module.css";
import Icon from "@/components/Icons";
export default function ProfileBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.icons}>
          <Icon name="Notification" />
          <Icon name="Settings" />
        </div>
        <img src="/assets/img_avatar.png" alt="avatar" />
      </div>
    </div>
  );
}
