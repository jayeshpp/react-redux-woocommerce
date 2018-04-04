import axios from "axios";
import { Cookies } from 'react-cookie';
import config from "../config";

const cookies = new Cookies();

class Auth {
    constructor(userName,password) {
        this.userName = userName;
        this.password = password;
        this.token = cookies.get('token');
    }
    
    getToken() {
        const headers = {
            username: this.userName,
            password: this.password
        }

        return axios.post(`${config.api_auth_endpoint}/token`, headers)
        .then((response) => response.data.token)
        .catch(error => error );
    }

    setToken(token) { 
        return this.token = token;
    }

    authenticate() {
        if(!this.token) {
            this.getToken().then((token) => {
                this.setToken(token);
                cookies.set('token', token);
                window.location.reload();
            })
        }
    }
}

const auth = new Auth(config.username, config.password);
auth.authenticate();
