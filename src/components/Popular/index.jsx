import styles from "./popular.module.css";
import { Icon, PopularProductCard } from "@/components";
import Link from "next/link";
export default function Popular() {
  const color = "text-gray";
  const color1 = "yellow";
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Popular</h3>
        <Link href={"/"}>
          View all{" "}
          <Icon name="RightArrow" style={{ fill: `var(--${color1})` }} />
        </Link>
      </div>
      <div className={styles.productCardWrapper}>
        <PopularProductCard
          name="Fish Burger"
          prize="5.59"
          src="/assets/img_fishburger.png"
          color="text-gray"
        />
        <PopularProductCard
          name="Beef Burger"
          prize="5.59"
          src="/assets/img_beefburger.png"
          color="text-gray"
        />
        <PopularProductCard
          name="Cheese Burger"
          prize="5.59"
          src="/assets/img_cheeseburger.png"
          color="text-gray"
        />
        <PopularProductCard
          name="Cheese Burger"
          prize="5.59"
          src="/assets/img_cheeseburger.png"
          color="text-gray"
        />
      </div>
    </div>
  );
}
