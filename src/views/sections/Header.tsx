import styles from "./css/Header.module.css"

function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>Alejandro</h1>
            <p className={styles.headerEmail}>
                <a href="mailto:alejandro_santillan_2000@hotmail.com" className={styles.headerEmailEnlace}>alejandro_santillan_2000@hotmail.com</a>
            </p>
        </div>

    )
}

export default Header