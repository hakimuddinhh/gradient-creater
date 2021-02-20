# Gradient Creator

A tiny Javascript plugin to create specified amount of gradient colors between two colors provided

## Installation

Use the Node Package Manager [NPM](https://www.npmjs.com/) to install Gradient creator.

```bash
npm i gradient-creator
```

## Live Demo

Head to see the plugin in [action](https://hakimuddinhh.github.io/gradient-creator/)

```bash
npm i gradient-creator
```

## Usage

```node
import { createGradient } from 'gradient-creator';

const startColor = '#ff0000'; /* Red */
const endColor = '#ffffff'; /* White */
const steps = 10; /* 10 colors should be created between red and white */

createGradient(startColor, endColor, steps) /* returns an array of colors */
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)