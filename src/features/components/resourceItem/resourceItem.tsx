import { Link } from 'react-router-dom';
import { Resource } from '../../../infrastructure/services/types/resources.types';
import style from './resourceItem.module.css';

export function ResourceItem({ item }: { item: Resource }) {
    return (
        <div>
            <li className={style.resource}>
                <Link
                    to={'/resources/' + item.id}
                    key={item.id}
                    className={style.divFormat}
                >
                    <div className={style.iframeContainer}>
                        <iframe
                            className={style.iframe}
                            src={item.format}
                        ></iframe>
                    </div>
                    <div>
                        <p>{item.subject}</p>
                    </div>
                    <div>
                        <p>{item.grade}</p>
                    </div>
                </Link>
            </li>
        </div>
    );
}
export default ResourceItem;
