export default function getAuthToken() {
    var myToken = localStorage.getItem('authToken');
    return myToken;
}