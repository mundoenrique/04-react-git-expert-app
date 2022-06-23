# 04-git-expoert-app

## links del modúlo

[Estructura de archivos](https://es.reactjs.org/docs/faq-structure.html)

[Estructura de los nombres de componentes](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)

[Estilos de la plaicación](https://gist.github.com/Klerith/e4fca6ac127ccb9abd1e8ad77fcd52f1)

## Instalación y configuracion de Jest + React Testing Library

### En proyectos de React + Vite

1. Instalaciones:

```
yarn add -D jest babel-jest @babel/preset-env @babel/preset-react
yarn add -D @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:

```
yarn add -D whatwg-fetch
```

3. Actualizar los scripts del **package.json**

```
"scripts: {
  ...
  "test": "jest --watchAll",
```

4. Crear la configuración de babel **babel.config.js**

```
module.exports = {
    presets: [
				// '@babel/preset-env',
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

**jest.config.js**

```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
		moduleNameMapper: {
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},
}
```

**jest.setup.js**

```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```
