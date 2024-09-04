import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios');

test('renders learn react link', () => {
	render(<App />);
	// const linkElement = screen.getByText(/Duration in bed/i);
	// expect(linkElement).toBeInTheDocument();
});
