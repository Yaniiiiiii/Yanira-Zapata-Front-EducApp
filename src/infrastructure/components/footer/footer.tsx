import { Menu } from '../menu/menu';
import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Menu></Menu>
        </footer>
    );
}
export default Footer;
