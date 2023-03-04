import { FC, ReactEventHandler } from 'react'
import { useProgressiveImg } from 'src/hooks/useProgressiveImage'

import { ImageComponent } from './Image.styles'

export interface ImageProps {
	src: string
	lowSrc?: string
	width?: number | string
	height?: number | string
	alt: string
	variant?: 'default' | 'avatar' | 'page'
	onClick?: ReactEventHandler<HTMLImageElement>
	'data-testid'?: string
}

export const Image: FC<ImageProps> = ({
	src,
	lowSrc = '',
	width,
	height,
	alt,
	variant = 'default',
	onClick,
	'data-testid': dataTestId = 'image',
}) => {
	const { source, isBlur } = useProgressiveImg(lowSrc, src)

	const imageSrc = variant === 'page' && lowSrc ? source : src

	return (
		<ImageComponent
			src={imageSrc}
			width={width}
			height={height}
			alt={alt}
			variant={variant}
			onClick={onClick}
			data-testid={dataTestId}
			isBlur={isBlur}
		/>
	)
}

Image.displayName = 'Image'
