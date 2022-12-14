import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DeleteUser } from '../features/components/deleteUser/deleteUser';
import WorkingOnIt from '../features/pages/clientInfo/working';

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
                <Route path="" element={<LoginPage></LoginPage>}></Route>
                <Route
                    path="/register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>

                <Route path="/resources">
                    <Route
                        index
                        element={<ResourcesPage></ResourcesPage>}
                    ></Route>
                    <Route path=":id" element={<Details></Details>}></Route>
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
                <Route
                    path="//userAccount"
                    element={<DeleteUser></DeleteUser>}
                ></Route>
                <Route
                    path="/inprogress"
                    element={<WorkingOnIt></WorkingOnIt>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
