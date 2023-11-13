import styles from "./couponButton.module.css";
import { Icon } from "@/components";

export default function CouponButton({ type, size, action }) {
  return (
    <div className={styles.container}>
      <button
        type={type}
        className={`${styles.couponBtn} ${styles[size]}`}
        onClick={() => (action ? action() : null)}
      >
        <Icon name="Coupon" />
        Have a coupon code ?
        <Icon name="RightArrow" />
      </button>
    </div>
  );
}
