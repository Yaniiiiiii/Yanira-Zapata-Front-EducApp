import { ResourceItem } from '../resourceItem/resourceItem';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { Resource } from '../../../infrastructure/services/types/resources.types';
import { useEffect } from 'react';
import Footer from '../../../infrastructure/components/footer/footer';
import { Header } from '../../../infrastructure/components/header/header';
import style from './resourcesList.module.css';
import SearchBar from '../searchBar/searchBar';

export function ResourcesList() {
    const title = 'Explore Resources';
    const { resources, handleLoad } = useResources();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return resources.length ? (
        <>
            <Header />
            <SearchBar />
            <section className={style.resourceList}>
                <h2 className={style.resourceH2}>{title}</h2>
                <ul className={style.resourceUl}>
                    {resources.map((item: Resource) => (
                        <ResourceItem key={item.id} item={item}></ResourceItem>
                    ))}
                </ul>
            </section>
            <div className={style.footerContainer}>
                <Footer />
            </div>
        </>
    ) : (
        <div>Loading...</div>
    );
}
export default ResourcesList;
