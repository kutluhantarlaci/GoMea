import styles from './searcInput.module.css'
export default function SearchInput () {
    return (
        <div className={styles.container}>
            <img src='./assets/icon_search.svg' alt='search'/>
            <input type="text" placeholder='What do you want to eat today'/>
        </div>
    )
}