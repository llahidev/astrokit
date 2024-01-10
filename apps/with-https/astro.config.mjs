import { defineConfig } from 'astro/config'
import https from '../../packages/https'

// https://astro.build/config
export default defineConfig({
	integrations: [https()],
})
