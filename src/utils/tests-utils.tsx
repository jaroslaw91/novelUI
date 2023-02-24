/* eslint-disable @typescript-eslint/ban-types */
import NiceModal from '@ebay/nice-modal-react'
import { queries, render as rtlRender, screen, waitFor } from '@testing-library/react'
import { ComponentType, PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { describe, it, vi } from 'vitest'

import { darkTheme } from '../styles/theme'

const render = (
	ui: ReactElement,
	options?: { queries?: typeof queries } & {
		wrapper?: ComponentType
	},
) => {
	const AppProviders = ({ children }: PropsWithChildren<{}>) => (
		<ThemeProvider theme={darkTheme}>
			<NiceModal.Provider>{children}</NiceModal.Provider>
		</ThemeProvider>
	)

	return rtlRender(ui, { wrapper: AppProviders, ...options })
}

export * from '@testing-library/react'

export { render, describe, it, vi, screen, waitFor }
