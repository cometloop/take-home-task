import axios from 'axios';
import { API_BASE_URL } from '../config';

export const api = {
	save: async (score: number): Promise<void> => {
		return axios.post(`${API_BASE_URL}/score`, {
			score,
		});
	},
};
