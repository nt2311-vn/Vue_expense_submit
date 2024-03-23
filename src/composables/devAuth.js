/**
 * @description This module is used to check if the user is authenticated as a developer
 * @typedef {Object} devAuthResult
 * @property {boolean} isDevAuth - The boolean value to check if this is authenticated dev
 * @returns {devAuthResult} - The object contains isDevAuth closure
 */
const devAuth = () => {
	/**
	 * Get the cookie value by name
	 * @param {string} name - The name of the cookie
	 * @returns {string} - The value of the cookie
	 */
	const getCookie = (name) => {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(";").shift();
	};

	/**
	 * Check if this is authenticated dev for test mode
	 * returns {boolean} - The boolean value to check if this is authenticated dev
	 */
	const isDevAuth = () => {
		const devCookie = getCookie("devauth");
		return Boolean(devCookie);
	};

	return { isDevAuth };
};

export default devAuth;
