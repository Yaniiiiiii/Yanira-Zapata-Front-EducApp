import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import style from './userLogin.module.css';

export function UserLogin() {
    const title = 'Welcome Back!';
    const navigate = useNavigate();
    const { handleLogin } = useUsers();

    const formInitialState = { email: '', password: '' };
    const [login, setLogin] = useState(formInitialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setLogin({ ...login, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(login);
        setLogin(formInitialState);
        navigate('/resources');
    };

    return (
        <section>
            <div className={style.login}>
                <h2 className={style.h2__login}>{title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.form__inputs}>
                        <input
                            className={style.form__input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={login.email}
                            onInput={handleInput}
                            required
                        ></input>{' '}
                        <input
                            className={style.form__input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={login.password}
                            onInput={handleInput}
                            required
                        ></input>
                        <button className={style.form__button} type="submit">
                            Login
                        </button>
                    </div>
                </form>
                <p className={style.p_login}>or</p>
                <p>
                    Do you already have an account?{' '}
                    <Link className={style.link_login} to="/register">
                        Register
                    </Link>
                </p>
            </div>
            <div className={style.img}>
                <img src={'/assets/logo.jpg'} width="120px" alt="logo" />
            </div>
        </section>
    );
}
export default UserLogin;
