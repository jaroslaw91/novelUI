import { addons } from '@storybook/addons'

import novelUI from './novelUI'
import favicon from './public/icon.png'

addons.setConfig({
	theme: novelUI,
})

const link = document.createElement('link')
link.setAttribute('rel', 'shortcut icon')
link.setAttribute('href', favicon)
document.head.appendChild(link)
