import { useDispatch } from 'react-redux';

import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { logoutActionCreatorUsers } from '../../../infrastructure/reducer/actionCreator';

export function DeleteUser() {
    const { handleDeleteUser } = useUsers();
    const dispatcher = useDispatch();

    const logout = () => {
        dispatcher(logoutActionCreatorUsers());
        localStorage.removeItem('token');
    };

    const handleRemoveUser = () => {
        handleDeleteUser();
    };

    return (
        <section className="delete--account">
            <h2>Please introduce your credentials to delete your account</h2>
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
            <button className="logOutUserButton" type="submit" onClick={logout}>
                Log Out
            </button>
            <button
                className="deleteUserButton"
                type="submit"
                onClick={handleRemoveUser}
            >
                Delete account
            </button>
        </section>
    );
}
