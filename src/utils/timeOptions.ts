import { DateTime, Duration } from 'luxon';
import { Option } from '../components/Dropdown';

const startTime = '00:00';
const endTime = '23:30';
const interval = '00:30';

export const timeOptions = (): Option[] => {
	const dtEnd = DateTime.fromFormat(endTime, 'HH:mm');
	const durationInterval = Duration.fromISOTime(interval);

	let options: Option[] = [];
	let i = DateTime.fromFormat(startTime, 'HH:mm');

	while (i <= dtEnd) {
		const val = i.toFormat('HH:mm');
		options.push({
			label: val,
			value: val,
		});
		i = i.plus(durationInterval);
	}

	return options;
};
