import { mockResource } from '../../../mocks/mocks';
import { ResourceRepository } from './resources.repository';

describe('Given the resource repository Service', () => {
    describe('When we run it', () => {
        let service: ResourceRepository;

        beforeEach(() => {
            service = new ResourceRepository();
        });

        test('Then it should first return the service as "test"', () => {
            const result = service.url;
            expect(result).toBe(process.env.REACT_APP_URL_RESOURCES);
        });
        test('Then if I run getAll service, it should return the service an array of resources', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ resource: [] }),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if I run the get service, it should return the service a resource', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ resource: mockResource }),
            });
            const result = await service.get('');
            expect(result).toEqual(mockResource);
        });
        test('Then if I run the query service, it should return the service an array the resources', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ resource: [] }),
            });
            const result = await service.query('', '');
            expect(result).toEqual([]);
        });
        test('Then if I run the create service, it should return a new resource', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockResource),
            });
            const result = await service.create(mockResource);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockResource);
        });
        test('Then if I run the delete service, it should return a void promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ resource: '' }),
            });
            const result = await service.delete('2');
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test('Then if I run the update service, it should return an update promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockResource),
            });
            const result = await service.update(mockResource);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockResource);
        });
    });
    describe('Given the resource repository when we run it and there is an error', () => {
        let service: ResourceRepository;

        beforeEach(() => {
            service = new ResourceRepository();
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
        });
        test(`Then if there is a fetch error`, async () => {
            const expectedResult = await service.getAll();
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toEqual(error.toString());
        });
        test(`Then if there is a get error`, async () => {
            const expectedResult = await service.get('');
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });
        test(`Then if there is a query error`, async () => {
            const expectedResult = await service.query('', '');
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });

        test(`Then if there is a create error`, async () => {
            const expectedResult = await service.create(mockResource);
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });

        test(`Then if there is a delete error`, async () => {
            const expectedResult = await service.delete('1');
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });
        test(`Then if there is a update error`, async () => {
            const expectedResult = await service.update(mockResource);
            const error = new Error('Error 400: error');
            error.name = 'HTTPError';
            expect(expectedResult).toBe(error.toString());
        });
    });
});
