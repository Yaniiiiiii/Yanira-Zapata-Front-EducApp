import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
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

describe('Given the user Login  component', () => {
    describe('When we submit the form', () => {
        test('Then it should render the logIn form', () => {
            (useUsers as jest.Mock).mockReturnValue({
                users: {},
                handleLogin: jest.fn(),
            });

            render(
                <Provider store={mockStore}>
                    <UserLogin />
                </Provider>
            );

            const input = screen.getByPlaceholderText(
                /email/i
            ) as HTMLFormElement;
            fireEvent.change(input, { target: { value: 'email' } });

            const element = screen.getByRole('button');
            userEvent.click(element);
        });
    });
});
