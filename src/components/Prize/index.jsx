import styles from './prize.module.css'

export default function Prize ({prize, classname='',fontWeight=''}) {
    return (
        <div className={`${styles.container} ${styles[fontWeight]} ${styles[classname]}`}>
            <span>+</span>
            <span>$</span>
            <span>{prize}</span>
        </div>
    )
}