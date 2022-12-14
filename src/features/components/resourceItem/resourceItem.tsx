import { Link } from 'react-router-dom';
import { Resource } from '../../../infrastructure/services/types/resources.types';
import style from './resourceItem.module.css';

export function ResourceItem({ item }: { item: Resource }) {
    return (
        <li className={style.resource}>
            <Link to={'/resources/' + item.id} key={item.id}>
                <img
                    className={style.imgList}
                    width="150px"
                    src="/assets/logo.jpg"
                    alt="item"
                ></img>
                <div className={style.divFormat}></div>
            </Link>
            <div className={style.titleContainer}>
                <p className={style.itemSubject}>{item.subject}</p>

                <p className={style.itemGrade}>- {item.grade}</p>
            </div>
        </li>
    );
}
export default ResourceItem;
