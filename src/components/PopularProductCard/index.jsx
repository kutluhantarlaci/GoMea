import styles from "./PopularProductCard.module.css";
import {
  CustomButton,
  DiscountTag,
  Icon,
  Prize,
  StarRating,
} from "@/components";

export default function PopularProductCard({ name, prize, src, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.discountTag}>
        <DiscountTag />
        <Icon style={{ fill: `var(--${color}` }} name="Heart" />
      </div>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <img src={src} alt={name} />
        </div>
        <StarRating style={{ fill: `var(--${color}` }} />
        <div className={styles.productInfo}>
          <div className={styles.namePrize}>
            <span>{name}</span>
            <Prize prize={prize} fontWeight="bolder" />
          </div>
          <CustomButton classname="addBtn" text="+" />
        </div>
      </div>
    </div>
  );
}
