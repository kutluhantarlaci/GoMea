import styles from "./payment.module.css";
export default function Payment() {
  return (
    <div className={styles.container}>
      <span>Payment</span>
      <form className={styles.form}>
        <input type="text" placeholder="Card Holder Name" />
        <input type="text" placeholder="Card Number" />
        <div className={styles.halfInputs}>
          <input type="text" placeholder="CVV" />
          <input type="text" placeholder="MM/YY" />
        </div>
      </form>
    </div>
  );
}
