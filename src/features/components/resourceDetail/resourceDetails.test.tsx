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

        test('then the typed text in second input should be on the screen', () => {
            const mockTyped = 'test';

            const input = screen.getByRole(formElements[0].role, {
                name: formElements[0].name,
            });

            userEvent.type(input, mockTyped);

            expect(input).toHaveValue(mockTyped);
        });

        // test('Then it should display the word "name"', () => {
        //     const title = /name/i;
        //     const element = screen.(title);
        //     expect(element).toBeInTheDocument();
        // });

        test('Then it should display the word "gender"', () => {
            const title = /subject/i;
            const element = screen.getAllByRole(title);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "format"', () => {
            const title = /format/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display the word "price"', () => {
            const title = /price/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });

        test('then it should display a target with alt attribute', () => {
            const element = screen.getByAltText(/cover/i);
            expect(element).toBeInTheDocument();
        });

        test('the handleAdd from the custom hook should be called', () => {
            const button = screen.getByRole(formElements[7].role);
            userEvent.click(button);
            const result = useResources().handleAdd;
            expect(result).toHaveBeenCalled();
        });
    });
});
