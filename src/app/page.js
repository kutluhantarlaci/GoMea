import styles from "./page.module.css";
import {
  DiscountBox,
  Category,
  Popular,
  RecentOrders,
  WelcomeMessageBar,
} from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <WelcomeMessageBar />
      <Category />
      <Popular />
      <RecentOrders />
    </div>
  );
}
