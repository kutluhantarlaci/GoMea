import styles from "./category.module.css";
import {
  Bakery,
  Burger,
  Beverage,
  Chicken,
  Pizza,
  Seafood,
  RightArrow,
} from "@/components/Icons";
import Icon from "@/components/Icons";
import Link from "next/link";
export default function Category() {
  const color = "yellow";
  const categoryList = [
    {
      name: "Bakery",
      icon: <Icon name="Bakery" />,
    },
    {
      name: "Burger",
      icon: <Icon name="Burger" />,
    },
    {
      name: "Beverage",
      icon: <Icon name="Beverage" />,
    },
    {
      name: "Chicken",
      icon: <Icon name="Chicken" />,
    },
    {
      name: "Pizza",
      icon: <Icon name="Pizza" />,
    },
    {
      name: "Seafood",
      icon: <Icon name="Seafood" />,
    },
  ];
  const categories = categoryList.map((item, i) => {
    return (
      <Link key={`icon_${i}`} href={"/"} className={styles.iconCard}>
        {item.icon}
        {item.name}
      </Link>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Category</h3>
        <Link href={"/"}>
          View all{" "}
          <Icon name="RightArrow" style={{ fill: `var(--${color})` }} />
        </Link>
      </div>
      <div className={styles.categoriesContainer}>{categories}</div>
    </div>
  );
}
