import axios from 'axios'

const apiBaseUri =
	'https://us-central1-t-beeja.cloudfunctions.net/function-app'

class AccountingService {
	getAllAccountDetail() {
		return axios.get(apiBaseUri + '/accounts')
	}

	getOneAccountDetail(accountId) {
		return axios.get(apiBaseUri + '/account' + '/' + accountId)
	}

	createAccountDetail(account) {
		return axios.post(apiBaseUri + '/account', account)
	}

	updateAccountDetail(account, accountId) {
		return axios.put(apiBaseUri + '/account' + '/' + accountId, account)
	}

	deleteAccountDetail(accountId) {
		return axios.delete(apiBaseUri + '/account' + '/' + accountId)
	}
}
export default new AccountingService()
