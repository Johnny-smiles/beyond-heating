<template>
    <main class="flex flex-col bg-brand-light">
        <HeroSection />

        <!-- Intro narrative -->
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-7xl mx-auto grid gap-12 px-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div class="space-y-6">
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-dark">
                        Climate-tuned HVAC planning for Minnesota homes
                    </h2>
                    <p class="text-lg text-brand-dark/80">
                        Heating loads in Forest Lake rarely match the number on your existing furnace tag. We start every project with room-by-room Manual J calculations, duct static readings, and a review of insulation so your new system matches the real demands of your home. Electricians and sheet-metal partners coordinate alongside our crew, keeping installs tidy and on schedule.
                    </p>
                    <p class="text-lg text-brand-dark/80">
                        Whether we are upgrading lake homes in Forest Lake or refreshing A/C equipment for Twin Cities Metro commuters, our team balances efficiency with comfort. Expect clean job sites, pressure-tested refrigerant lines, and detailed close-out reports that document every improvement.
                    </p>
                </div>

                <aside class="rounded-2xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card space-y-6">
                    <h3 class="text-xl font-semibold text-brand-dark">What we measure before recommending equipment</h3>
                    <ul class="space-y-4 text-brand-dark/80">
                        <li v-for="item in preInstallChecklist" :key="item" class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                    <NuxtLink to="/about" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent">
                        See our credentials
                        <span aria-hidden="true">→</span>
                    </NuxtLink>
                </aside>
            </div>
        </section>

        <!-- Services -->
        <HomepageServices />

        <!-- Process -->
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div class="max-w-3xl space-y-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-brand-dark">How we get you comfortable fast</h2>
                        <p class="text-lg text-brand-dark/80">
                            Transparent communication and prepared crews keep us on track—even when a blizzard or heatwave pops up mid-project. Here is how every job flows.
                        </p>
                    </div>
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary self-start">
                        Call {{ siteConfig.phoneDisplay }}
                    </a>
                </div>

                <div class="mt-12 grid gap-8 md:grid-cols-3">
                    <article v-for="step in processSteps" :key="step.number" class="rounded-2xl border border-brand-dark/10 bg-brand-light/90 p-8 shadow-card">
                        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Step {{ step.number }}</p>
                        <h3 class="mt-3 text-xl font-semibold text-brand-dark">{{ step.title }}</h3>
                        <p class="mt-4 text-brand-dark/80">{{ step.description }}</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Maintenance plans -->
        <section class="bg-brand-dark py-16 md:py-20 text-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div class="space-y-4 max-w-3xl">
                        <h2 class="text-3xl md:text-4xl font-bold">Maintenance & monitoring that prevent surprises</h2>
                        <p class="text-lg text-white/85">
                            Tune-ups are more than filter swaps. We inspect combustion, calibrate airflow, check refrigerant subcool/superheat, and update your customer portal with readings so we can spot trends before they become breakdowns.
                        </p>
                    </div>
                    <NuxtLink to="/contact" class="btn-accent bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                        Join the Comfort Club
                    </NuxtLink>
                </div>

                <div class="mt-12 grid gap-8 md:grid-cols-3">
                    <div v-for="highlight in maintenanceHighlights" :key="highlight.title" class="rounded-2xl border border-white/20 bg-white/5 p-8 shadow-card backdrop-blur">
                        <h3 class="text-xl font-semibold text-white">{{ highlight.title }}</h3>
                        <p class="mt-4 text-white/80">{{ highlight.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Value props -->
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto space-y-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-dark">Why homeowners count on Beyond Heating & Air</h2>
                    <p class="text-lg text-brand-dark/80">
                        Every project gets a dedicated lead tech who tracks updates, coordinates specialty trades, and checks back in once your home has gone through a full cycle.
                    </p>
                </div>

                <div class="mt-12 grid gap-8 md:grid-cols-3">
                    <div
                        v-for="(value, index) in siteConfig.valueProps"
                        :key="`value-${index}`"
                        class="rounded-2xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card"
                    >
                        <h3 class="text-xl font-semibold text-brand-dark">{{ value.title }}</h3>
                        <p class="mt-4 text-brand-dark/80">{{ value.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reviews -->
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div class="space-y-3">
                        <h2 class="text-3xl md:text-4xl font-bold text-brand-dark">Notes from recent projects</h2>
                        <p class="text-lg text-brand-dark/75">Feedback from homeowners across East Central Minnesota.</p>
                    </div>
                    <NuxtLink to="/contact" class="btn-primary">
                        Book your consultation
                    </NuxtLink>
                </div>

                <div class="mt-12 grid gap-8 md:grid-cols-3">
                    <figure v-for="(review, index) in siteConfig.reviews" :key="`review-${index}`" class="rounded-2xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card">
                        <blockquote class="text-brand-dark/85 italic">
                            “{{ review.text }}”
                        </blockquote>
                        <figcaption class="mt-5 text-sm font-semibold text-brand-dark">
                            — {{ review.name }}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto space-y-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-dark">Questions we hear most</h2>
                    <p class="text-lg text-brand-dark/80">If you do not see your question covered, give us a call and we will walk through the right fix for your system.</p>
                </div>

                <div class="mt-12 grid gap-8 md:grid-cols-2">
                    <div v-for="(faq, index) in siteConfig.faqs" :key="`faq-${index}`" class="rounded-2xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card">
                        <h3 class="text-xl font-semibold text-brand-dark">{{ faq.q }}</h3>
                        <p class="mt-4 text-brand-dark/80">{{ faq.a }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service area CTA -->
        <section class="bg-brand-dark py-16 md:py-20 text-white">
            <div class="max-w-7xl mx-auto px-6 space-y-10">
                <div class="max-w-3xl">
                    <h2 class="text-3xl md:text-4xl font-bold">Serving neighborhoods across East Central Minnesota</h2>
                    <p class="mt-4 text-white/85">
                        We are based in Forest Lake and roll trucks daily through East Central MN and the Twin Cities Metro. If you are on the edge of our map, call—odds are a crew is already nearby.
                    </p>
                </div>

                <div class="flex flex-wrap gap-3">
                    <span
                        v-for="(area, index) in siteConfig.serviceAreas"
                        :key="`area-${index}`"
                        class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85"
                    >
                        {{ area }}
                    </span>
                </div>

                <div class="rounded-2xl border border-white/20 bg-white/5 p-8 shadow-card backdrop-blur">
                    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 class="text-2xl font-semibold text-white">Ready for a comfort upgrade?</h3>
                            <p class="text-white/80">Tell us about your current system and we will build a plan with good, better, and best options.</p>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-3">
                            <NuxtLink to="/contact" class="btn-accent bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                                Get started
                            </NuxtLink>
                            <a :href="`tel:${siteConfig.phone}`" class="btn-primary bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                                Call {{ siteConfig.phoneDisplay }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import HomepageServices from '~/components/HomepageServices.vue'
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

const preInstallChecklist = [
    'Manual J heat gain and loss calculations',
    'Static pressure mapping across supply and return ducts',
    'Electrical load and breaker verification',
    'Refrigerant line routing and drain considerations',
    'Combustion air and venting compliance checks',
]

const processSteps = [
    {
        number: 1,
        title: 'Discovery & diagnostics',
        description: 'We inspect current equipment, document airflow, and capture thermal readings so our recommendations address root causes.',
    },
    {
        number: 2,
        title: 'Design & scheduling',
        description: 'You receive good-better-best options, rebate estimates, and a project calendar that coordinates specialty trades if needed.',
    },
    {
        number: 3,
        title: 'Install & follow-up',
        description: 'Crews arrive on time, protect work areas, and commission systems. We check back after the first weather swing to fine-tune settings.',
    },
]

const maintenanceHighlights = [
    {
        title: 'Bi-annual precision tune-ups',
        description: 'Documented combustion analysis, blower cleaning, coil rinses, and safety checks to keep warranties valid.',
    },
    {
        title: 'Priority service response',
        description: 'Comfort Club members jump to the front of the line with waived diagnostic fees during covered seasons.',
    },
    {
        title: 'Remote monitoring add-ons',
        description: 'Optional sensors track temperature swings and alert our team if your system drifts outside optimal performance.',
    },
]

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${siteConfig.siteUrl}#local`,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    image: siteConfig.socialImage || undefined,
    address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.location.street || undefined,
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        postalCode: siteConfig.location.zip || undefined,
        addressCountry: siteConfig.location.country,
    },
    openingHours: siteConfig.hours,
    geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.location.latitude,
        longitude: siteConfig.location.longitude,
    },
    areaServed: siteConfig.serviceAreas,
}

useHead({
    title: `${siteConfig.siteName} | Forest Lake HVAC Install & Service`,
    meta: [
        { name: 'description', content: siteConfig.description },
        { property: 'og:title', content: `${siteConfig.siteName} | Forest Lake HVAC Install & Service` },
        { property: 'og:description', content: siteConfig.description },
        { property: 'og:url', content: siteConfig.siteUrl },
    ],
    script: [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }],
})
</script>
