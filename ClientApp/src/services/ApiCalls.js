export const fetchDocuments = async (requestId) => {

    const response = await fetch(`api/requests/request/${requestId}/documents`);

    if (response.status < 400) {
        return await response.json();
    }

    throw (new Error(`Unable to get documents for request '${requestId}'.`));
}

export const fetchDocumentRequestsByFilter = async (filter) => {

    const response = await fetch('api/requests/filter',{
        method: "POST", 
        cache: "no-cache", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(filter)
    });

    if(response.status<400){
        return await response.json();
    }

    throw (new Error('Unable to get document requests for supplied filter'));
}

export const fetchPosts = async () =>{

    const response = await fetch("api/rest/best");
    if(response.status <400){

        return await response.json();
    }
    throw (new Error(`Unable to get list of posts.`));
}