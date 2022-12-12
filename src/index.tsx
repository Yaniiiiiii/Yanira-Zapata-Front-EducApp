import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { appStore } from './store/store';
import { BrowserRouter } from 'react-router-dom';

import App from './infrastructure/components/App/app';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={appStore}>
                <App></App>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
