import styles from "./orderMenu.module.css";
import { Prize, CouponButton, CustomButton } from "@/components";
export default function OrderMenu() {
  const productList = [
    {
      src: "/assets/img_fishburger.png",
      name: "Fish Burger",
      prize: "5.59",
    },
    {
      src: "/assets/img_cheeseburger.png",
      name: "Cheese Burger",
      prize: "5.59",
    },
    {
      src: "/assets/img_beefburger.png",
      name: "Beef Burger",
      prize: "5.59",
    },
  ];
  const products = productList.map((item, i) => {
    return (
      <div key={`product_${i}`} className={styles.singleProduct}>
        <img src={item.src} alt={item.name} />
        <div className={styles.productName}>
          <span>{item.name}</span>
          <span>x1</span>
        </div>
        <Prize prize={"5.59"} classname={"addPrize"} fontWeight={"bold"} />
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <h3>Order Menu</h3>
      <div className={styles.products}>{products}</div>
      <div className={styles.service}>
        <span>Service</span>
        <Prize prize={"1.00"} classname={"addPrize"} />
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <Prize prize={"202.00"} />
      </div>
    </div>
  );
}
