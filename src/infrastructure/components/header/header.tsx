import { Link } from 'react-router-dom';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to="/resources">
                    <img src={'/assets/logo.jpg'} width="92px" alt="logo" />
                </Link>
            </div>
            <div className={styles.header__right}>
                <div className={styles.headerabout}>
                    <Link to="/aboutUs" className={styles.header__aboutUs}>
                        About us
                    </Link>
                </div>
                <div>
                    <Link to="/inprogress">
                        <img src={'/assets/cart.png'} alt="cart" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
