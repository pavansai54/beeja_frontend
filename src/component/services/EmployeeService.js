import axios from 'axios'

const apiBaseUri =
	'https://us-central1-t-beeja.cloudfunctions.net/function-beejaDB'

class EmployeeService {
	getAllEmployeeDetail() {
		return axios.get(apiBaseUri + '/employees')
	}

	getOneEmployeeDetail(employeeId) {
		return axios.get(apiBaseUri + '/employee' + '/' + employeeId)
	}

	createEmployeeDetail(employee) {
		return axios.post(apiBaseUri + '/employee', employee)
	}

	updateEmployeeDetail(employee, employeeId) {
		return axios.put(apiBaseUri + '/employee' + '/' + employeeId, employee)
	}

	deleteEmployeeDetail(employeeId) {
		return axios.delete(apiBaseUri + '/employee' + '/' + employeeId)
	}
}
export default new EmployeeService()
