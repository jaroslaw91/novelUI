/* eslint-disable @typescript-eslint/ban-types */
import { render as rtlRender, screen, waitFor } from '@testing-library/react'
import { ComponentType, PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { describe, it, vi } from 'vitest'

import { darkTheme } from '../styles/theme'

const render = (ui: ReactElement) => {
	const AppProviders = ({ children }: PropsWithChildren<{}>) => (
		<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
	)

	return rtlRender(ui, { wrapper: AppProviders as ComponentType })
}

export * from '@testing-library/react'

export { render, describe, it, vi, screen, waitFor }
