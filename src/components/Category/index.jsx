import styles from './category.module.css'
import {Bakery, Burger, Beverage, Chicken, Pizza, Seafood} from '@/components/Icons'
import Link from 'next/link'
export default function Category () {

    const categoryList = [
        {
            name : 'Bakery',
            icon : <Bakery/>
        },{
            name : 'Burger',
            icon : <Burger/>
        },{
            name : 'Beverage',
            icon : <Beverage/>
        },{
            name : 'Chicken',
            icon : <Chicken/>
        },{
            name : 'Pizza',
            icon : <Pizza/>
        },{
            name : 'Seafood',
            icon : <Seafood/>
        }
    ]
    const categories = categoryList.map ((item,i) => {
        return (
            <Link key={`icon_${i}`} href={'/'} className={styles.iconCard}>
                {item.icon}
                {item.name}
            </Link>
        )
    })
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Category</h3>
                <Link href={'/'}>View all</Link>
            </div>
            <div className={styles.categoriesContainer}>
                {categories}
            </div>
        </div>
    )

}