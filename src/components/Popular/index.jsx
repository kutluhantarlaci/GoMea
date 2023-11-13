import styles from "./popular.module.css";
import {
  Icon,
  DiscountTag,
  StarRating,
  Prize,
  CustomButton,
} from "@/components";
import Link from "next/link";
export default function Popular() {
  const color = "text-gray";
  const color1 = "yellow";
  const productList = [
    {
      name: "Fish Burger",
      price: "5.59",
      src: "/assets/img_fishburger.png",
    },
    {
      name: "Beef Burger",
      price: "5.59",
      src: "/assets/img_beefburger.png",
    },
    {
      name: "Cheese Burger",
      price: "5.59",
      src: "/assets/img_cheeseburger.png",
    },
  ];
  const products = productList.map((item, i) => {
    return (
      <li className={styles.productBox} key={`product_${i}`}>
        <div className={styles.discountTag}>
          <DiscountTag />
          <Icon style={{ fill: `var(--${color}` }} name="Heart" />
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <img src={item.src} alt={item.name} />
          </div>
          <StarRating style={{ fill: `var(--${color}` }} />
          <div className={styles.productInfo}>
            <div className={styles.namePrize}>
              <span>{item.name}</span>
              <Prize prize="5.59" fontWeight="bolder" />
            </div>
            <CustomButton classname="addBtn" text="+" />
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Popular</h3>
        <Link href={"/"}>
          View all{" "}
          <Icon name="RightArrow" style={{ fill: `var(--${color1})` }} />
        </Link>
      </div>
      <ul>{products}</ul>
    </div>
  );
}
