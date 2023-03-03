import { FC, ReactNode } from 'react'

import { ChildrenComponent, LayoutComponent, PresentionalComponent } from './Layout.styles'

export interface LayoutProps {
	children: ReactNode
	image?: string
	hasFullWidth?: boolean
	'data-testid'?: string
}

export const Layout: FC<LayoutProps> = ({
	children,
	image,
	hasFullWidth,
	'data-testid': dataTestId = 'layout',
}) => (
	<LayoutComponent data-testid={dataTestId}>
		<PresentionalComponent image={image} />

		<ChildrenComponent hasFullWidth={hasFullWidth}>{children}</ChildrenComponent>
	</LayoutComponent>
)

Layout.displayName = 'Layout'
