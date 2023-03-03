import styled, { css } from 'styled-components'

interface PresentionalComponentProps {
	image?: string
}

interface ChildrenComponentProps {
	hasFullWidth?: boolean
}

export const LayoutComponent = styled.div`
	${({ theme: { breakpoints } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			overflow-y: auto;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
				height: calc(100vh - 112px);
			}
		`}
`

export const PresentionalComponent = styled.div<PresentionalComponentProps>`
	${({ theme: { spaces, colors, breakpoints }, image }) =>
		css`
			width: calc(100% - 600px);
			height: calc(100vh - 84px);
			padding: calc(${spaces.huge} + ${spaces.huge}) ${spaces.huge};
			background: ${colors.main};
			background-image: url(${image});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			opacity: 0.5;
			display: ${!image && 'none'};

			@media (max-width: ${breakpoints.mobile}px) {
				display: none;
			}

			@media (max-width: ${breakpoints.tablet}px) {
				display: none;
			}
		`}
`

export const ChildrenComponent = styled.div<ChildrenComponentProps>`
	${({ theme: { spaces, breakpoints }, hasFullWidth }) =>
		css`
			width: ${hasFullWidth ? '100%' : '400px'};
			margin: 0 auto;
			padding: ${spaces.huge} ${spaces.big};
			display: flex;
			flex-direction: column;
			align-items: center;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
			}
		`}
`
