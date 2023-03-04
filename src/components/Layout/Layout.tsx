import { FC, ReactNode } from 'react'

import { Image } from '../Image'
import { ChildrenComponent, LayoutComponent, PresentionalComponent } from './Layout.styles'

export interface LayoutProps {
	children: ReactNode
	image?: string
	lowImage?: string
	newBg?: boolean
	'data-testid'?: string
}

export const Layout: FC<LayoutProps> = ({
	children,
	image,
	lowImage,
	newBg,
	'data-testid': dataTestId = 'layout',
}) => {
	return (
		<LayoutComponent
			image={image}
			data-testid={dataTestId}
		>
			{newBg && image && (
				<Image
					src={image}
					lowSrc={lowImage}
					variant="page"
					alt=""
				/>
			)}

			<PresentionalComponent image={image} />

			<ChildrenComponent>{children}</ChildrenComponent>
		</LayoutComponent>
	)
}

Layout.displayName = 'Layout'
