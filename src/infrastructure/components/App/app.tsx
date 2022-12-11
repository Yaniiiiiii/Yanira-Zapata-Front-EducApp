import SearchBar from '../../../features/components/searchBar/searchBar';
import { AppRoutes } from '../../../routes/app.routes';
import Footer from '../footer/footer';
import { Header } from '../header/header';

function App() {
    return (
        <>
            <Header></Header>
            <SearchBar></SearchBar>
            <AppRoutes></AppRoutes>
            <Footer></Footer>
        </>
    );
}

export default App;
