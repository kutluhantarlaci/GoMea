import styles from "./recentOrder.module.css";
import { Icon, Prize } from "@/components";
export default function RecentOrder() {
  const color = "text-gray";
  const productList = [
    {
      name: "Pizza",
      price: "5.59",
      src: "/assets/img_pizza.png",
    },
    {
      name: "Japon Ramen",
      price: "5.59",
      src: "/assets/img_ramen.png",
    },
    {
      name: "Fried Rice",
      price: "5.59",
      src: "/assets/img_fried_rice.png",
    },
  ];

  const products = productList.map((item, i) => {
    return (
      <li key={`product_${i}`} className={styles.productBox}>
        <div className={styles.icon}>
          <Icon name="Heart" style={{ fill: `var(--${color}` }} />
        </div>
        <div className={styles.productImage}>
          <img src={item.src} alt={item.name} />
        </div>
        <div className={styles.namePrize}>
          <span>{item.name}</span>
          <Prize prize="5.59" fontWeight="bolder" />
        </div>
      </li>
    );
  });
  return (
    <div className={styles.container}>
      <h3>Recent Order</h3>
      <ul>{products}</ul>
    </div>
  );
}
