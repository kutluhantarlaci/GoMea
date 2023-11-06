import styles from './discountBox.module.css'

export default function DiscountBox() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h3>
                    Get Discount Voucher Up To 20%
                </h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </span>
            </div>
            <img src='./assets/image_woman.jpg' alt='woman'/>
        </div>
    )
}