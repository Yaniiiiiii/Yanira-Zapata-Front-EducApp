import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../infrastructure/components/footer/footer';
import { Header } from '../../../infrastructure/components/header/header';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { ResourceRepository } from '../../../infrastructure/services/resourcesRepo/resources.repository';

/* istanbul ignore file */
import {
    Grade,
    Resource,
    Subject,
} from '../../../infrastructure/services/types/resources.types';
import style from './resource.module.css';

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

    const repoResource = useMemo(() => new ResourceRepository(), []);

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
            <section className={style.resourceSection}>
                <li className={style.resourceLi}>
                    <h2 className={style.resourceItem}>{details.title}</h2>
                    <p className={style.by}>by</p>
                    <p className={style.p}>{details.owner?.name}</p>

                    <div className={style.divResource}>
                        {' '}
                        <button className={style.like} onClick={handleLike}>
                            ♡
                        </button>
                        <button className={style.edit} onClick={handleEdit}>
                            ✎
                        </button>
                        <button className={style.delete} onClick={handleRemove}>
                            🛒
                        </button>
                        <img
                            className={style.img}
                            width="330px"
                            src="/assets/resource.png"
                            alt="details"
                        ></img>
                    </div>
                    <div className={style.subjectGrade}>
                        {' '}
                        <p className={style.subject}>{details.subject}</p>
                        <p className={style.p}>- {details.grade}</p>
                    </div>

                    <p className={style.descriptionTitle}>Description</p>
                    <p className={style.description}>{details.description}</p>
                </li>
            </section>
            <Footer />
        </>
    );
}

export default ResourceDetails;
