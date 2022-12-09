import { Resource } from '../../../infrastructure/services/types/resources.types';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { ResourceItem } from '../resourceItem/resourceItem';

export function ResourcesList() {
    const title = 'Resources';
    const { resources } = useResources();
    console.log(resources);

    return resources.length ? (
        <section>
            <p>{resources[0].title}</p>

            <h2>{title}</h2>

            <ul className="resourcesList">
                {resources.map((item: Resource) => (
                    <ResourceItem key={item.id} item={item}></ResourceItem>
                ))}
            </ul>
        </section>
    ) : (
        <p> Cargando...</p>
    );
}
