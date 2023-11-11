import styles from "./balance.module.css";
export default function Balance() {
  const color = "yellow";
  return (
    <div className={styles.container}>
      <h3>Your Balance</h3>
      <div className={styles.balance}>
        <div className={styles.balanceBox}>
          <span>Balance</span>
          <span>$12.000</span>
        </div>
      </div>
    </div>
  );
}
