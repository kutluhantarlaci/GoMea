"use client";
import styles from "./rightBar.module.css";
import ProfileBar from "@/components/ProfileBar";
import Balance from "@/components/Balance";
import Address from "@/components/Address";
import OrderMenu from "@/components/OrderMenu";
export default function RightBar() {
  return (
    <div className={styles.container}>
      <ProfileBar />
      <Balance />
      <Address />
      <OrderMenu />
    </div>
  );
}
