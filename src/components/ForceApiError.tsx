import { Switch } from '@headlessui/react';
import { useCallback, useState } from 'react';
import { worker } from '../mocks/browser';
import { happyPath, sadPath } from '../mocks/handlers';

export const ForceApiError = () => {
	const [success, setSuccess] = useState(true);

	const toggle = useCallback(() => {
		const next = !success;
		if (next) {
			worker.use(happyPath);
		} else {
			worker.use(sadPath);
		}
		setSuccess(next);
	}, [success]);

	return (
		<div className='fixed bottom-0 right-0 p-10 text-white flex flex-row items-center gap-2'>
			API Success?
			<Switch
				data-testid='toggleSwitch'
				checked={success}
				onChange={toggle}
				className='group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600'
			>
				<span className='sr-only'>Use setting</span>
				<span
					aria-hidden='true'
					className='pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5'
				/>
			</Switch>
		</div>
	);
};
