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
const AddResource = lazy(
    () => import('../features/components/addResource/addResource')
);
const FavoritePage = lazy(() => import('../features/pages/favPage/favPage'));

const AboutUs = lazy(() => import('../features/components/aboutUs/aboutUs'));

const WorkingInProgress = lazy(
    () => import('../features/pages/clientInfo/working')
);

const SearchReasources = lazy(
    () => import('../features/components/searchBar/searchBar')
);

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="" element={<LoginPage></LoginPage>}></Route>
                <Route
                    path=""
                    element={<SearchReasources></SearchReasources>}
                ></Route>

                <Route
                    path="/register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>
                <Route path="resources">
                    <Route
                        index
                        element={<ResourcesPage></ResourcesPage>}
                    ></Route>
                    <Route path=":id" element={<Details></Details>}></Route>
                </Route>
                <Route
                    path="/addResource"
                    element={<AddResource></AddResource>}
                ></Route>
                <Route
                    path="/favoritePage"
                    element={<FavoritePage></FavoritePage>}
                ></Route>
                <Route path="aboutUs" element={<AboutUs></AboutUs>}></Route>
                <Route
                    path="*"
                    element={<WorkingInProgress></WorkingInProgress>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
