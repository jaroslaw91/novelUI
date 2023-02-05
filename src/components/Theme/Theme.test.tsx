import { describe, it, render, waitFor } from '../../utils/tests-utils'
import { Theme } from './Theme'

describe('components/Theme', () => {
	it('should be in document', async () => {
		const { getByText } = render(<Theme>Children</Theme>)

		await waitFor(() => {
			expect(getByText('Children')).toBeInTheDocument()
		})
	})
})
