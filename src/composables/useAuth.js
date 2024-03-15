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
	 * @returns {Promise<string>} returns the otp text to requester
	 */
	const requestOTP = async (email) => {
		try {
			const response = await axios.post(
				"theurl",
				{ email: email },
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);

			if (response.status === 201) {
				const otpText = await response.data;
				return otpText;
			}
		} catch (err) {
			error.value = err.message;
		} finally {
			loading.value = false;
		}
	};

	return { error, loading, requestOTP };
};
