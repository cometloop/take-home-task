import { delay, http, HttpResponse, passthrough } from 'msw';
import { HttpStatusCode } from 'axios';
import { API_BASE_URL } from '../config';

export const happyPath = http.post(`${API_BASE_URL}/score`, async () => {
	await delay(500);
	return new HttpResponse(null, { status: HttpStatusCode.Created });
});

export const sadPath = http.post(`${API_BASE_URL}/score`, async () => {
	await delay(500);
	return new HttpResponse(null, { status: HttpStatusCode.BadRequest });
});

export const handlers = [
	happyPath,
	sadPath,
	http.all('*', () => {
		return passthrough();
	}),
];
