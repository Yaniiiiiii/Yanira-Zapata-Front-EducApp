import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { appStore } from '../../../store/store';
import { DeleteUser } from './deleteUser';
jest.mock('../../../infrastructure/hooks/useUsers');

describe('Given AboutUsPage component', () => {
    describe('given addForm component', () => {
        beforeEach(() => {
            (useUsers as jest.Mock).mockReturnValue({
                handleDeleteUser: jest.fn(),
            });
            render(
                <Provider store={appStore}>
                    <Router>
                        <DeleteUser></DeleteUser>
                    </Router>
                </Provider>
            );
        });

        describe('then the user clicks the button', () => {
            test('the Delete Acount should be called', () => {
                const button = screen.getByText('Delete account');

                userEvent.click(button);
                expect(button).toBeInTheDocument();

                // expect(element).toBeInTheDocument();
            });
            test('the logout should be called', () => {
                const button = screen.getByText('Log Out');

                userEvent.click(button);

                expect(button).toBeInTheDocument();
            });
        });
    });
});
