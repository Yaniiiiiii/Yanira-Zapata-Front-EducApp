export interface IUserRepo<U> {
    getOne: (id: string) => Promise<U>;
    addUser: (user: Partial<U>) => Promise<U>;
    updateUser: (id: string, user: Partial<U>) => Promise<U>;
    query: (key: string, value: string) => Promise<Array<U>>;
    deleteUser: (id: string) => Promise<void>;
}
