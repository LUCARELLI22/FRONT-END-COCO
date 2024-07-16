
export const HTTP = {
    GET: async (url, headers) =>{
        const response = await fetch(url, {
            method: 'GET',
            headers: headers

        })
        return response.json()
    },
    POST: async (url, body) =>{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return response.json()
    },
    PUT: async (url, body) => {
        try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    
        if (!response.ok) {
            throw new Error(`PUT request failed with status ${response.status}`);
        }
    
        const data = await response.json();
        return data;
        } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
        }
    },

    UPDATE : async (url , body) =>{
        const response = await fetch (url , {
            method:'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if (!response.ok){
            throw new Error ( `PUT request failed with status ${response.status}`);
        }
        return response .json();
    } ,

DELETE: async (url , productId) =>{
    const response = await fetch (':id',productId, {
        method:'DELETE',
        headers:{
            'Content-type': 'application/json',
        },

        });
    if (!response.ok){
        throw new Error ( `DELETE request failed with status ${response.status}`);
    }
    return response .json();
}, 
};






export const URL = {
    URL_API: 'http://localhost:3030',
};

    
