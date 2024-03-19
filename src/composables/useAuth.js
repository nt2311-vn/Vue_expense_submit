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
	const loading = ref(false);
	/**
	 * This is the requestOTP function to send OTP to the email
	 * @param {string} email - The email to send otpResult
	 * @returns {Promise<number | null>} returns the employee id if that email has been sent to
	 */
	const requestOTP = async (email) => {
		try {
			loading.value = true;
			axios.default.crossorigin = true;
			const response = await axios.post(
				"/api/app/site/hosting/scriptlet.nl?script=1351&deploy=1&compid=5574610&h=bf96464787059818e7be",
				{ email: email },
				{ headers: { "Content-Type": "application/json" } },
			);

			if (response.data.success) {
				return response.data;
			}
			throw new Error("Your email is not within organization.");
		} catch (err) {
			error.value = err.message;
			return false;
		} finally {
			loading.value = false;
		}
	};

	/**
	 * Validate the OTP input
	 * @param {string} otpInput - The OTP input from users
	 * @param {number} employeeId - The employee id of netsuite
	 * @returns {Promise<boolean>} returns whether the OTP is valid or not
	 */
	const validateOTP = async (otpInput, employeeId) => {
		try {
			loading.value = true;
			axios.default.crossorigin = true;

			const response = await axios.post(
				"todo: url for validate otp",
				{ otp: otpInput, employee: employeeId },
				{ headers: { "Content-Type": "application/json" } },
			);

			if (response.data.success) {
				return true;
			}

			throw new Error("You have entered the wrong OTP. Please try again.");
		} catch (err) {
			error.value = err.message;
		} finally {
			loading.value = false;
		}
	};

	return { error, loading, requestOTP, validateOTP };
};

export default useAuth;
