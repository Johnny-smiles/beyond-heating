<template>
    <main class="bg-brand-light min-h-screen">
        <section class="relative overflow-hidden bg-brand-dark py-20 text-white">
            <div class="absolute inset-0 opacity-80" :style="`background: radial-gradient(circle at 20% 20%, rgba(14,165,233,0.25), transparent 60%), radial-gradient(circle at 80% 30%, rgba(29,78,216,0.35), transparent 55%);`" />
            <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-5 text-center">
                <p class="text-sm uppercase tracking-[0.35em] text-white/70">Project Snapshots</p>
                <h1 class="text-4xl md:text-5xl font-bold">Recent HVAC transformations across East Central Minnesota</h1>
                <p class="text-lg text-white/85 max-w-3xl mx-auto">
                    A look at the system upgrades, load-balanced retrofits, and maintenance programs we have completed for Forest Lake homeowners and nearby neighborhoods.
                </p>
                <NuxtLink to="/contact" class="btn-accent bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark inline-flex justify-center">
                    Talk about your project
                </NuxtLink>
            </div>
        </section>

        <section class="py-16 md:py-20">
            <div class="max-w-6xl mx-auto px-6 space-y-12">
                <article
                    v-for="project in projects"
                    :key="project.title"
                    class="rounded-3xl border border-brand-dark/10 bg-white p-10 shadow-card"
                >
                    <header class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 class="text-3xl font-semibold text-brand-dark">{{ project.title }}</h2>
                            <p class="text-brand-dark/70">{{ project.location }}</p>
                        </div>
                        <span class="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/70">
                            {{ project.system }}
                        </span>
                    </header>

                    <div class="mt-6 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
                        <div class="space-y-4 text-brand-dark/80">
                            <p v-for="(paragraph, index) in project.description" :key="`desc-${project.slug}-${index}`">
                                {{ paragraph }}
                            </p>
                        </div>
                        <div class="space-y-5 rounded-2xl border border-brand-dark/10 bg-brand-light/80 p-6 shadow-card">
                            <h3 class="text-lg font-semibold text-brand-dark">Key results</h3>
                            <ul class="space-y-3 text-brand-dark/75">
                                <li v-for="(result, index) in project.results" :key="`result-${project.slug}-${index}`" class="flex gap-3">
                                    <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/60" />
                                    <span>{{ result }}</span>
                                </li>
                            </ul>
                            <p class="text-sm text-brand-dark/60">{{ project.timeline }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section class="bg-brand-dark py-16 md:py-20 text-white">
            <div class="max-w-6xl mx-auto px-6 space-y-8 text-center">
                <h2 class="text-3xl md:text-4xl font-semibold">Ready to write the next success story?</h2>
                <p class="text-lg text-white/80">We handle equipment selection, permitting, and follow-up tuning so your system performs regardless of season.</p>
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                    <NuxtLink to="/services" class="btn-accent bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                        Explore our services
                    </NuxtLink>
                    <NuxtLink to="/contact" class="btn-primary bg-white text-brand-dark hover:bg-brand-light hover:text-brand-dark">
                        Schedule a consult
                    </NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

const projects = [
    {
        slug: 'forest-lake-heat-pump',
        title: 'Lakefront home dual-fuel heat pump conversion',
        location: 'Forest Lake, MN',
        system: 'Heat Pump + Furnace Hybrid',
        description: [
            'A 1990s lakefront home was relying on an oversized 80% furnace and window A/C units to handle seasonal swings. We performed a room-by-room load calculation, sealed duct leakage, and installed a cold-climate variable-speed heat pump paired with a compact modulating gas furnace for backup.',
            'Outdoor equipment sits on galvanized stands above drifting snow while insulated line sets run through newly sealed chases. Smart thermostat controls balance fuel source based on outdoor temperature and utility rates.',
        ],
        results: [
            'Projected heating costs lowered by 28% with dual-fuel changeover',
            'Year-round comfort with humidity control and whisper-quiet operation',
            'Qualified for $4,200 in utility and federal incentives',
        ],
        timeline: 'Timeline: 3 planning meetings, 2 install days, follow-up commissioning visit after first temperature swing.',
    },
    {
        slug: 'white-bear-ductless',
        title: 'Ductless zoning for a finished White Bear Lake basement',
        location: 'White Bear Lake, MN',
        system: 'Multi-zone Ductless Mini-Split',
        description: [
            'A finished lower level stayed 8–10°F cooler than the main floor in winter and muggy in summer. We designed a three-zone ductless system with discrete ceiling cassettes tied to a single outdoor inverter unit.',
            'Line sets were routed through existing joist bays to keep the exterior clean. Each zone now runs on a personalized schedule so the family can fine-tune comfort for game nights or guest stays.',
        ],
        results: [
            'Zoned comfort with independent controls for media room, office, and guest suite',
            'No new ductwork required and minimal disruption to existing finishes',
            'Seasonal energy consumption reduced by an estimated 32% versus space heaters/window A/C',
        ],
        timeline: 'Timeline: 1 design visit, materials staging, 1.5-day installation with final walkthrough.',
    },
    {
        slug: 'andover-maintenance',
        title: 'Proactive maintenance program for an Andover daycare',
        location: 'Andover, MN',
        system: 'Maintenance & Indoor Air Quality',
        description: [
            'Four rooftop units were short cycling and created hot/cold classrooms. We enrolled the daycare in our Comfort Club, deep-cleaned coils, replaced failing economizer controls, and installed upgraded MERV 13 filtration with UV purification.',
            'Technicians now monitor trends remotely and adjust settings before comfort complaints surface. Reports are shared with administrators for licensing documentation.',
        ],
        results: [
            'Eliminated temperature swings greater than 2°F between classrooms',
            'Cut emergency service calls from six per year to zero',
            'Improved indoor air quality and reduced allergy symptoms for staff and kids',
        ],
        timeline: 'Timeline: Initial assessment + corrective work over 3 days, ongoing quarterly maintenance visits.',
    },
]

useHead({
    title: `Recent Projects | ${siteConfig.siteName}`,
    meta: [
        { name: 'description', content: `See how ${siteConfig.siteName} upgrades heating and cooling systems for Forest Lake, White Bear Lake, Andover, and more.` },
    ],
})
</script>
