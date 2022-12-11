import { ResourceItem } from '../resourceItem/resourceItem';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { Resource } from '../../../infrastructure/services/types/resources.types';
import { useEffect } from 'react';

export function ResourcesList() {
    const title = 'Resources';
    const { resources, handleLoad } = useResources();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return resources.length ? (
        <section>
            <p>{resources[0].title}</p>
            <h2>{title}</h2>
            <form>
                <label>
                    <input type="text" name="name"></input>
                </label>
                <label>
                    <input type="submit" name="submit"></input>
                </label>
            </form>

            <ul className="resourcesList">
                {resources.map((item: Resource) => (
                    <ResourceItem key={item.id} item={item}></ResourceItem>
                ))}
            </ul>
        </section>
    ) : (
        <div>Loading...</div>
    );
}
export default ResourcesList;
