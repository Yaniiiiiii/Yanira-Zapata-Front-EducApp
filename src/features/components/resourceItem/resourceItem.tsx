import { Link } from 'react-router-dom';
import { Resource } from '../../../infrastructure/services/types/resources.types';
import style from './resourceItem.module.css';

export function ResourceItem({ item }: { item: Resource }) {
    return (
        <li className={style.resource}>
            <Link to={'/resources/' + item.id} key={item.id}>
                <div className={style.divFormat}>
                    {' '}
                    <img width="150" src="/assets/logo.jpg"></img>
                </div>
            </Link>
            <div>
                <p>{item.subject}</p>
            </div>
            <div>
                <p>{item.grade}</p>
            </div>
        </li>
    );
}
export default ResourceItem;
