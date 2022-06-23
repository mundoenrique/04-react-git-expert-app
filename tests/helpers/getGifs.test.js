import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en helper getGifs', () => {
	test('Debe retornar un arreglo de imágenes', async () => {
		const gifs = await getGifs('batman');

		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
