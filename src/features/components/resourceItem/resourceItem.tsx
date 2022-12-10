import { Link } from 'react-router-dom';
import { Resource } from '../../../infrastructure/services/types/resources.types';

export function ResourceItem({ item }: { item: Resource }) {
    return (
        <li className="resourceItem">
            <Link to={'/resources/' + item.id} key={item.id}>
                <div>
                    <iframe src={item.format}></iframe>
                    <p>{item.subject}</p>
                    <p>{item.grade}</p>
                </div>
            </Link>
        </li>
    );
}
export default ResourceItem;
