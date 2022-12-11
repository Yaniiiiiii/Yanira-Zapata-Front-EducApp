import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { Header } from './header';

describe('Given the Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "About"', () => {
            render(
                <Router>
                    <Header />
                </Router>
            );
            const element = screen.getByText(/About/i);
            expect(element).toBeInTheDocument();
        });
    });
});
