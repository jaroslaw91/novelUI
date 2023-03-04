/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		react(),
		tsConfigPaths(),
		dts({
			include: ['src'],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'novelUI',
			fileName: 'novelui',
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
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
			exclude: ['src/**/index.{ts,tsx}', 'src/**/*.test.{ts,tsx}', 'src/**/*.stories.{ts,tsx}'],
			reporter: ['json-summary', 'text', 'html'],
		},
	},
})
