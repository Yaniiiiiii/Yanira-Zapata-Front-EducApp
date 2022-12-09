import { mockUser } from '../../../mocks/mocks';
import { UsersRepository } from './users.repository';

describe('Given the resource repository Service', () => {
    describe('When we run it', () => {
        let service: UsersRepository;

        beforeEach(() => {
            service = new UsersRepository();
        });

        test('Then it should first return the service as "test"', () => {
            const result = service.url;
            expect(result).toHaveBeenCalled();
        });
        test('Then if I run register service, it should return a promise of users', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.register({});
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
        test('Then if I run the logIn service, it should return the service a resource', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ token: '' }),
            });
            const result = await service.logIn({ name: '' });
            expect(fetch).toBeCalled();
            expect(result).toBe('');
        });
        test('Then if I run the addFavorites service, it should return a promise of the updated user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(''),
            });
            const result = await service.addFavorites({ id: '' });
            expect(fetch).toBeCalled();
            expect(result).toBe('');
        });
        test('Then if I run the deleteFavorites service, it should return a promise of the updated user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(''),
            });
            const result = await service.deleteFavorites({ id: '' });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual('');
        });
        test('Then if I run the deleteUser service, it should return a void promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ resource: '' }),
            });
            const result = await service.deleteUser();
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
    });

    describe('Given the resource repository when we run it and there is an error', () => {
        let service: UsersRepository;

        beforeEach(() => {
            service = new UsersRepository();
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
        });
        test(`Then if there is a register error`, async () => {
            const expectedResult = await service.register({});
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toEqual(error.toString());
        });
        test(`Then if there is a logIn error`, async () => {
            const expectedResult = await service.logIn({});
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });
        test(`Then if there is a addFavorites error`, async () => {
            const expectedResult = await service.addFavorites({});
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });

        test(`Then if there is a create error`, async () => {
            const expectedResult = await service.deleteFavorites({});
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });

        test(`Then if there is a deleteUser error`, async () => {
            const expectedResult = await service.deleteUser();
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });
        // test(`Then if there is a update error`, async () => {
        //     const expectedResult = await service.(mockResource);
        //     const error = new Error('Error 400: error');
        //     error.name = 'HTTPError';
        //     expect(expectedResult).toBe(error.toString());
        // });
    });
});
