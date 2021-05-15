import axios from 'axios';


const apiBaseUri = "https://us-central1-t-beeja.cloudfunctions.net/function-beejaDB";

class PersonalDetailService {

    getAllPersonalDetail() {
        return axios.get(apiBaseUri + "/personaldetails");
    }

    getOnePersonalDetail(personaldetailId) {
        return axios.get(apiBaseUri + "/personaldetail" + "/" + personaldetailId);
    }

    createPersonalDetail(personaldetail) {
        return axios.post(apiBaseUri + "/personaldetail", personaldetail);
    }

    updatePersonalDetail(personaldetail, personaldetailId) {
        return axios.put(apiBaseUri + "/personaldetail" + "/" + personaldetailId,personaldetail);
    }

    deletePersonalDetail(personaldetailId) {
        return axios.delete(apiBaseUri + "/personaldetail" + "/" + personaldetailId);
    }
}
export default new PersonalDetailService();