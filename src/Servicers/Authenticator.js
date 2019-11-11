export default function Authenticator(username, password) {
    function getAuth(i_username, i_password) {
        if (i_username === "admin" && i_password === "root") {
            return true;
        } else {
            return false;
        }
    }

    return getAuth(username, password);
}