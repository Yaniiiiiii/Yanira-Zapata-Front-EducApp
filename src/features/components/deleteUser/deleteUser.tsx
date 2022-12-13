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
        navigate('/login');
    };

    const handleRemoveUser = () => {
        handleDeleteUser();
        navigate('/login');
    };

    return (
        <section className={styles.delete_account}>
            <h2 className={styles.delete_h2}>
                Please introduce your credentials to delete your account
            </h2>
            {/* <div className="form__name">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={}
                    onInput={handleInput}
                    required
                />
            </div>
            <div className="form__password">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={deleteUser.password}
                    onInput={handleInput}
                    required
                />
            </div> */}
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
                <Link to="/login">
                    <img src={'./assets/logo.jpg'} width="150px" alt="logo" />
                </Link>
            </div>
        </section>
    );
}
