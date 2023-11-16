import styles from "./welcomeMessageBar.module.css";
import { DiscountBox, SearchInput } from "@/components";

export default function WelcomeMessageBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <span>Hello, Dan</span>
        <SearchInput />
      </div>
      <DiscountBox />
    </div>
  );
}
