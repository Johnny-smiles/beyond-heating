<template>
    <section class="bg-white py-16 md:py-20">
        <div class="max-w-7xl mx-auto px-6 space-y-12">
            <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div class="space-y-3">
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-dark">HVAC solutions we deliver every week</h2>
                    <p class="text-lg text-brand-dark/75">From emergency furnace swaps to quiet ductless zones, here is what keeps our crews busiest.</p>
                </div>
                <NuxtLink to="/services" class="btn-accent self-start">
                    View all services
                </NuxtLink>
            </div>

            <!-- Layout: HomepageServices variant "feature-with-grid" for Beyond Heating & Air -->
            <div class="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                <NuxtLink
                    v-if="primaryService"
                    :to="`/services/${primaryService.slug}`"
                    class="group rounded-3xl border border-brand-dark/10 bg-brand-dark text-white p-10 shadow-card transition hover:-translate-y-1 hover:shadow-xl"
                >
                    <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                        Flagship Service
                    </span>
                    <h3 class="mt-6 text-3xl font-semibold leading-tight">{{ primaryService.title }}</h3>
                    <p class="mt-4 text-white/80">{{ primaryService.summary }}</p>
                    <ul class="mt-6 space-y-3 text-white/85">
                        <li v-for="(bullet, index) in primaryService.bullets" :key="`primary-bullet-${index}`" class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-white/70" />
                            <span>{{ bullet }}</span>
                        </li>
                    </ul>
                    <span class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white">
                        Explore {{ primaryService.title }}
                        <span aria-hidden="true">→</span>
                    </span>
                </NuxtLink>

                <div class="grid gap-6 sm:grid-cols-2">
                    <NuxtLink
                        v-for="service in additionalServices"
                        :key="service.slug"
                        :to="`/services/${service.slug}`"
                        class="group h-full rounded-2xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <h3 class="text-xl font-semibold text-brand-dark group-hover:text-brand-primary">
                            {{ service.title }}
                        </h3>
                        <p class="mt-3 text-brand-dark/80">{{ service.summary }}</p>
                        <ul class="mt-4 space-y-2 text-sm text-brand-dark/70">
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
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { services } from '~/data/services'

const primaryService = computed(() => services[0])
const additionalServices = computed(() => services.slice(1, 5))
</script>
