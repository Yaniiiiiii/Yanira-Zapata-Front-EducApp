import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { useUsers } from '../../../infrastructure/hooks/useUsers';
import {
    Grade,
    Resource,
    Subject,
} from '../../../infrastructure/services/types/resources.types';

export function ResourceDetails() {
    const initialState: Partial<Resource> = {
        title: '',
        subject: '' as Subject,
        pages: '',
        grade: '' as Grade,
        description: '',
    };

    const [details, setDetails] = useState(initialState);
    const { handleAddFavorites, handleDeleteFavorites } = useUsers();

    const { handleUpdate } = useResources();

    const { id } = useParams();

    const getResourceById = async (id: string | undefined) => {
        const resource = await fetch(`http://localhost:7700/resources/${id}`)
            .then((data) => data.json())
            .then((resp) => resp.resource);
        setDetails(resource);
    };

    useEffect(() => {
        getResourceById(id);
    }, [id]);

    const handleLike = () => {
        handleAddFavorites(details);
    };

    const handleRemove = () => {
        handleDeleteFavorites(details);
    };

    const handleEdit = () => {
        handleUpdate(details as Resource);
    };
    console.log(details);

    return (
        <li className="resourceItem">
            <h2>{details.title}</h2>
            <p>{details.owner?.name}</p>
            <p>{details.pages}</p>
            <p>{details.subject}</p>
            <p>{details.grade}</p>
            <p>{details.description}</p>
            <iframe src="https://opendocs.com/wp-content/uploads/2019/10/Blank-Simple-Invoice.pdf"></iframe>
            <button className="like" onClick={handleLike}>
                ADD FAV
            </button>
            <button className="edit" onClick={handleEdit}>
                {' '}
                EDIT
            </button>
            <button className="delete" onClick={handleRemove}>
                DELETE FAV
            </button>
        </li>
    );
}

export default ResourceDetails;
