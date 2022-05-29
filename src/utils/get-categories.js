import { getCategoriesService } from '../services';

export const getCategories = async (setCategories) => {
	try {
		const response = await getCategoriesService();
		if (response.status === 200) {
			setCategories(response.data.categories);
		}
	} catch (error) {
		console.error('ERROR: ', error);
	}
};
