import styles from "./recentOrders.module.css";
import { Icon, RecentProductCard } from "@/components";
import Link from "next/link";
export default function RecentOrders() {
  const color1 = "yellow";
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Recent Orders</h3>
        <Link href={"/"}>
          View all{" "}
          <Icon name="RightArrow" style={{ fill: `var(--${color1})` }} />
        </Link>
      </div>
      <div className={styles.RecentProductCard}>
        <RecentProductCard
          name="Fried Rice"
          src="/assets/img_fried_rice.png"
          prize="5.59"
          color="text-gray"
        />
        <RecentProductCard
          name="Fried Rice"
          src="/assets/img_fried_rice.png"
          prize="5.59"
          color="text-gray"
        />
        <RecentProductCard
          name="Fried Rice"
          src="/assets/img_fried_rice.png"
          prize="5.59"
          color="text-gray"
        />
        <RecentProductCard
          name="Fried Rice"
          src="/assets/img_fried_rice.png"
          prize="5.59"
          color="text-gray"
        />
      </div>
    </div>
  );
}
