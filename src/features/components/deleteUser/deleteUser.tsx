import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { logoutActionCreatorUsers } from '../../../infrastructure/reducer/actionCreator';
import styles from './deleteUser.module.css';

export function DeleteUser() {
    const navigate = useNavigate();
    const { handleDeleteUser } = useUsers();
    const dispatcher = useDispatch();

    const logout = () => {
        dispatcher(logoutActionCreatorUsers());
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleRemoveUser = () => {
        handleDeleteUser();
    };

    return (
        <section className={styles.delete_account}>
            <h2 className={styles.delete_h2}>What do you want to do?</h2>
            <button
                className={styles.logOutUserButton}
                type="submit"
                onClick={logout}
            >
                Log Out
            </button>
            <button
                className={styles.deleteUserButton}
                type="submit"
                onClick={handleRemoveUser}
            >
                Delete account
            </button>
            <div className={styles.deleteUser__logo}>
                <Link to="/">
                    <img src={'/assets/logo.jpg'} width="150px" alt="logo" />
                </Link>
            </div>
        </section>
    );
}
