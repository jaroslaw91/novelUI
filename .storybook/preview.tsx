import NiceModal from '@ebay/nice-modal-react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/styles/GlobalStyles'
import { ToastStyles } from '../src/styles/ToastStyles'
import { darkTheme, lightTheme } from '../src/styles/theme'

const withTheme = (StoryFn, context) => {
	const theme = context.parameters.theme || context.globals.theme
	const storyTheme = theme === 'dark' ? darkTheme : lightTheme

	return (
		<ThemeProvider theme={storyTheme}>
			<GlobalStyles />
			<ToastContainer theme={theme} />
			<ToastStyles />

			<NiceModal.Provider>
				<StoryFn />
			</NiceModal.Provider>
		</ThemeProvider>
	)
}

export const globalTypes = {
	theme: {
		name: 'THEME',
		description: 'Change theme',
		defaultValue: 'dark',
		toolbar: {
			icon: 'circlehollow',
			items: [
				{ value: 'dark', icon: 'circle', title: 'Dark' },
				{ value: 'light', icon: 'circlehollow', title: 'Light' },
			],
			showName: true,
		},
	},
}

export const decorators = [withTheme]
