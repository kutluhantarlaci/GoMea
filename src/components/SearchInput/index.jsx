import styles from './searcInput.module.css'
import {Search} from '@/components/Icons'

export default function SearchInput () {
    const color = 'yellow'
    return (
        <div className={styles.container}>
            <Search style={{fill:`var(--${color})`}}/>
            <input type="text" placeholder='What do you want to eat today...'/>
        </div>
    )
}
