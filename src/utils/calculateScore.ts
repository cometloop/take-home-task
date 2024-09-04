import { DateTime } from 'luxon';

export const calculateScore = (
	durationAsleep: string,
	durationInBed: string
) => {
	const asleep = DateTime.fromFormat(durationAsleep, 'HH:mm').hour;
	const inBed = DateTime.fromFormat(durationInBed, 'HH:mm').hour;
	return 100 * (asleep / inBed);
};
