import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { rootState, rootStore } from '../../../store/store';
import { resourceReducer } from '../../reducer/resourceReducer';
import { usersReducer } from '../../reducer/usersReducer';
import { UserLogin } from './userLogin';

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
        // eslint-disable-next-line @typescript-eslint/ban-types

        test('Then it should render the logIn form', () => {
            render(
                <Provider store={mockStore}>
                    <UserLogin />
                </Provider>
            );

            const formInput = screen.getAllByRole('textbox');
            fireEvent.change(formInput[0], { target: { value: 'test' } });
            const element = screen.getByRole('button');
            userEvent.click(element);
            expect(formInput[0]).toBeInTheDocument();
        });

        // test('Then it should render the logIn form', () => {
        //     render(
        //         <Provider store={mockStore}>
        //             <UserLogin />
        //         </Provider>
        //     );

        //     const element = screen.getByRole('button');

        // });
    });
});
