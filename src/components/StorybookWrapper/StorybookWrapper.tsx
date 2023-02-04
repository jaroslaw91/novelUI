import { FC, ReactNode } from 'react'

import { StorybookWrapperComponent } from './StorybookWrapper.styles'

export interface StorybookWrapperProps {
	children: ReactNode
}

export const StorybookWrapper: FC<StorybookWrapperProps> = ({ children }) => (
	<StorybookWrapperComponent>{children}</StorybookWrapperComponent>
)
