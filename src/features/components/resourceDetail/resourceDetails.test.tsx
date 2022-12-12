import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { appStore } from '../../../store/store';
import ResourceDetails from './resourceDetail';

jest.mock('../../../infrastructure/hooks/useResources');

describe('Given ResourceDetails page', () => {
    describe('When we render the component', () => {
        let formElements: Array<{ role: string; name: string }>;
        beforeEach(() => {
            formElements = [
                { role: 'textbox', name: 'title' },
                { role: 'textbox', name: 'subject' },
                { role: 'textbox', name: 'grade' },
                { role: 'textbox', name: 'description' },
                { role: 'textbox', name: 'pages' },
                { role: 'file', name: 'file' },
                { role: 'button', name: 'Create Resource' },
            ];
            (useResources as jest.Mock).mockReturnValue({
                handleLike: jest.fn(),
            });
            (useResources as jest.Mock).mockReturnValue({
                handleRemove: jest.fn(),
            });

            (useResources as jest.Mock).mockReturnValue({
                handleUpdate: jest.fn(),
            });

            render(
                <Provider store={appStore}>
                    <Router>
                        <ResourceDetails />
                    </Router>
                </Provider>
            );
        });

        test('Then it should display the word "listItem"', () => {
            const element = screen.getByRole('listitem');
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the  "heading" role', () => {
            const element = screen.getByRole('heading');
            expect(element).toBeInTheDocument();
        });

        test('Then it should click the "add favorites button"', () => {
            const element = screen.getAllByRole('button');
            userEvent.click(element[0]);
        });
        test('Then it should click the "delete favorites button"', () => {
            const element = screen.getAllByRole('button');
            userEvent.click(element[1]);
        });
        test('Then it should click the "edit favorites button"', () => {
            const element = screen.getAllByRole('button');
            userEvent.click(element[2]);
        });
    });
});
