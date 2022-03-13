import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('Renders Footer component', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Made with love by wannaby Stonly teammate/i);

    expect(linkElement).toBeInTheDocument();
});

