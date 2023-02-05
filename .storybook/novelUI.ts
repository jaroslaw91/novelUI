import { create } from '@storybook/theming'

import brandImage from './static/logo.svg'

export default create({
	base: 'dark',
	brandTitle: 'novelUI',
	brandUrl: './',
	brandImage,
	brandTarget: '_self',
})
