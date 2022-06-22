import { useState } from 'react';
import AddCategory from './components/AddCategory';

export default function App() {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCtegory = () => {
		setCategories(['Valorant', ...categories]);
	};

	return (
		<>
			<h1>App</h1>
			<AddCategory setCategories={setCategories} />

			<ol>
				{categories.map((category, index) => {
					return <li key={index}>{category}</li>;
				})}
			</ol>
		</>
	);
}
