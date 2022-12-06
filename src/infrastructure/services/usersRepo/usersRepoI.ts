export interface IUserRepo<U> {
    register: (user: Partial<U>) => Promise<U>;
    deleteUser: () => Promise<U>;
    login: (key: string, value: string) => Promise<U>;
    addFavorites: (id: string, user: Partial<U>) => Promise<U>;
    deleteFavorites: (id: string) => Promise<U>;
}
