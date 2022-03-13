import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('Renders Header component', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Simple Issue Tracker/i);

    expect(linkElement).toBeInTheDocument();
});
