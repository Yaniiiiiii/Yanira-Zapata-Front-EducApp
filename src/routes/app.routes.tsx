import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(
    () => import('../infrastructure/components/userLogin/userLogin')
);
const RegisterPage = lazy(
    () => import('../infrastructure/components/userRegister/register')
);
const ResourcesPage = lazy(
    () => import('../features/components/resourceList/resourcesList')
);
const Details = lazy(
    () => import('../features/components/resourceDetail/resourceDetail')
);
const AddResources = lazy(
    () => import('../features/components/addResource/addResource')
);
const FavoritePage = lazy(() => import('../features/pages/favPage/favPage'));

const AboutUs = lazy(() => import('../features/components/aboutUs/aboutUs'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route
                    path="/register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>
                <Route path=":id" element={<Details></Details>}></Route>
                <Route path="/resources">
                    <Route
                        index
                        element={<ResourcesPage></ResourcesPage>}
                    ></Route>
                </Route>
                <Route
                    path="/addResource"
                    element={<AddResources></AddResources>}
                ></Route>
                <Route
                    path="/favoritePage"
                    element={<FavoritePage></FavoritePage>}
                ></Route>
                <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
            </Routes>
        </Suspense>
    );
}
