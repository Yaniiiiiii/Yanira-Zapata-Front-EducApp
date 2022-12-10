import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/useUsers';

export function UserLogin() {
    const title = 'Welcome Back';
    const { users, handleLogin } = useUsers();

    const formInitialState = { email: '', password: '' };
    const [login, setLogin] = useState(formInitialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setLogin({ ...login, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(login);
        localStorage.setItem('token', users.token);
        setLogin(formInitialState);
    };

    return (
        <section>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    {' '}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={login.email}
                        onInput={handleInput}
                        required
                    ></input>
                </div>

                <div>
                    {' '}
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={login.password}
                        onInput={handleInput}
                        required
                    ></input>
                </div>

                <button className="loginButton" type="submit">
                    Login
                </button>
            </form>
        </section>
    );
}
export default UserLogin;
