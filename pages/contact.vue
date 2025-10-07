<template>
    <main class="bg-brand-light min-h-screen">
        <section class="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <p class="text-sm uppercase tracking-[0.35em] text-brand-primary/70">Contact</p>
            <h1 class="text-4xl md:text-5xl font-bold text-brand-dark mt-2">Plan your next HVAC project</h1>
            <p class="mt-4 text-lg text-brand-dark/75 max-w-3xl">
                Share a few details about your property and current equipment. A Beyond Heating & Air project coordinator will reach out within one business day to schedule diagnostics or a consultation.
            </p>

            <div
                v-if="showConfirmation"
                class="mt-8 rounded-2xl border border-green-400/40 bg-green-100/70 px-6 py-4 text-green-800 text-lg font-medium"
            >
                Thank you! We received your request and will be in touch shortly.
            </div>

            <form
                name="hvac-intake"
                method="POST"
                action="/contact?success=1"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                class="mt-10 space-y-8 rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card"
            >
                <input type="hidden" name="form-name" value="hvac-intake" />
                <p class="hidden">
                    <label>Don’t fill this out <input name="bot-field" /></label>
                </p>

                <div class="grid gap-6 md:grid-cols-2">
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            class="form-input"
                            placeholder="Jane Smith"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            class="form-input"
                            placeholder="you@email.com"
                        />
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2">
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            class="form-input"
                            placeholder="(763) 516-0494"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Preferred Contact</label>
                        <select name="contactPreference" class="form-input">
                            <option>Call</option>
                            <option>Text</option>
                            <option>Email</option>
                        </select>
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2">
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Property Type</label>
                        <select name="propertyType" class="form-input">
                            <option>Single-family home</option>
                            <option>Townhome / Condo</option>
                            <option>Lake home / Cabin</option>
                            <option>Light commercial</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Service Interested In</label>
                        <select name="serviceInterest" class="form-input">
                            <option>Furnace installation or repair</option>
                            <option>Air conditioning</option>
                            <option>Heat pump / electrification</option>
                            <option>Ductless zones</option>
                            <option>Maintenance & tune-ups</option>
                            <option>Indoor air quality</option>
                            <option>Not sure—need guidance</option>
                        </select>
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2">
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Current Equipment Age</label>
                        <input
                            type="text"
                            name="equipmentAge"
                            class="form-input"
                            placeholder="e.g., Furnace installed in 2009"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-brand-dark mb-2">Ideal Timeline</label>
                        <select name="timeline" class="form-input">
                            <option>As soon as possible</option>
                            <option>In the next 2–4 weeks</option>
                            <option>This season</option>
                            <option>Planning / budgeting</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-semibold text-brand-dark mb-2">Project Details</label>
                    <textarea
                        name="message"
                        rows="5"
                        class="form-input"
                        placeholder="Tell us about rooms that need help, hot or cold spots, or previous work done."
                    ></textarea>
                </div>

                <div class="flex flex-wrap gap-3">
                    <button type="submit" class="btn-primary">Submit Request</button>
                    <a :href="`tel:${phone}`" class="btn-accent">Call {{ phoneDisplay }}</a>
                    <a :href="`sms:${phone}`" class="btn-outline">Text our team</a>
                </div>
            </form>

            <section class="mt-14 rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card grid gap-8 lg:grid-cols-3">
                <article class="space-y-2">
                    <h2 class="text-xl font-semibold text-brand-dark">Office Hours</h2>
                    <p class="text-brand-dark/70">{{ siteConfig.hours }}</p>
                </article>
                <article class="space-y-2">
                    <h2 class="text-xl font-semibold text-brand-dark">Service Area</h2>
                    <p class="text-brand-dark/70">{{ siteConfig.serviceAreas.join(', ') }}</p>
                </article>
                <article class="space-y-2">
                    <h2 class="text-xl font-semibold text-brand-dark">Preferred Documentation</h2>
                    <p class="text-brand-dark/70">Photos of equipment, thermostat settings, or recent utility bills help us prep for the visit.</p>
                </article>
            </section>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useHead } from '#imports'
import { siteConfig } from '~/site.config'

const showConfirmation = ref(false)

onMounted(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.has('success') || window.location.hash === '#success') {
        showConfirmation.value = true
    }
})

const phone = computed(() => siteConfig.phone)
const phoneDisplay = computed(() => siteConfig.phoneDisplay || siteConfig.phone)

useHead({
    title: `Contact ${siteConfig.siteName} | Schedule HVAC Service`,
    meta: [
        { name: 'description', content: `Request HVAC installs, repairs, or maintenance with ${siteConfig.siteName}. Serving Forest Lake and East Central Minnesota.` },
    ],
})
</script>

<style scoped>
.form-input {
    @apply w-full rounded-lg border border-brand-dark/15 bg-white px-4 py-3 text-brand-dark/80 focus:outline-none focus:ring-2 focus:ring-brand-primary/60;
}
</style>
