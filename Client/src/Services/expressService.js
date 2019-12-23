//Compact module for posting back-end server

export default function backend_post(_route, _body) {
    return new Promise(async function(resolve, reject) {
        const url = 'http://localhost:5000' + _route;
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_body)
        }
        await fetch(url, options)
        .then(response => response.json())
        .then(function(response) {
            if (response.status !== 200) {
                reject(response)
            } else {
                resolve(response)
            }
        })
        .catch(function(error) {
            reject({
                status: 404,
                success: false,
                message: "Backend Failure."
            });
        })
    })
}