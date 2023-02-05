
import { darkTheme, lightTheme } from './theme'

declare module 'styled-components' {
	type LightTheme = typeof lightTheme
	type DarkTheme = typeof darkTheme

	export interface DefaultTheme extends LightTheme, DarkTheme {}
}
