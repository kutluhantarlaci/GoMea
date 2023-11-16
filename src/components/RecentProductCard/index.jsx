import styles from "./RecentProductCard.module.css";
import { Icon, Prize } from "@/components";

export default function RecentProductCard({ name, prize, src, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon style={{ fill: `var(--${color}` }} name="Heart" />
      </div>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <img src={src} alt={name} />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.namePrize}>
            <span>{name}</span>
            <Prize prize={prize} fontWeight="bolder" />
          </div>
          <div className={styles.distanceInfo}>
            <span>4.97km</span>
            <span>.</span>
            <span>21min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
