<template>
    <footer class="bg-brand-light text-brand-dark pt-16 pb-10">
        <div class="max-w-7xl mx-auto grid gap-12 px-6 md:grid-cols-2 lg:grid-cols-4">
            <div class="space-y-4">
                <img src="/logo.png" :alt="`${brandName} Logo`" class="w-20 h-20 rounded-full bg-white p-2 shadow-card object-contain" />
                <p class="text-xl font-semibold">{{ brandName }}</p>
                <p class="text-brand-dark/70">
                    Heating and cooling experts serving Forest Lake, East Central MN, and the Twin Cities Metro.
                </p>
                <p class="text-sm text-brand-dark/60" v-if="addressLine">
                    {{ addressLine }}
                </p>
            </div>

            <div class="space-y-3">
                <h3 class="text-lg font-semibold">Quick Links</h3>
                <ul class="space-y-2 text-brand-dark/80">
                    <li><NuxtLink to="/" class="hover:text-brand-primary">Home</NuxtLink></li>
                    <li><NuxtLink to="/about" class="hover:text-brand-primary">About</NuxtLink></li>
                    <li><NuxtLink to="/services" class="hover:text-brand-primary">Services</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="hover:text-brand-primary">Contact</NuxtLink></li>
                </ul>
            </div>

            <div class="space-y-3">
                <h3 class="text-lg font-semibold">Top Services</h3>
                <ul class="space-y-2 text-brand-dark/80">
                    <li v-for="service in topServices" :key="service.slug">
                        <NuxtLink :to="`/services/${service.slug}`" class="hover:text-brand-primary">
                            {{ service.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="space-y-4">
                <h3 class="text-lg font-semibold">Talk with a Pro</h3>
                <p>
                    <a :href="`tel:${phoneE164}`" class="text-brand-primary font-semibold hover:text-brand-accent">
                        {{ phoneDisplay }}
                    </a>
                </p>
                <p>
                    <a :href="`mailto:${email}`" class="hover:text-brand-primary">
                        {{ email }}
                    </a>
                </p>
                <div class="flex flex-wrap gap-3 pt-2">
                    <NuxtLink to="/contact" class="btn-primary">
                        Request Service
                    </NuxtLink>
                    <a
                        v-if="websiteLink"
                        :href="websiteLink"
                        target="_blank"
                        rel="noopener"
                        class="btn-accent"
                    >
                        Visit Website
                    </a>
                </div>
            </div>
        </div>

        <p class="text-center text-sm mt-12 border-t border-brand-dark/10 pt-6 text-brand-dark/60">
            © {{ new Date().getFullYear() }} {{ brandName }}. All rights reserved.
        </p>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'
import { services } from '~/data/services'

const brandName = computed(() => siteConfig.siteName || 'Beyond Heating & Air')
const email = computed(() => siteConfig.email || 'beyondheatingandairllc@gmail.com')

const phoneDisplay = computed(() => {
    if (siteConfig.phoneDisplay) return siteConfig.phoneDisplay
    const raw = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (raw.length === 11 && raw.startsWith('1')) return `(${raw.slice(1, 4)}) ${raw.slice(4, 7)}-${raw.slice(7)}`
    if (raw.length === 10) return `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`
    return siteConfig.phone || ''
})

const phoneE164 = computed(() => {
    const raw = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (!raw) return ''
    if (raw.startsWith('1') && raw.length === 11) return `+${raw}`
    if (raw.length === 10) return `+1${raw}`
    return `+${raw}`
})

const addressLine = computed(() => {
    const loc = siteConfig.location || {}
    if (loc.street) return `${loc.street}, ${loc.city}, ${loc.state} ${loc.zip || ''}`.trim()
    if (loc.city && loc.state) return `${loc.city}, ${loc.state}`.trim()
    return ''
})

const topServices = computed(() => services.slice(0, 4))
const websiteLink = computed(() => siteConfig.social?.website || siteConfig.siteUrl)
</script>
