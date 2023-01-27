import { Link } from 'react-router-dom';
import styles from './aboutUs.module.css';

export function AboutUsPage() {
    return (
        <section className={styles.aboutUs__Container}>
            <div className={styles.h2Container}>
                <h2 className={styles.about_h2}>
                    Unlocking the Power of the World's Educators
                </h2>
            </div>
            <div className={styles.p_Container}>
                <p className={styles.about_p}>
                    EducApp is the go-to platform created by teachers, for
                    teachers to access the community, content, and tools they
                    need to teach at their best. Founded in 2022, EducApp
                    provides a marketplace for teachers to exchange
                    instructional materials and access easy-to-use digital
                    tools.{' '}
                </p>
            </div>

            <div className={styles.header__logo}>
                <Link to="/resources">
                    <img src={'/assets/logo.jpg'} width="150px" alt="logo" />
                </Link>
            </div>
        </section>
    );
}
export default AboutUsPage;
