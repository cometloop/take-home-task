import { DateTime } from 'luxon';

export const calculateScore = (
	durationAsleep: string,
	durationInBed: string
) => {
	const asleep = DateTime.fromFormat(durationAsleep, 'HH:mm');
	const inBed = DateTime.fromFormat(durationInBed, 'HH:mm');

	const asleepTotal = asleep.hour + (asleep.minute === 30 ? 0.5 : 0);
	const inBedTotal = inBed.hour + (inBed.minute === 30 ? 0.5 : 0);

	return 100 * (asleepTotal / inBedTotal);
};
