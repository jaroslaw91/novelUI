import styled, { css } from 'styled-components'

export const StorybookWrapperComponent = styled.div`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			width: 100%;
			height: 100vh;
			margin: 0;
			padding: ${spaces.big};
			display: flex;
			justify-content: center;
			align-items: center;
		`}
`
