export interface ResourcesRepo<R> {
    getAll: () => Promise<Array<R>>;
    get: (id: string) => Promise<R>;
    query: (key: string, value: string) => Promise<Array<R>>;
    create: (resource: Partial<R>) => Promise<R>;
    // update: (id: string, resource: Partial<R>) => Promise<Resource>; ????
    delete: (id: string) => Promise<void>;
}
