import { delay, http, HttpResponse, passthrough } from 'msw';
import { HttpStatusCode } from 'axios';
import { API_BASE_URL } from '../config';

export const handlers = [
	http.post(`${API_BASE_URL}/score`, async () => {
		await delay(1000);
		return new HttpResponse(null, { status: HttpStatusCode.Created });
	}),
	http.all('*', () => {
		return passthrough();
	}),
];
