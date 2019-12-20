import post from './expressService';

export function getAuthToken() {
    var myToken = localStorage.getItem('authToken');
    return myToken;
}

export function confirmAuthToken() {
    post('/token/confirm', { token: getAuthToken()})
    .then(function(result) {
        if (result.success) {
            console.log("Realz");
            console.log(result.message);
        } else {
            console.log("No1");
            console.log(result.message);
        }
    }, function(error) {
        console.log("No2");
        console.log(error);
        return false;
    });
}

export function getUserID() {
    if (confirmAuthToken()) {
        post('/token/getID', { token: getAuthToken()})
        .then(function(result) {
            return result.userID;
        }, function(error) {
            return null;
        })
    } else {
        return null;
    }
}