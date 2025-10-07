<template>
    <main class="bg-brand-light min-h-screen">
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-6xl mx-auto px-6 space-y-6">
                <p class="text-sm uppercase tracking-[0.35em] text-brand-primary/70">Services</p>
                <h1 class="text-4xl md:text-5xl font-bold text-brand-dark">Heating & cooling expertise for every season</h1>
                <p class="text-lg text-brand-dark/75 max-w-3xl">
                    Explore our most-requested HVAC services across Forest Lake and the Twin Cities Metro. Each project starts with diagnostics, detailed estimates, and a dedicated project manager who keeps you updated from scheduling to follow-up.
                </p>
            </div>
        </section>

        <section class="py-16 md:py-20">
            <div class="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
                <NuxtLink
                    v-for="service in services"
                    :key="service.slug"
                    :to="`/services/${service.slug}`"
                    class="group rounded-3xl border border-brand-dark/10 bg-white p-10 shadow-card transition hover:-translate-y-1 hover:shadow-xl"
                >
                    <span class="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/70">
                        HVAC Service
                    </span>
                    <h2 class="mt-5 text-2xl font-semibold text-brand-dark group-hover:text-brand-primary">
                        {{ service.title }}
                    </h2>
                    <p class="mt-3 text-brand-dark/75">{{ service.summary }}</p>
                    <ul class="mt-5 space-y-2 text-sm text-brand-dark/70">
                        <li v-for="(bullet, index) in service.bullets.slice(0, 3)" :key="`${service.slug}-bullet-${index}`" class="flex gap-2">
                            <span class="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary/50" />
                            <span>{{ bullet }}</span>
                        </li>
                    </ul>
                    <span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:text-brand-accent">
                        Learn more
                        <span aria-hidden="true">→</span>
                    </span>
                </NuxtLink>
            </div>
        </section>

        <section class="bg-brand-dark py-16 md:py-20 text-white">
            <div class="max-w-6xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div class="space-y-3 max-w-3xl">
                    <h2 class="text-3xl font-semibold">Not sure which service fits?</h2>
                    <p class="text-white/80">
                        We are happy to perform a whole-home assessment and present good, better, and best options tailored to your comfort goals and budget.
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <NuxtLink to="/contact" class="btn-accent bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                        Book a consultation
                    </NuxtLink>
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                        Call {{ siteConfig.phoneDisplay }}
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

useHead({
    title: `HVAC Services | ${siteConfig.siteName}`,
    meta: [
        { name: 'description', content: `Heating, cooling, and indoor air quality services from ${siteConfig.siteName} across Forest Lake, East Central MN, and the Twin Cities Metro.` },
    ],
})
</script>
