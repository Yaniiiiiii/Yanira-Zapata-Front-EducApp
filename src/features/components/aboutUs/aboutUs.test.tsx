import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AboutUsPage } from './aboutUs';

describe('Given AboutUsPage component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Power"', () => {
            render(
                <Router>
                    <AboutUsPage />
                </Router>
            );
            const element = screen.getByText(/Power/i);
            expect(element).toBeInTheDocument();
        });
    });
});
