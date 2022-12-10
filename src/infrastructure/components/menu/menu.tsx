import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'Home', label: 'HomePage' },
        { id: '2', path: 'Favorites', label: 'FavoritesPage' },
        { id: '3', path: 'AddResource', label: 'AddResourcePage' },
        { id: '4', path: 'User', label: 'UserPage' },
    ];
    return (
        <nav>
            <ul>
                <li key={menuOptions[0].id}>
                    <Link to={menuOptions[0].path}>
                        <img src="./assets/vector.jpg" alt="Home icon" />
                    </Link>
                </li>

                <li key={menuOptions[1].id}>
                    <Link to={menuOptions[1].path}>
                        <img src="./assets/fav.png" alt="Favorites icon" />
                    </Link>
                </li>

                <li key={menuOptions[2].id}>
                    <Link to={menuOptions[2].path}>
                        <img src="./assets/add.png" alt="AddResource icon" />
                    </Link>
                </li>

                <li key={menuOptions[3].id}>
                    <Link to={menuOptions[3].path}>
                        <img src="./assets/user.png" alt="User icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
