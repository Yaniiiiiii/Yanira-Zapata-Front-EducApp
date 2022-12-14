import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { rootState, rootStore } from '../../../store/store';
import { useUsers } from '../../hooks/useUsers';
import { resourceReducer } from '../../reducer/resourceReducer';
import { usersReducer } from '../../reducer/usersReducer';
import { UserLogin } from './userLogin';

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

describe('Given the user Login  component', () => {
    describe('When we submit the form', () => {
        let formElm: Array<{ role: string; name: string }>;
        beforeEach(() => {
            formElm = [
                { role: 'textbox', name: '' },
                { role: 'textbox', name: '' },
            ];
            (useUsers as jest.Mock).mockReturnValue({
                users: {},
                handleLogin: jest.fn(),
                navigate,
            });
            render(
                <Router>
                    {' '}
                    <Provider store={mockStore}>
                        <UserLogin />
                    </Provider>
                </Router>
            );
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
        });

        test('the handleinput must be called..', () => {
            const input = screen.getAllByRole(formElm[0].role, {
                name: formElm[0].name,
            });
            userEvent.type(input[0], 'name');
            expect(input[0]).toHaveValue('name');
        });
    });
});
