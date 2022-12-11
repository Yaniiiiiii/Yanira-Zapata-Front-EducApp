import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div>
                <Link to="AboutUs">
                    <p>About us</p>
                </Link>
            </div>
            <div>
                <Link to="cart">
                    <img src={'./assets/cart.png'} />
                </Link>
            </div>
            <div className="logo">
                <Link to="resources">
                    <img src={'./assets/logo.jpg'} width="92px" />
                </Link>
            </div>
        </header>
    );
}
