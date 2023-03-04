import { useEffect, useState } from 'react'

export const useProgressiveImg = (lowQuality: string, highQuality: string) => {
	const [source, setSource] = useState(lowQuality)

	useEffect(() => {
		setSource(lowQuality)

		const img = new Image()

		img.src = highQuality

		img.onload = () => setSource(highQuality)
	}, [lowQuality, highQuality])

	const isBlur = source === lowQuality

	return { source, isBlur }
}
