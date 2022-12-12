import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { ResourcesList } from './resourcesList';
import { resourceReducer } from '../../../infrastructure/reducer/resourceReducer';
import { usersReducer } from '../../../infrastructure/reducer/usersReducer';
import { rootStore } from '../../../store/store';

describe('Given ResourceList component', () => {
    const mockStore: rootStore = configureStore({
        reducer: {
            resources: resourceReducer,
            users: usersReducer,
        },
    });
    describe('When we render the component', () => {
        test('then it should display the Resource List', () => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <ResourcesList />
                    </Router>
                </Provider>
            );
            const element = screen.getByText(/loading/i);
            expect(element).toBeInTheDocument();
        });
        test.skip('then it should display the Resource List...', () => {
            render(
                <Provider store={mockStore}>
                    <Router>
                        <ResourcesList />
                    </Router>
                </Provider>
            );
            const element = screen.getAllByPlaceholderText(/password/i);
            expect(element).toBeInTheDocument();
        });
    });
});
