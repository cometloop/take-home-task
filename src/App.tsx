import React, { useCallback, useState } from 'react';
import { Dropdown, Option } from './components/Dropdown';
import { Button } from './components/Button';
import { timeOptions } from './utils/timeOptions';
import { api } from './api';
import { calculateScore } from './utils/calculateScore';
import { ErrorMessage } from './components/ErrorMessage';
import { ForceApiError } from './components/ForceApiError';

const DURATION_PLACEHOLDER = 'Select a duration';
const durationOptions = timeOptions();

const App = () => {
	const [durationInBed, setDurationInBed] = useState<Option | undefined>(
		undefined
	);
	const [durationAsleep, setDurationAsleep] = useState<Option | undefined>(
		undefined
	);
	const [score, setScore] = useState<number | undefined>();

	const isCalculateDisabled = !durationInBed || !durationAsleep;
	const [isLoading, setIsLoading] = useState(false);

	const [error, setError] = useState<string | undefined>();

	const calculate = useCallback(async () => {
		setIsLoading(true);
		setScore(undefined);
		setError(undefined);
		if (durationInBed && durationAsleep) {
			try {
				const score = calculateScore(
					durationAsleep?.value,
					durationInBed?.value
				);
				await api.save(score);
				setScore(score);
			} catch (e) {
				setError('Something went wrong. Please try again.');
				setScore(undefined);
			} finally {
				setIsLoading(false);
			}
		}
	}, [durationAsleep, durationInBed]);

	return (
		<div className='w-screen h-screen bg-slate-800'>
			<div className='max-w-xl mx-auto flex flex-col items-center'>
				<img
					src='https://cdn.prod.website-files.com/659879cae2df32d85f9472e1/660ae867d206889393720644_Untitled%20design-p-1080.png'
					className='w-[400px]'
					alt='logo'
				/>

				<div className='flex flex-col w-2/3 gap-2'>
					<Dropdown
						testid='durationInBed'
						options={durationOptions}
						disabled={isLoading}
						label='Duration in bed'
						selected={durationInBed}
						onSelect={setDurationInBed}
						placeholder={DURATION_PLACEHOLDER}
					/>
					<Dropdown
						testid='durationAsleep'
						options={durationOptions}
						disabled={isLoading}
						label='Duration asleep'
						selected={durationAsleep}
						onSelect={setDurationAsleep}
						placeholder={DURATION_PLACEHOLDER}
					/>
					<Button
						data-testid='calculate'
						onClick={calculate}
						className='mt-4'
						disabled={isCalculateDisabled || isLoading}
					>
						Calculate
					</Button>

					<p className='text-white font-semibold text-center my-5'>
						{isLoading && 'Loading'}
						{!isLoading && score}
					</p>

					{!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
				</div>
			</div>
			<ForceApiError />
		</div>
	);
};

export default App;
