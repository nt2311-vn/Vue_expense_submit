import { ref } from "vue";
import axios from "axios";

/**
 * This is the auth function to check email and send OTP
 * @typedef {Object} otpResult
 * @property {string} error - The error message
 * @property {boolean} loading - The loading state
 * @property {function} requestOTP - The requestOTP function
 * @returns {otpResult} - The object contains error, loading and requestOTP closure
 */
const useAuth = () => {
	const error = ref(null);
	const loading = ref(true);

	/**
	 * This is the requestOTP function to send OTP to the email
	 * @param {string} email - The email to send otpResult
	 * @returns {Promise<boolean>} returns whether the OPT has been sent to user or not
	 */
	const requestOTP = async (email) => {
		try {
			const response = await axios.post(
				"https://5574610.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1351&deploy=1&compid=5574610&h=bf96464787059818e7be",
				JSON.stringgify({ email }),
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);

			if (response.data) {
				console.log(response.data);
			}
		} catch (err) {
			error.value = err.message;
		} finally {
			loading.value = false;
		}
	};

	return { error, loading, requestOTP };
};
