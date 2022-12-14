import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { appStore } from '../../../store/store';
import { AddResource } from './addResource';

jest.mock('../../../infrastructure/hooks/useResources');

describe('given addForm component', () => {
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

        (useResources as jest.Mock).mockReturnValue({ handleAdd: jest.fn() });

        render(
            <Provider store={appStore}>
                <Router>
                    <AddResource></AddResource>
                </Router>
            </Provider>
        );
    });

    describe('when the user types in the inputs', () => {
        test('then the typed text in second input should be on the screen', () => {
            const mockTyped = 'test';

            const input = screen.getByRole(formElements[0].role, {
                name: formElements[0].name,
            });

            userEvent.type(input, mockTyped);

            expect(input).toHaveValue(mockTyped);
        });
    });

    describe('then the user clicks the button', () => {
        test('the handleAdd from the custom hook should be called', () => {
            const button = screen.getByRole(formElements[6].role);
            userEvent.click(button);
            const result = useResources().handleAdd;
            expect(result).toHaveBeenCalled();
        });
    });
});
