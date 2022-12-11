import { Link } from 'react-router-dom';

export function WorkingOnIt() {
    const message = 'We are working on it....';
    const apologize = 'Sorry for any inconvenience';
    return (
        <li className="WorkingOnIt">
            <Link to="/resources">
                <div>
                    <p>{message}</p>
                    <img src="./assets/logo.jpg" width={'379px'} alt="logo2" />
                    <p>{apologize}</p>
                </div>
            </Link>
        </li>
    );
}
export default WorkingOnIt;
