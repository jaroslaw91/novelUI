/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

import * as packageJson from './package.json'

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
			entry: resolve('src', 'index.ts'),
			name: 'SimpleUI',
			formats: ['es', 'umd'],
			fileName: format => `simple-ui.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies)],
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
