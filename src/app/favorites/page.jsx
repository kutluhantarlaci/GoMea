import styles from "./favorites.module.css";
import { DiscountBox, FavoritesComp, WelcomeMessageBar } from "@/components";
export default function Favorites() {
  return (
    <div className={styles.container}>
      <WelcomeMessageBar />
      <FavoritesComp />
    </div>
  );
}
