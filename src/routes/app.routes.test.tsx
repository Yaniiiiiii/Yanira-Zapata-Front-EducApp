import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

jest.mock('../infrastructure/components/userLogin/userLogin', () => {
    return () => <p>login</p>;
});

jest.mock('../infrastructure/components/userRegister/register', () => {
    return () => <div>Test Register</div>;
});

jest.mock('../features/components/resourceList/resourcesList', () => {
    return () => <div>Test List</div>;
});
jest.mock('../features/components/resourceDetail/resourceDetail', () => {
    return () => <div>details</div>;
});
jest.mock('../features/components/addResource/addResource', () => {
    return () => <div>Test Add</div>;
});

jest.mock('../features/pages/favPage/favPage', () => {
    return () => <div>Test Fav</div>;
});

jest.mock('../features/components/aboutUs/aboutUs', () => {
    return () => <div>Test about</div>;
});
jest.mock('../features/pages/clientInfo/working', () => {
    return () => <div>Test progress</div>;
});

describe('Given AppRoutes component', () => {
    let paths: Array<string>;

    beforeEach(() => {
        paths = [
            '/',
            '/register',
            '/resources/1234567',
            '/addResource',
            '/favoritePage',
            '/aboutUs',
            '/resources',
            '/inprogress',
        ];
    });

    describe('when we render the component and the route is log in', () => {
        test('then it should display the Login Page', async () => {
            render(
                <Router initialEntries={paths} initialIndex={0}>
                    <AppRoutes></AppRoutes>
                </Router>
            );
            const element = await screen.findByText('login');
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is register', () => {
        test('then it should display the RegisterPage', async () => {
            render(
                <Router initialEntries={paths} initialIndex={1}>
                    <AppRoutes />
                </Router>
            );
            const element = await screen.findByText(/test register/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and route is /:id', () => {
        test('then it should display the resource page', async () => {
            render(
                <Router initialEntries={paths} initialIndex={2}>
                    <AppRoutes></AppRoutes>
                </Router>
            );
            const element = await screen.findByText('details');
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is add', () => {
        test('then it should display the add resource Page', async () => {
            render(
                <Router initialEntries={paths} initialIndex={3}>
                    <AppRoutes></AppRoutes>
                </Router>
            );
            const element = await screen.findByText('Test Add');
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is Test about', () => {
        test('then it should display the Test about Page', async () => {
            render(
                <Router initialEntries={paths} initialIndex={5}>
                    <AppRoutes></AppRoutes>
                </Router>
            );
            const element = await screen.findByText('Test about');
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is FavPage', () => {
        test('then it should display the Login Page', async () => {
            render(
                <Router initialEntries={paths} initialIndex={4}>
                    <AppRoutes></AppRoutes>
                </Router>
            );
            const element = await screen.findByText('Test Fav');
            expect(element).toBeInTheDocument();
        });
    });
    describe('when we render the component and the route is resources', () => {
        test('then it should display the resourceslist', async () => {
            render(
                <Router initialEntries={paths} initialIndex={6}>
                    <AppRoutes></AppRoutes>
                </Router>
            );
            const element = await screen.findByText('Test List');
            expect(element).toBeInTheDocument();
        });
    });
    describe('when we render the component and the route is workin in progress', () => {
        test('then it should display the resourceslist', async () => {
            render(
                <Router initialEntries={paths} initialIndex={7}>
                    <AppRoutes></AppRoutes>
                </Router>
            );
            const element = await screen.findByText('Test progress');
            expect(element).toBeInTheDocument();
        });
    });
});
