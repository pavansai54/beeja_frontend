import axios from 'axios'
const apiBaseUri = 'https://us-central1-t-beeja.cloudfunctions.net/function-app'
class EmployeeService {
    getAllEmployeeDetail() {
        return axios.get(apiBaseUri + '/allemp')
    }
    getOneEmployeeDetail(empId) {
        return axios.get(apiBaseUri + '/emp/' + empId)
    }
    createEmployeeDetail(emp) {
        return axios.post(apiBaseUri + '/emp', emp)
    }
    updateEmployeeDetail(empId, employee) {
        return axios.put(apiBaseUri + '/emp' + '/'  + empId, employee)
    }
    deleteEmployeeDetail(emppId) {
        return axios.delete(apiBaseUri + '/emp' + '/' + emppId)
    }
}
export default new EmployeeService()
