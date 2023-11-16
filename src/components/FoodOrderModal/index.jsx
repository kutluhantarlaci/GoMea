import styles from "./foodOrderModal.modules.css";
import {
  Address,
  Balance,
  CouponButton,
  CustomButton,
  Icon,
  OrderMenu,
  Payment,
  ProfileBar,
} from "@/components";

export default function FoodOrderModal({ handleClose }) {
  return (
    <div className={styles.background}>
      <button className={styles.closeBtn} onClick={handleClose}>
        <Icon name="Close" />
      </button>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <ProfileBar />
          <OrderMenu />
        </div>
        <div className={styles.rightColumn}>
          <Balance />
          <Address />
          <Payment />
          <div className={styles.buttons}>
            <CouponButton size={"large"} />
            <CustomButton
              classname={"contained"}
              text={"Complete"}
              size={"medium"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
