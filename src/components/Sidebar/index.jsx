"use client";
import styles from "./sidebar.module.css";
import { Icon } from "@/components";
import FoodOrderModal from "@/components/FoodOrderModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <FoodOrderModal handleClose={handleCloseModal} />}
      <div className={styles.container}>
        <div className={styles.title}>
          <span>GoMeal</span>
          <span>.</span>
        </div>
        <div className={styles.sections}>
          <Link
            href={"/"}
            className={`${styles.section} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            <Icon name="Home" />
            <span>Home</span>
          </Link>
          <Link
            onClick={() => {
              setShowModal(!showModal);
            }}
            href={"/foodOrder"}
            className={`${styles.section} ${
              pathname === "/foodOrder" ? styles.active : ""
            }`}
          >
            <Icon name="FoodOrder" />
            <span>Food Order</span>
          </Link>
          <Link
            href={"/favorites"}
            className={`${styles.section} ${
              pathname === "/favorites" ? styles.active : ""
            }`}
          >
            <Icon name="Favorite" />
            <span>Favorites</span>
          </Link>
          <Link
            href={"/orderHistory"}
            className={`${styles.section} ${
              pathname === "/orderHistory" ? styles.active : ""
            }`}
          >
            <Icon name="OrderHistory" />
            <span>Order History</span>
          </Link>
          <Link
            href={"/settings"}
            className={`${styles.section} ${
              pathname === "/settings" ? styles.active : ""
            }`}
          >
            <Icon name="Settings" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </>
  );
}
