import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
	const title = 'Iron Man';
	const url = 'http://localhost:3000/';

	test('Debe hacer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar la imagen correctamente', () => {
		render(<GifItem title={title} url={url} />);

		expect(screen.getByRole('img').src).toBe(url);
		expect(screen.getByRole('img').alt).toBe(title);

		const { src, alt } = screen.getByRole('img');

		expect(src).toBe(url);
		expect(alt).toBe(title);

		// screen.debug();
	});

	test('Debe mostrar el título en el componente', () => {
		render(<GifItem title={title} url={url} />);

		expect(screen.getByAltText(title)).toBeTruthy();
	});
});
