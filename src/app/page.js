import styles from "./page.module.css";
import {
  SearchInput,
  DiscountBox,
  Category,
  Popular,
  RecentOrder,
} from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <span>Hello, Dan</span>
        <SearchInput />
      </div>
      <DiscountBox />
      <Category />
      <Popular />
      <RecentOrder />
    </div>
  );
}
