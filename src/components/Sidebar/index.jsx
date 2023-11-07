'use client'
import styles from './sidebar.module.css'
import {Home, FoodOrder, Favorite, OrderHistory, Settings} from '@/components/Icons'
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function Sidebar () {
    const pathname = usePathname()
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>GoMeal</span>
                <span>.</span>
            </div>
            <div className={styles.sections}>
                <Link href={'/'} className={`${styles.section} ${ pathname === '/' ? styles.active : ''}`}>
                    <Home/>
                    <span>Home</span>
                </Link>
                <Link href={'/foodOrder'} className={`${styles.section} ${ pathname === '/foodOrder' ? styles.active : ''}`}>
                    <FoodOrder/>
                    <span>Food Order</span>
                </Link>
                <Link href={'/favorites'} className={`${styles.section} ${ pathname === '/favorites' ? styles.active : ''}`}>
                    <Favorite/>
                    <span>Favorite</span>
                </Link>
                <Link href={'/orderHistory'} className={`${styles.section} ${ pathname === '/orderHistory' ? styles.active : ''}`}>
                    <OrderHistory/>
                    <span>Order History</span>
                </Link>
                <Link href={'/settings'} className={`${styles.section} ${ pathname === '/settings' ? styles.active : ''}`}>
                    <Settings/>
                    <span>Settings</span>
                </Link>
            </div>
        </div>
    )
}