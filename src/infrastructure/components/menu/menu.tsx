import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: '/resources', label: 'HomePage' },
        { id: '2', path: '/favoritePage', label: 'FavoritesPage' },
        { id: '3', path: '/AddResource', label: 'AddResourcePage' },
        { id: '4', path: '/userAccount', label: 'DeleteUser' },
    ];
    return (
        <nav>
            <ul>
                <li key={menuOptions[0].id}>
                    <Link to={menuOptions[0].path}>
                        <img src="/assets/home.jpg" alt="Home icon" />
                    </Link>
                </li>

                <li key={menuOptions[1].id}>
                    <Link to={menuOptions[1].path}>
                        <img src="/assets/fav.jpg" alt="Favorites icon" />
                    </Link>
                </li>

                <li key={menuOptions[2].id}>
                    <Link to={menuOptions[2].path}>
                        <img src="/assets/add.jpg" alt="AddResource icon" />
                    </Link>
                </li>

                <li key={menuOptions[3].id}>
                    <Link to={menuOptions[3].path}>
                        <img src="/assets/user.jpg" alt="User icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
