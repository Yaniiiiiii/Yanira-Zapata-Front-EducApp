import { SyntheticEvent, useState } from 'react';
import { UsersRepository } from '../../services/usersRepo/users.repository';

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
            <section className="form">
                <h2>Create an account</h2>
                <h3>Let's get started!</h3>
                <form onSubmit={handleRegister}>
                    <div className="form__name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__password">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__school">
                        <input
                            type="text"
                            name="school"
                            placeholder="School"
                            value={formState.school}
                            onInput={handleInput}
                            required
                            // minlength="9"
                        />
                    </div>
                    <div className="form__subject">
                        <input
                            type="text"
                            name="subject"
                            placeholder="subject"
                            value={formState.subject}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <button type="submit" className="form__button">
                        Create account
                    </button>
                </form>
            </section>
        </>
    );
}
