import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { ResourcesList } from './resourcesList';
import { resourceReducer } from '../../../infrastructure/reducer/resourceReducer';
import { usersReducer } from '../../../infrastructure/reducer/usersReducer';
import { rootStore } from '../../../store/store';
import { mockResource, mockResources } from '../../../mocks/mocks';
import { useResources } from '../../../infrastructure/hooks/useResources';

jest.mock('../../../infrastructure/hooks/useResources');
describe('Given ResourceList component', () => {
    const mockStore: rootStore = configureStore({
        reducer: {
            resources: resourceReducer,
            users: usersReducer,
        },
    });
    describe('When we render the component', () => {
        test('then it should display the Resource List', () => {
            (useResources as jest.Mock).mockReturnValue({
                resources: [],
                handleLoad: jest.fn(),
            });
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
        test('then it should display the Resource list', () => {
            (useResources as jest.Mock).mockReturnValue({
                resources: mockResources,
                handleLoad: jest.fn(),
            });
            render(
                <Provider store={mockStore}>
                    <Router>
                        <ResourcesList />
                    </Router>
                </Provider>
            );

            const element = screen.getAllByText('reading');
            expect(element[0]).toBeInTheDocument();
        });
        // test('then it should display the Resource List...', () => {

        //     render(
        //         <Provider store={mockStore}>
        //             <Router>
        //                 <ResourcesList key={mockResource}/>
        //             </Router>
        //         </Provider>
        //     );
        //     const element = screen.getByText('reading');
        //     expect(element).toBeInTheDocument();
        // });
    });
});
