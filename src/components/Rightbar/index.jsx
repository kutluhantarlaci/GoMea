"use client";
import styles from "./rightbar.module.css";
import {
  ProfileBar,
  Balance,
  Address,
  OrderMenu,
  CouponButton,
  CustomButton,
} from "@/components";
export default function Rightbar() {
  return (
    <div className={styles.container}>
      <ProfileBar />
      <Balance />
      <Address />
      <OrderMenu />
      <CouponButton size={"xLarge"} />
      <CustomButton classname={"contained"} text={"Checkout"} size={"xLarge"} />
    </div>
  );
}
