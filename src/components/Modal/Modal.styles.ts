import styled, { css } from 'styled-components'

export const ModalContainerComponent = styled.div`
	${({ theme: { breakpoints, spaces, colors } }) =>
		css`
			width: 100vw;
			height: 100vh;
			position: absolute;
			left: 0;
			top: 0;
			display: grid;
			place-items: center;
			background-color: ${colors.secondary};

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
				padding: ${spaces.medium};
				overflow: none;
			}
		`}
`

export const ModalComponent = styled.div`
	${({ theme: { breakpoints, colors, spaces } }) =>
		css`
			padding: ${spaces.medium};
			width: 700px;
			border-radius: 10px;
			background-color: ${colors.main};

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
				overflow: none;
			}
		`}
`

export const ModalActionsComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: flex-end;
			gap: ${spaces.medium};
		`}
`

export const ModalHeadingComponent = styled.div`
	${({ theme: { colors } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-content: center;

			> .close-icon {
				cursor: pointer;
				width: 30px;
				height: 30px;

				&:hover {
					color: ${colors.color5};
				}
			}
		`}
`
