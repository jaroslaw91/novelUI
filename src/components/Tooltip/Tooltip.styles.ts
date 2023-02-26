import { Arrow } from 'react-laag'
import styled, { css } from 'styled-components'

export const TooltipComponent = styled.div`
	${({ theme: { colors, spaces } }) =>
		css`
			min-width: 200px;
			max-width: 250px;
			background: ${colors.secondary};
			color: ${colors.main};
			padding: ${spaces.small} ${spaces.medium};
			text-align: center;
			z-index: 9999;
		`}
`

export const ArrowComponent = styled(Arrow)`
	${({ theme: { colors } }) =>
		css`
			background-color: ${colors.main};
			color: ${colors.main};

			z-index: 9999;
		`}
`
