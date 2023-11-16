import styles from "./favoritesComp.module.css";
import { PopularProductCard } from "@/components";

export default function FavoritesComp() {
  const product = [];
  for (let i = 0; i < 12; i++) {
    product.push(
      <PopularProductCard
        name="Fish Burger"
        src="/assets/img_fishburger.png"
        prize="5.59"
        color="text-gray"
      />,
    );
  }
  return (
    <div className={styles.container}>
      <h3>Favorites</h3>
      <div className={styles.PopularProductCardWrapper}>{product}</div>
    </div>
  );
}
