import { defineConfig } from 'astro/config'
import debugcss from '../../packages/debugcss'

// https://astro.build/config
export default defineConfig({
	integrations: [debugcss()],
})
