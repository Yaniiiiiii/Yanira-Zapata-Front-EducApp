import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import App from './app';

interface CryptoPlus extends Crypto {
    randomBytes: (arr: number) => void;
    subtle: SubtleCrypto;
}

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: (arr: number) =>
            (crypto as CryptoPlus).randomBytes(arr),
    },
});
(global.crypto as CryptoPlus).subtle = {} as SubtleCrypto;

test('renders learn react link', () => {
    render(
        <Provider store={appStore}>
            <Router>
                {' '}
                <App />
            </Router>
        </Provider>
    );
    const linkElement = screen.getByRole('generic');
    expect(linkElement).toBeInTheDocument();
});
