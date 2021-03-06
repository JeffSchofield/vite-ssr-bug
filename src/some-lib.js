// Minifiers can sometimes produce code shaped like this
import { inject as x } from 'vue'

export default {
	install() {
		const { test: x } = { test: true }
		console.log(x)
	}
}
