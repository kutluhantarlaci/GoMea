"use client";
import styles from "./rightbar.module.css";
import { ProfileBar, Balance, Address, OrderMenu } from "@/components";
export default function Rightbar() {
  return (
    <div className={styles.container}>
      <ProfileBar />
      <Balance />
      <Address />
      <OrderMenu />
    </div>
  );
}
