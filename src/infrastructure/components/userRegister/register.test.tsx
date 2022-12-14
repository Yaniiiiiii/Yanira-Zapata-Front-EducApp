import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { rootState, rootStore } from '../../../store/store';
import { useUsers } from '../../hooks/useUsers';
import { resourceReducer } from '../../reducer/resourceReducer';
import { usersReducer } from '../../reducer/usersReducer';
import { RegisterForm } from './register';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../hooks/useUsers');
const preloadedState: rootState = {
    resources: [],
    users: {
        isLogged: false,
        isLogging: false,
        user: null,
        token: '',
    },
};
const mockStore: rootStore = configureStore({
    reducer: {
        resources: resourceReducer,
        users: usersReducer,
    },
    preloadedState,
});

const navigate = jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => ({
        navigate: jest.fn().mockImplementation(() => ({})),
    }),
}));

describe('Given the user Register  component', () => {
    let formElm: Array<{ role: string; name: string }>;
    describe('When we submit the form', () => {
        beforeEach(() => {
            formElm = [
                { role: 'textbox', name: '' },
                { role: 'textbox', name: '' },
            ];
            render(
                <Provider store={mockStore}>
                    <Router>
                        {' '}
                        <RegisterForm />
                    </Router>
                </Provider>
            );
        });
        test('the handleinput must be called..', () => {
            const input = screen.getAllByRole(formElm[0].role, {
                name: formElm[0].name,
            });
            userEvent.type(input[0], 'name');
            expect(input[0]).toHaveValue('name');
        });
        test('Then it should render the logIn form', () => {
            (useUsers as jest.Mock).mockReturnValue({
                users: {},
                handleLogin: jest.fn(),
                navigate,
            });

            const input = screen.getByPlaceholderText(
                /email/i
            ) as HTMLFormElement;
            fireEvent.change(input, { target: { value: 'email' } });

            const element = screen.getByRole('button');
            userEvent.click(element);
            expect(element).toBeInTheDocument();
        });
    });
});
