import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "BBH Sans Bartle",
            cssVariable: "--font-bartle",
            fallbacks: ["serif"]
        }]
    }
});
