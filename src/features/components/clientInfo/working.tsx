import { Link } from 'react-router-dom';
import styles from './working.module.css';

function WorkingOnIt() {
    return (
        <section className={styles.sectionWorkingOnIt}>
            <p className={styles.pWorkingOnIt}>We are working on it....</p>
            <div className={styles.WorkingOnIt}>
                <Link to="/resources">
                    <img src="/assets/logo.jpg" width={'200px'} alt="logo2" />
                </Link>{' '}
            </div>
            <p className={styles.pWorkingOnIt}>'Sorry for any inconvenience'</p>
        </section>
    );
}
export default WorkingOnIt;
