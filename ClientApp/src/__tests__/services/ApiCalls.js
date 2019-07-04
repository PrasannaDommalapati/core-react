import * as Faker from 'faker';
import { fetchDocuments, fetchDocumentRequestsByFilter, fetchPosts } from '../../services/ApiCalls'

describe('apiCalls', () => {

    describe('Fetch Document Requests By Action Filters', () => {
        const documentRequestsByActionFilter = JSON.stringify([{
            referenceId: "3417028b-d716-4d47-9d82-971f5d44b5b2",
            requesterId: "test request 1",
            statusMessage: "Queued For Composition",
            dateCreated: "2019-05-02T13:36:35.2553019",
            dateModified: "2019-05-02T13:36:36.3553019",
            actions: []
        }])

        it('list of documents for a filtered action', () => {

            window.fetch = jest.fn()
                .mockImplementation(() => (
                    {
                        status: 200,
                        json: () => Promise.resolve(documentRequestsByActionFilter)
                    }
                ))
            expect(fetchDocumentRequestsByFilter({ "o_actionId": 5 }))
                .resolves.toEqual(documentRequestsByActionFilter);

        });
        it('throws an exception', () => {

            window.fetch = jest.fn()
                .mockImplementation(() => (
                    {
                        status: 500,
                    }
                ));

            let expectedError = Error('Unable to get document requests for supplied filter');
            expect(fetchDocumentRequestsByFilter({ "o_actionId": 5 })).rejects.toEqual(expectedError)
        });
    });

    describe('fetch documets of a specific request', () => {

        const documents = JSON.stringify([{
            name: Faker.system.fileName(),
            type: Faker.system.fileExt(),
            size: Faker.random.number()
        }]);

        it('returns documents of a request on success', () => {
            window.fetch = jest.fn()
                .mockImplementation(() => ({
                    status: 200,
                    json: () => Promise.resolve(documents)
                }));

            expect(fetchDocuments("requestId")).resolves.toEqual(documents);
        })

        it('throw an error on failure', () => {
            window.fetch = jest.fn()
                .mockImplementation(() => (
                    {
                        status: 500
                    }
                ))

            expect(fetchDocuments("requestId")).rejects.toEqual(Error(`Unable to get documents for request 'requestId'.`));
        })

    });

    describe('fetch posts suite', () => {
        let posts = JSON.stringify([
            {
                id: 1,
                name: "cerulean",
                year: 2000,
                color: "#98B2D1",
                pantone_value: "15-4020"
            }]);

        it('returns a list of posts on success', () => {
            window.fetch = jest.fn()
                .mockImplementation(() => ({
                    status: 200,
                    json: () => Promise.resolve(posts)
                }));

            expect(fetchPosts()).resolves.toEqual(posts);
        });

        it('throw an error on failure', () => {
            window.fetch = jest.fn()
                .mockImplementation(() => (
                    {
                        status: 500
                    }
                ));

            expect(fetchPosts()).rejects.toEqual(Error(`Unable to get list of posts.`));
        });
    })
})
