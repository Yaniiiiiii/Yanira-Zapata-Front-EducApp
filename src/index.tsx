import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { appStore } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { RegisterForm } from './infrastructure/components/userRegister/register';
import { UserLogin } from './infrastructure/components/userLogin/userLogin';
import { AddResource } from './features/components/addResource/addResource';
import { DeleteUser } from './features/components/deleteUser/deleteUser';
import Footer from './infrastructure/components/footer/footer';
import { AppRoutes } from './routes/app.routes';
import ResourcesList from './features/components/resourceList/resourcesList';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={appStore}>
                <AppRoutes></AppRoutes>
                <DeleteUser></DeleteUser>
                <RegisterForm></RegisterForm>
                <UserLogin></UserLogin>
                <ResourcesList></ResourcesList>
                <AddResource></AddResource>

                <Footer></Footer>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
