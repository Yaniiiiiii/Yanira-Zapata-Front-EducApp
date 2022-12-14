import { render, screen } from '@testing-library/react';
import { Menu } from '../menu/menu';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given the footer component', () => {
    describe('When we render the component', () => {
        test('Then should render the title', () => {
            render(
                <Router>
                    <footer className="footer">
                        <Menu></Menu>
                    </footer>
                </Router>
            );
            expect(screen.getByAltText('Home icon')).toBeInTheDocument();
        });
    });
});
