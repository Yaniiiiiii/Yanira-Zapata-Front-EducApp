import { SyntheticEvent, useState } from 'react';
import { UsersRepository } from '../../services/usersRepo/users.repository';
import styles from './register.module.css';

type formData = {
    name: string;
    email: string;
    password: string;
    school: string;
    subject: string;
};

export function RegisterForm() {
    const UserRepo = new UsersRepository();

    const initialState: formData = {
        name: '',
        email: '',
        school: '',
        password: '',
        subject: '',
    };

    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleRegister = (ev: SyntheticEvent) => {
        ev.preventDefault();
        UserRepo.register(formState);
        setFormState(initialState);
    };

    return (
        <>
            <section className={styles.form}>
                <h2 className={styles.form__title1}>Create an account</h2>
                <h3 className={styles.form__title2}>Let's get started!</h3>
                <form onSubmit={handleRegister}>
                    <div className={styles.form__input}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name and last name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles.form__input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className={styles.form__input}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className={styles.form__input}>
                        <input
                            type="text"
                            name="school"
                            placeholder="School where you teach"
                            value={formState.school}
                            onInput={handleInput}
                        />
                    </div>
                    <div className={styles.form__input}>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject you teach"
                            value={formState.subject}
                            onInput={handleInput}
                        />
                    </div>
                    <button type="submit" className={styles.form__button}>
                        Create account
                    </button>
                </form>
            </section>
        </>
    );
}
export default RegisterForm;
