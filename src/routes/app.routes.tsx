import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import('../'));
const Details = lazy(
    () => import('../features/components/resourceDetail/resourceDetail')
);
// const FavPage = lazy(() => import('../../../features/favorite/fav.page'));
const AboutUs = lazy(() => import('../features/components/aboutUs/aboutUs'));
const ResourceList = lazy(
    () => import('../features/components/resourceList/resourcesList')
);

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="resources">
                    <Route
                        index
                        element={<ResourceList></ResourceList>}
                    ></Route>
                    <Route path=":id" element={<Details></Details>}></Route>
                </Route>

                {/* <Route path="/Favorites" element={}></Route> */}
                <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
            </Routes>
        </Suspense>
    );
}
