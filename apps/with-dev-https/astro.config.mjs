import { defineConfig } from "astro/config"
import devHttps from "../../packages/dev-https"

// https://astro.build/config
export default defineConfig({
	integrations: [devHttps()],
})
