<template>
    <main v-if="service" class="bg-brand-light min-h-screen">
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-6xl mx-auto px-6">
                <nav class="text-sm text-brand-dark/60 mb-6">
                    <NuxtLink to="/" class="hover:text-brand-primary">Home</NuxtLink>
                    <span class="mx-2">/</span>
                    <NuxtLink to="/services" class="hover:text-brand-primary">Services</NuxtLink>
                    <span class="mx-2">/</span>
                    <span class="text-brand-dark">{{ service.title }}</span>
                </nav>

                <div class="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
                    <article class="space-y-6">
                        <h1 class="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                            {{ service.title }}
                        </h1>
                        <p class="text-lg text-brand-dark/75">
                            {{ service.intro }}
                        </p>

                        <section class="rounded-3xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card">
                            <h2 class="text-2xl font-semibold text-brand-dark mb-4">What this service includes</h2>
                            <ul class="space-y-3 text-brand-dark/80">
                                <li v-for="(bullet, index) in service.bullets" :key="`bullet-${index}`" class="flex gap-3">
                                    <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                                    <span>{{ bullet }}</span>
                                </li>
                            </ul>
                        </section>

                        <section class="prose prose-lg max-w-none text-brand-dark/80">
                            <p v-for="(paragraph, index) in bodyParagraphs" :key="`para-${index}`">{{ paragraph }}</p>
                        </section>
                    </article>

                    <aside class="space-y-8">
                        <div class="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card">
                            <h2 class="text-xl font-semibold text-brand-dark">Need this service?</h2>
                            <p class="mt-4 text-brand-dark/75">
                                {{ service.summary }}
                            </p>
                            <div class="mt-6 flex flex-col gap-3">
                                <NuxtLink to="/contact" class="btn-primary">
                                    {{ service.microCta }}
                                </NuxtLink>
                                <a :href="`tel:${siteConfig.phone}`" class="btn-accent">
                                    Call {{ siteConfig.phoneDisplay }}
                                </a>
                            </div>
                        </div>

                        <div class="rounded-3xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card">
                            <h2 class="text-xl font-semibold text-brand-dark">Service area</h2>
                            <p class="mt-2 text-brand-dark/70">
                                We regularly complete {{ service.title.toLowerCase() }} projects across:
                            </p>
                            <ul class="mt-4 space-y-2 text-brand-dark/80">
                                <li v-for="(area, index) in siteConfig.serviceAreas" :key="`area-${index}`" class="flex gap-2">
                                    <span class="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary/50" />
                                    <span>{{ area }}</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="bg-white py-16 md:py-20" v-if="service.faqs.length">
            <div class="max-w-6xl mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold text-brand-dark text-center">Service FAQs</h2>
                <p class="mt-3 text-lg text-brand-dark/70 text-center">Answers specific to {{ service.title.toLowerCase() }} projects in Minnesota.</p>

                <div class="mt-12 grid gap-8 md:grid-cols-2">
                    <div v-for="(faq, index) in service.faqs" :key="`faq-${index}`" class="rounded-2xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card">
                        <h3 class="text-xl font-semibold text-brand-dark">{{ faq.q }}</h3>
                        <p class="mt-3 text-brand-dark/80">{{ faq.a }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-brand-dark py-16 md:py-20 text-white">
            <div class="max-w-6xl mx-auto px-6">
                <div class="rounded-3xl border border-white/15 bg-white/5 p-10 shadow-card backdrop-blur flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-semibold text-white">Ready to get started?</h2>
                        <p class="mt-2 text-white/80">
                            Share a few details about your home and timeline. We will put together equipment options and schedule the onsite assessment.
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <NuxtLink to="/contact" class="btn-accent bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                            Request a quote
                        </NuxtLink>
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                            Call {{ siteConfig.phoneDisplay }}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <main v-else class="max-w-4xl mx-auto px-6 py-16">
        <h1 class="text-3xl font-bold text-brand-dark">Service Not Found</h1>
        <p class="mt-4 text-brand-dark/75">
            Please return to the
            <NuxtLink to="/services" class="text-brand-primary underline decoration-brand-primary/60 underline-offset-4">
                services page
            </NuxtLink>
            for the latest offerings.
        </p>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '#imports'
import { services } from '~/data/services'
import { siteConfig } from '~/site.config'

const route = useRoute()
const service = services.find((item) => item.slug === route.params.slug)

const bodyParagraphs = computed(() => (service?.body ? service.body.split('\n\n') : []))

if (service) {
    const pageTitle = `${service.title} | ${siteConfig.siteName}`
    const pageDescription = service.summary
    const pageUrl = `${siteConfig.siteUrl}/services/${service.slug}`

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.title,
        description: service.summary,
        serviceType: service.title,
        areaServed: siteConfig.serviceAreas,
        url: pageUrl,
        provider: {
            '@type': 'HVACBusiness',
            name: siteConfig.siteName,
            telephone: siteConfig.phone,
            areaServed: siteConfig.serviceAreas,
            url: siteConfig.siteUrl,
        },
    }

    useHead({
        title: pageTitle,
        meta: [
            { name: 'description', content: pageDescription },
            { property: 'og:title', content: pageTitle },
            { property: 'og:description', content: pageDescription },
            { property: 'og:url', content: pageUrl },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: pageTitle },
            { name: 'twitter:description', content: pageDescription },
        ],
        link: [{ rel: 'canonical', href: pageUrl }],
        script: [{ type: 'application/ld+json', children: JSON.stringify(serviceSchema) }],
    })
} else {
    useHead({
        title: `Service Not Found | ${siteConfig.siteName}`,
        meta: [{ name: 'robots', content: 'noindex' }],
    })
}
</script>
