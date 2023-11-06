import styles from './sidebar.module.css'
export default function Sidebar () {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>GoMeal</span>
                <span>.</span>
            </div>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <img src='./assets/icon_home.svg' alt='home'/>
                    <span>Home</span>
                </div>
                <div className={styles.section}>
                    <img src='./assets/icon_food_order.svg' alt='food_order'/>
                    <span>Food Order</span>
                </div>
                <div className={styles.section}>
                    <img src='./assets/icon_favorite.svg' alt='home'/>
                    <span>Favorite</span>
                </div>
                <div className={styles.section}>
                    <img src='./assets/icon_order_history.svg' alt='home'/>
                    <span>Order History</span>
                </div>
                <div className={styles.section}>
                    <img src='./assets/icon_settings.svg' alt='home'/>
                    <span>Settings</span>
                </div>
            </div>
        </div>
    )
}