import { siteConfig } from './site.config'

const analyticsDomain = (() => {
    try {
        return new URL(siteConfig.siteUrl).hostname
    } catch {
        return 'beyondheatingandair.com'
    }
})()

export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: 'static',
        prerender: {
            crawlLinks: true,
            failOnError: false,
            ignore: ['/\_ipx/**', '/privacy', '/terms'],
        },
    },

    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: `${siteConfig.siteName} — ${siteConfig.hero.headline}`,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: siteConfig.description },
                { name: 'robots', content: 'index, follow' },
                { property: 'og:title', content: `${siteConfig.siteName} — ${siteConfig.hero.headline}` },
                { property: 'og:description', content: siteConfig.description },
                { property: 'og:image', content: `${siteConfig.siteUrl}/logo.png` },
                { property: 'og:url', content: siteConfig.siteUrl },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: `${siteConfig.siteName} — ${siteConfig.hero.headline}` },
                { name: 'twitter:description', content: siteConfig.description },
                { name: 'twitter:image', content: `${siteConfig.siteUrl}/logo.png` },
            ],
            link: [
                { rel: 'canonical', href: siteConfig.siteUrl },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap',
                },
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            ],
            script: [
                {
                    src: 'https://plausible.io/js/script.js',
                    defer: true,
                    'data-domain': analyticsDomain,
                },
            ],
        },
    },

    image: {
        provider: 'ipx',
        quality: 75,
        screens: { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
        formats: 'webp',
    },

    css: ['~/assets/main.css'],

    modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '~/assets/main.css',
        configPath: 'tailwind.config.js',
    },

    site: {
        url: siteConfig.siteUrl,
        name: siteConfig.siteName,
    },

    compatibilityDate: '2025-04-10',

    devServer: {
        port: 3000,
    },

    runtimeConfig: {
        public: {
            siteName: siteConfig.siteName,
            siteUrl: siteConfig.siteUrl,
        },
    },
})
