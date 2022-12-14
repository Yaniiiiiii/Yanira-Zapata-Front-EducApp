import { User } from '../types/users.types';

export class UsersRepository {
    url: string;

    constructor() {
        this.url = 'http://localhost:7700/users';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    register(user: Partial<User>): Promise<User> {
        return fetch(`${this.url}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    logIn(data: Partial<User>): Promise<{ user: User; token: string }> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .then((response) => {
                localStorage.setItem('token', response.token);
                return response;
            })

            .catch((error) => {
                return `${error}`;
            });
    }

    addFavorites(id: string): Promise<User> {
        return fetch(`${this.url}/addFavorites/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw this.createError(response);
        });
        // .catch((error) => `${error}`);
    }

    deleteFavorites(id: string): Promise<User> {
        return fetch(`${this.url}/deleteFavorites/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => `${error}`);
    }

    deleteUser(): Promise<void> {
        return fetch(`${this.url}/deleteUser`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
                response.json();
            })
            .catch((error) => `${error}` as unknown as void);
    }
}
