import axios from "axios";

class UserServices {
    private static URL: string = 'https://jsonplaceholder.typicode.com';

    public static getAllUsers() {
        let UserURL: string = `${this.URL}/users`;
        return axios.get(UserURL);
    }
}

export default UserServices;