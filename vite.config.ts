/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/config/tests.tsx'],
		coverage: {
			all: true,
			include: [
				'src/components/**/*.{ts,tsx}',
				'src/config/**/*.{ts,tsx}',
				'src/constants/**/*.{ts,tsx}',
				'src/utils/**/*.{ts,tsx}',
			],
			exclude: [
				'src/**/index.{ts,tsx}',
				'src/**/*.test.{ts,tsx}',
				'src/**/*.stories.{ts,tsx}',
				'src/components/StorybookWrapper/**',
			],
			reporter: ['json-summary', 'text', 'html'],
		},
	},
})
