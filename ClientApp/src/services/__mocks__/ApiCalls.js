export const fetchDocumentRequestsByFilter = jest.fn(()=>MockData.documentRequests)
    .mockImplementationOnce(() => (MockData.documentRequests))
    .mockImplementationOnce(filter => {
        throw (new Error(`Unable to get document requests for '${filter}'`))
    });

    
export const fetchDocuments = jest.fn(()=>MockData.documentList)
.mockImplementationOnce(()=>(MockData.documentList))
.mockImplementationOnce(requestId =>{
    throw (new Error(`Unable to get documents for request '${requestId}'.`))
});