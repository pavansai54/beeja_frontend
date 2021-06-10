import axios from 'axios';
const apiBaseUri = "https://us-central1-t-beeja.cloudfunctions.net/function-app";
const pavan =1;
class LoginService {
    getLoginDetails(login) {
        return axios.post(apiBaseUri + "/login",pavan,{
            headers: {
                'Authorization': `Basic ${login}`
            },
            body: JSON.stringify()
        });
    }
}
export default new LoginService();