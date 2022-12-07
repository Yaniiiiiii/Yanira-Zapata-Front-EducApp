import { useResources } from '../hooks/useResources';

export function ResourcesList() {
    const title = 'Resources';
    const { resources, handleLoad } = useResources();
    console.log(resources);
    return resources.length ? (
        <section>
            <p>{resources[0].title}</p>
            <h2>{title}</h2>
            {/* <ul className="resourcesList">
                {resources.map((item: Resource) => (
                    <ResouceItem key={item.id} item={item}></ResouceItem>
                ))}
            </ul> */}
        </section>
    ) : (
        <div>Tal</div>
    );
}
