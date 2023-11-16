import styles from "./orderHistory.module.css";
import OrderHistoryProductCard from "@/components/OrderHistoryProductCard";
import { WelcomeMessageBar } from "@/components";
export default function OrderHistory() {
  return (
    <div className={styles.container}>
      <WelcomeMessageBar />
      <h3>Order History</h3>
      <OrderHistoryProductCard
        name="Fish Burger"
        src="/assets/img_fishburger.png"
        prize="5.59"
      />
      <OrderHistoryProductCard
        name="Fish Burger"
        src="/assets/img_fishburger.png"
        prize="5.59"
      />
      <OrderHistoryProductCard
        name="Fish Burger"
        src="/assets/img_fishburger.png"
        prize="5.59"
      />
      <OrderHistoryProductCard
        name="Fish Burger"
        src="/assets/img_fishburger.png"
        prize="5.59"
      />
    </div>
  );
}
