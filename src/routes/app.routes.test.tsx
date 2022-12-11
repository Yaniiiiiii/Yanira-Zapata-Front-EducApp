import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

jest.mock('../infrastructure/components/userLogin/userLogin', () => {
    return () => <div>Test Login</div>;
});

jest.mock('../infrastructure/components/userRegister/register', () => {
    return () => <div>Test Register</div>;
});

jest.mock('../features/components/resourceDetail/resourceDetail', () => {
    return () => <div>details</div>;
});
jest.mock('../features/components/addResource/addResource', () => {
    return () => <div>Test Add</div>;
});

jest.mock('../features/components/resourceList/resourcesList', () => {
    return () => <div>Test List</div>;
});

jest.mock('../features/pages/favPage/favPage', () => {
    return () => <div>Test Fav</div>;
});

jest.mock('../features/components/aboutUs/aboutUs', () => {
    return () => <div>Test about</div>;
});

jest.mock('../features/components/searchBar/searchBar', () => {
    return () => <div>Test searchBar</div>;
});

describe('Given AppRoutes component', () => {
    let paths: Array<string>;

    beforeEach(() => {
        paths = [
            '/',
            '/register',
            '/:id',
            '/addResource',
            '/resources',
            '/favoritePage',
            '/aboutUs',
            '/search',
        ];
    });

    describe('when we render the component and the route is home', () => {
        render(
            <Router initialEntries={paths} initialIndex={0}>
                <AppRoutes></AppRoutes>
            </Router>
        );

        test('then it should display the Login Page', async () => {
            const element = await screen.findByText(/test login/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is register', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={1}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the RegisterPage', async () => {
            const element = await screen.findByText(/test register/i);
            expect(element).toBeInTheDocument();
        });
    });

    // describe('when we render the component and the route is add Resource Page', () => {
    //     beforeEach(async () => {
    //         await act(async () => {
    //             render(
    //                 <Router initialEntries={paths} initialIndex={2}>
    //                     <AppRoutes />
    //                 </Router>
    //             );
    //         });
    //     });

    //     test('then it should display the add Resource Page', async () => {
    //         const element = await screen.findByText(/Test details/i);
    //         expect(element).toBeInTheDocument();
    //     });

    describe('when we render the component and the route is add', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={3}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the Add Resource Page', async () => {
            const element = await screen.findByText(/test add/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is teh list of resources', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={4}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the Test List', async () => {
            const element = await screen.findByText(/Test List/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('when we render the component and the route is FavPage', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={5}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the Fav Page', async () => {
            const element = await screen.findByText(/Test Fav/i);
            expect(element).toBeInTheDocument();
        });
    });

    // describe('when we render the component and the route is aboutUs', () => {
    //     beforeEach(async () => {
    //         await act(async () => {
    //             render(
    //                 <Router initialEntries={paths} initialIndex={6}>
    //                     <AppRoutes />
    //                 </Router>
    //             );
    //         });
    //     });

    //     test('then it should display the aboutUs page', async () => {
    //         const element = await screen.findByText(/test aboutUs/i);
    //         expect(element).toBeInTheDocument();
    //     });
    // });
    describe('when we render the component and the route is searchBar', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={7}>
                        <AppRoutes />
                    </Router>
                );
            });
        });

        test('then it should display the searchBar page', async () => {
            const element = await screen.findByText(/test searchBar/i);
            expect(element).toBeInTheDocument();
        });
    });
});
//});
