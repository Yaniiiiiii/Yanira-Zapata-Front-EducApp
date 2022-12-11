import { UsersRepository } from '../../../infrastructure/services/usersRepo/users.repository';

export function DeleteUser() {
    // const navigate = useNavigate();
    // const { users } = useUsers();
    // const user = users.user;
    const serviceUser = new UsersRepository();

    // const logout = () => {
    //     localStorage.removeItem('token');
    //     // navigate('/home');
    // };
    const handleRemoveUser = () => {
        serviceUser.deleteUser();
        localStorage.removeItem('token');
        // navigate('/home');
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
