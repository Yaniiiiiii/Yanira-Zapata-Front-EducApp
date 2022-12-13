import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../infrastructure/components/footer/footer';
import { Header } from '../../../infrastructure/components/header/header';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { ResourceRepository } from '../../../infrastructure/services/resourcesRepo/resources.repository';
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

    const repoResource = new ResourceRepository();

    const { handleUpdate } = useResources();

    const { id } = useParams();

    const getResourceById = useCallback(
        async (id: string | undefined) => {
            const resourceDetails = await repoResource.get(id as string);
            setDetails(resourceDetails);
        },
        [repoResource]
    );
    useEffect(() => {
        getResourceById(id);
    }, [id, getResourceById]);

    const handleLike = () => {
        handleAddFavorites(details);
    };

    const handleRemove = () => {
        handleDeleteFavorites(details);
    };

    const handleEdit = () => {
        handleUpdate(details as Resource);
    };

    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
}

export default ResourceDetails;
