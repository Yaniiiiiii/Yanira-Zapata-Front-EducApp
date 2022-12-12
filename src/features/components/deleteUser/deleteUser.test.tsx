import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { appStore } from '../../../store/store';
import { DeleteUser } from './deleteUser';

describe('Given AboutUsPage component', () => {
    describe('given addForm component', () => {
        beforeEach(() => {
            // (useUsers as jest.Mock).mockReturnValue({
            //     handleDeleteUser: jest.fn(),
            // });

            render(
                <Provider store={appStore}>
                    <Router>
                        <DeleteUser></DeleteUser>
                    </Router>
                </Provider>
            );
        });

        describe('then the user clicks the button', () => {
            test('the logout should be called', () => {
                // const button = screen.getByRole();
                // userEvent.click(button);
                const result = useUsers().handleDeleteUser;
                expect(result).toHaveBeenCalled();
                //    const button = screen.getByRole('button');
                // expect(fireEvent.click(button)).toBe(true);
                // expect(element).toBeInTheDocument();
            });
        });
    });
});
