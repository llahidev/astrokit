import type { AstroIntegration } from "astro"
import mkcert from "vite-plugin-mkcert"

export default function createIntegration(): AstroIntegration {
	// See the Integration API docs for full details
	// https://docs.astro.build/en/reference/integrations-reference/
	return {
		// name: "@example/my-integration",
		name: "dev-https",
		hooks: {
			"astro:config:setup": async ({ updateConfig, logger }) => {
				// See the @astrojs/react integration for an example
				// https://github.com/withastro/astro/blob/main/packages/integrations/react/src/index.ts

				updateConfig({
					vite: {
						plugins: [mkcert()],
					},
				})

				logger.info("HTTPS ready.")
			},
		},
	}
}