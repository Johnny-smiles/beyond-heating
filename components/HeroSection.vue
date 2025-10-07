<template>
    <section class="relative overflow-hidden bg-brand-dark text-white">
        <!-- Variant: with-cta-band selected for Beyond Heating & Air -->
        <div
            class="absolute inset-0 opacity-90"
            :style="`background: linear-gradient(135deg, ${siteConfig.theme.gradientFrom}, ${siteConfig.theme.gradientTo});`"
        />

        <!-- Decorative circles -->
        <div class="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full border border-white/20" />
        <div class="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

        <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div class="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
                <div class="space-y-6">
                    <p class="text-sm uppercase tracking-[0.35em] text-white/70">{{ siteConfig.hero.eyebrow }}</p>
                    <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">{{ siteConfig.hero.headline }}</h1>
                    <p class="text-lg md:text-xl text-white/85 max-w-2xl">{{ siteConfig.hero.subheadline }}</p>
                    <p class="text-base md:text-lg text-white/90 max-w-3xl">{{ siteConfig.hero.intro }}</p>

                    <ul class="grid gap-3 sm:grid-cols-2">
                        <li v-for="(point, index) in siteConfig.hero.bullets" :key="`hero-bullet-${index}`" class="flex items-start gap-3">
                            <span class="mt-1 flex h-2.5 w-2.5 flex-none rounded-full bg-white/80" />
                            <span class="text-sm md:text-base text-white/90">{{ point }}</span>
                        </li>
                    </ul>

                    <div class="flex flex-col sm:flex-row gap-4 pt-2">
                        <NuxtLink to="/contact" class="btn-primary bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                            {{ siteConfig.hero.ctaPrimaryLabel }}
                        </NuxtLink>
                        <a :href="`tel:${siteConfig.phone}`" class="btn-accent bg-white/10 text-white hover:bg-white/20">
                            {{ siteConfig.hero.ctaSecondaryLabel }}
                        </a>
                    </div>
                </div>

                <aside class="rounded-2xl bg-white/10 backdrop-blur px-8 py-10 shadow-lg space-y-8">
                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-2">Your comfort plan</h2>
                        <p class="text-white/80">
                            Licensed HVAC pros delivering furnaces, heat pumps, ductless, and maintenance across Forest Lake, East Central MN, and the wider Twin Cities Metro.
                        </p>
                    </div>
                    <div class="space-y-5">
                        <div class="flex items-center justify-between text-white/85">
                            <span class="text-sm uppercase tracking-wide">Call Anytime</span>
                            <span class="font-semibold text-white">{{ heroPhoneDisplay }}</span>
                        </div>
                        <div class="flex items-center justify-between text-white/85">
                            <span class="text-sm uppercase tracking-wide">Office Hours</span>
                            <span class="font-semibold text-white/90">{{ siteConfig.hours }}</span>
                        </div>
                        <div class="flex items-center justify-between text-white/85">
                            <span class="text-sm uppercase tracking-wide">Service Area</span>
                            <span class="text-right font-semibold text-white/90">{{ siteConfig.serviceAreas.join(' • ') }}</span>
                        </div>
                    </div>
                    <NuxtLink to="/services" class="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white hover:text-brand-light">
                        Explore services
                        <span aria-hidden="true">→</span>
                    </NuxtLink>
                </aside>
            </div>

            <div class="mt-12 rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-8 py-6">
                    <div>
                        <h2 class="text-lg font-semibold text-white">Plan ahead for stress-free seasons</h2>
                        <p class="text-white/80 max-w-3xl">
                            Bundle spring A/C and fall furnace tune-ups, and we’ll waive diagnostic fees if a repair is needed within 60 days of service.
                        </p>
                    </div>
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                        Call {{ heroPhoneDisplay }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'

const heroPhoneDisplay = computed(() => {
    const digits = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    return siteConfig.phoneDisplay || siteConfig.phone
})
</script>
