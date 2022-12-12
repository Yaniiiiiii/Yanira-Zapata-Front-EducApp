import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { resourceReducer } from '../../../infrastructure/reducer/resourceReducer';
import { usersReducer } from '../../../infrastructure/reducer/usersReducer';
import { mockResource } from '../../../mocks/mocks';
import { appStore, rootState, rootStore } from '../../../store/store';
import FavoritePage from './favPage';

describe('Given the Header component', () => {
    const preloadedState: rootState = {
        resources: [],
        users: {
            isLogged: false,
            isLogging: false,
            user: {
                id: '1',
                name: 'Ana',
                email: 'ana@gmail.com',
                role: 'Teacher',
                school: 'Peete',
                grade: 'first',
                favorites: [mockResource],
                password: 'string',
                resources: [],
            },
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
    describe('When we render the component', () => {
        test('Then it should display the title and the button should be clicked', () => {
            render(
                <Provider store={mockStore}>
                    {' '}
                    <Router>
                        <FavoritePage />
                    </Router>
                </Provider>
            );
            const element = screen.getByText(/Resources/i);
            const button = screen.getByRole('button');
            expect(fireEvent.click(button)).toBe(true);
            expect(element).toBeInTheDocument();
        });

        test.skip('Then it should display the .', () => {
            render(
                <Provider store={appStore}>
                    {' '}
                    <Router>
                        <FavoritePage />
                    </Router>
                </Provider>
            );
            const element = screen.getByRole(/user/i);
            expect(element).toBeInTheDocument();
        });
    });
});
