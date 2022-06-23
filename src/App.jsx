import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export default function App() {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCtegory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		// dos formas de actualizar el estado
		// setCategories((cat) => [inputValue, ...cat]);
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>App</h1>
			<AddCategory
				setCategories={setCategories}
				onNewCategory={(value) => onAddCtegory(value)}
			/>
			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
}
