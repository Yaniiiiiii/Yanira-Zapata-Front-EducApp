import { useResources } from '../../../infrastructure/hooks/useResources';
import { Resource } from '../../../infrastructure/services/types/resources.types';

export function ResourceItem({ item }: { item: Resource }) {
    const title = 'Resource';
    const { handleAdd, handleDelete, handleUpdate } = useResources();

    const handleLike = () => {
        handleAdd({ ...item });
    };

    const handleRemove = () => {
        handleDelete(item.id);
    };

    const handleEdit = () => {
        handleUpdate({ ...item });
    };

    return (
        <li className="resourceItem">
            <h2>{item.title}</h2>
            <p>{item.owner.name}</p>
            <p>{item.pages}</p>
            <p>{item.subject}</p>
            <p>{item.grade}</p>
            <p>{item.description}</p>
            <iframe src="https://opendocs.com/wp-content/uploads/2019/10/Blank-Simple-Invoice.pdf"></iframe>
            <button className="like" onClick={handleLike}></button>
            <button className="edit" onClick={handleEdit}></button>
            <button className="delete" onClick={handleRemove}></button>
        </li>
    );
}
