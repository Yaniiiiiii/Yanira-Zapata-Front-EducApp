import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { resourceReducer } from '../../../infrastructure/reducer/resourceReducer';
import { usersReducer } from '../../../infrastructure/reducer/usersReducer';
import { mockResource } from '../../../mocks/mocks';
import { rootState, rootStore } from '../../../store/store';
import WorkingOnIt from './working';

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
                        <WorkingOnIt />
                    </Router>
                </Provider>
            );
            const element = screen.getByText(/working/i);

            expect(element).toBeInTheDocument();
        });
    });
});
