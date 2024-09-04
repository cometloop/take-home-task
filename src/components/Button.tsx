import classNames from 'classnames';

export type ButtonProps = React.HTMLProps<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			type='button'
			className={classNames(
				'w-full rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-gray-300 disabled:text-gray-600 select-none',
				props.className
			)}
		>
			{children}
		</button>
	);
};
