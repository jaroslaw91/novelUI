import { ReactEventHandler } from 'react'
import styled, { DefaultTheme, css } from 'styled-components'

interface ImageComponentProps {
	variant?: 'default' | 'avatar' | 'page'
	isBlur?: boolean
	onClick?: ReactEventHandler<HTMLImageElement>
}

const variantStyles = ({ colors }: DefaultTheme, variant = 'avatar', isBlur = false) =>
	({
		avatar: css`
			background: ${colors.main};
			border: 2px solid ${colors.secondary};
			border-radius: 100%;
			object-fit: cover;
		`,
		page: css`
			top: 0;
			left: 0;
			width: 100%;
			// height: 100%;
			opacity: 0.5;
			position: absolute;
			filter: ${isBlur ? 'blur(20px)' : 'none'};
			transition: ${isBlur ? 'none' : 'filter 0.3s ease-out'};
		`,
	}[variant])

export const ImageComponent = styled.img<ImageComponentProps>`
	${({ onClick }) =>
		css`
			cursor: ${onClick && 'pointer'};
		`}

	${({ theme, variant, isBlur }) => variantStyles(theme, variant, isBlur)}
`
