import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export default function GifGrid({ category }) {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
	};

	useEffect(() => {
		// getGifs(category).then((newImages) => setImages(newImages));
		getImages();
	}, []);

	return (
		<>
			<h3>{category}</h3>
			{images.map(({ id, title }) => (
				<p key={id}>{title}</p>
			))}
		</>
	);
}
