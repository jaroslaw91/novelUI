import styled, { css } from 'styled-components'

export const StorybookWrapperComponent = styled.div`
	width: 100%;

	${({ theme: { colors } }) =>
		css`
			width: 100%;
			height: 100vh;
			background: ${colors.main};
			display: flex;
			justify-content: center;
			align-items: center;
		`}
`
