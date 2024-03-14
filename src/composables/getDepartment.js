import { ref } from "vue";

import axios from "axios";

const getDepartment = () => {
	const departments = ref([]);
	const error = ref(null);
	const loading = ref(true); // It should be true when it starts

	const fetchDepartment = async () => {
		loading.value = true;
		error.value = null;

		try {
			const response = await axios.get(
				"https://5574610.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1350&deploy=1&compid=5574610&h=6561e2be4b03ef2ae104",
			);
			if (response.status === 200) {
				const data = await response.data;
				console.log(data);
				departments.value = data;
			} else {
				throw new Error("Failed to fetch department data");
			}
		} catch (err) {
			error.value = err.message;
		} finally {
			loading.value = false;
		}
	};

	return { departments, error, loading, fetchDepartment };
};

export default getDepartment;
