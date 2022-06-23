import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const category = 'One Punch';

	test('Debe mostrar el loading inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);

		expect(screen.getByText(category));
		expect(screen.getByText('Cargando...'));
	});

	test('Debe mostar items cuanod se cargan las imagénes', () => {
		const gifs = [
			{
				id: 'DFGDFGdf4154',
				title: 'saitama',
				url: `http://localhost:3000/saitama.com`,
			},
			{
				id: 'ERSDFSD545F',
				title: 'goku',
				url: `http://localhost:3000/goku.com`,
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
