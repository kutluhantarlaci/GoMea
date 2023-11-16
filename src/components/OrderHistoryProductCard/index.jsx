import styles from "./orderHistoryProductCard.module.css";
import { CustomButton, Prize } from "@/components";

export default function OrderHistoryProductCard({ name, src, prize }) {
  return (
    <div className={styles.container}>
      <img src={src} alt={name} />
      <div className={styles.productInfo}>
        <span>{name}</span>
        <span>It's delivered at 14.53 1st January</span>
      </div>
      <div className={styles.prize}>
        <Prize prize={prize} fontWeight="bolder" />
        <CustomButton text="Repeat Order" classname="contained" size="medium" />
      </div>
    </div>
  );
}
