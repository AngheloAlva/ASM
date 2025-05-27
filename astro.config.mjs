// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import react from "@astrojs/react"

const site = process.env.PUBLIC_SITE_URL || "http://localhost:4321"

// https://astro.build/config
export default defineConfig({
	site,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [react()],
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
		routing: {
			prefixDefaultLocale: true,
		},
	},
})
