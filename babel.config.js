module.exports = {
	presets: [
		// '@babel/preset-env',
		['@babel/preset-env', { targets: { esmodules: true } }],
		['@babel/preset-react', { runtime: 'automatic' }],
	],
};
