import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockResource } from '../../../mocks/mocks';
import { appStore } from '../../../store/store';
import ResourceItem from './resourceItem';

jest.mock('@auth0/auth0-react');

describe('Given the Resource Item component', () => {
    describe('When is authenticated', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    {' '}
                    <Router>
                        <ResourceItem item={mockResource} />
                    </Router>
                </Provider>
            );
        });

        describe('And we are in the fav page', () => {
            // beforeEach(() => {
            // //     Object.defineProperty(window, 'location', {
            // //         value: {
            // //             pathname: '/Fav',
            // //         },
            // //     });
            // // });

            test('then it should display the resource', () => {
                expect(
                    screen.getByDisplayValue(mockResource.subject)
                ).toBeInTheDocument();
            });
        });
    });
});
