import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ResourceRepository } from '../services/resourcesRepo/resources.repository';
import * as ac from '../reducer/actionCreator';
import { Resource } from '../services/types/resources.types';
import { rootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const useResources = () => {
    const resources = useSelector((state: rootState) => state.resources);
    const dispatcher = useDispatch();
    const apiResource = useMemo(() => new ResourceRepository(), []);

    const handleLoad = useCallback(
        () =>
            apiResource
                .getAll()
                .then((resources) =>
                    dispatcher(ac.loadActionCreatorResources(resources))
                )
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiResource, dispatcher]
    );

    const handleAdd = (newResource: Partial<Resource>) => {
        apiResource
            .create(newResource)
            .then((resource: Resource) =>
                dispatcher(ac.addActionCreatorResource(resource))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string) => {
        apiResource
            .delete(id)
            .then(() => dispatcher(ac.deleteActionCreatorResource(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateResource: Resource) => {
        apiResource
            .update(updateResource)
            .then(() =>
                dispatcher(ac.updateActionCreatorResource(updateResource))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleSearch = useCallback(
        (value: string) => {
            apiResource
                .query(value)
                .then((resources) =>
                    dispatcher(ac.resourceSearchCreatorAction(resources))
                );
        },
        [apiResource, dispatcher]
    );

    return {
        resources,
        handleLoad,
        handleAdd,
        handleDelete,
        handleUpdate,
        handleSearch,
    };
};
