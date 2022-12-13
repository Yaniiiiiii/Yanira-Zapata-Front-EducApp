import { Link } from 'react-router-dom';
import styles from './working.module.css';

export function WorkingOnIt() {
    return (
        <section className={styles.sectionWorkingOnIt}>
            <div className={styles.WorkingOnIt}>
                <p>We are working on it....</p>
                <Link to="/resources">
                    <img src="/assets/logo.jpg" width={'200px'} alt="logo2" />
                </Link>{' '}
                <p>'Sorry for any inconvenience'</p>
            </div>
        </section>
    );
}
export default WorkingOnIt;
