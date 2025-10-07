<template>
    <main class="bg-brand-light min-h-screen">
        <section class="bg-white py-16 md:py-20">
            <div class="max-w-5xl mx-auto px-6 space-y-6">
                <p class="text-sm uppercase tracking-[0.35em] text-brand-primary/70">About Us</p>
                <h1 class="text-4xl md:text-5xl font-bold text-brand-dark">Trusted HVAC specialists for North Metro homes</h1>
                <p class="text-lg text-brand-dark/75">
                    Beyond Heating & Air started in Forest Lake with one mission: deliver high-performing comfort systems without the guesswork families had grown used to. Founder Craig Nelson combined years of mechanical contracting with a building-science mindset, adding load calculations, airflow diagnostics, and follow-up visits to every job—whether it is a single furnace swap or a full electrification project.
                </p>
                <p class="text-lg text-brand-dark/75">
                    Our team now includes licensed HVAC technicians, sheet-metal fabricators, and project coordinators who keep installs tidy and communication clear. We work across East Central MN and the Twin Cities Metro, handling furnaces, air conditioners, heat pumps, ductless, and indoor air quality upgrades for primary homes, cabins, and small commercial spaces.
                </p>
            </div>
        </section>

        <section class="py-16 md:py-20">
            <div class="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
                <div class="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card space-y-5">
                    <h2 class="text-2xl font-semibold text-brand-dark">What guides every project</h2>
                    <ul class="space-y-4 text-brand-dark/75">
                        <li class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                            <span><strong>Data before decisions.</strong> Manual J calculations, blower door tests, and combustion analysis inform every recommendation.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                            <span><strong>Respect for your home.</strong> Boot covers, floor protection, and on-site cleanup are non-negotiable for our crews.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                            <span><strong>Transparent communication.</strong> You get good-better-best options, rebate guidance, and status updates at every stage.</span>
                        </li>
                    </ul>
                </div>

                <div class="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-card space-y-5">
                    <h2 class="text-2xl font-semibold text-brand-dark">Credentials & affiliations</h2>
                    <ul class="space-y-4 text-brand-dark/75">
                        <li class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                            <span>Licensed, bonded, and insured mechanical contractors in the State of Minnesota.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                            <span>NATE-certified service technicians and EPA 608 certification across the team.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                            <span>Preferred trade partners for Xcel Energy and Minnesota Power rebate programs.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary/70" />
                            <span>Continuous training with leading manufacturers including Lennox, Bryant, and Mitsubishi.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="bg-white py-16 md:py-20">
            <div class="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div class="space-y-4">
                    <h2 class="text-3xl font-semibold text-brand-dark">Beyond the install</h2>
                    <p class="text-brand-dark/75">
                        We keep long-term relationships with our clients by planning ahead. Seasonal reminders, performance reports, and remote monitoring options mean you never have to guess if your system is doing its job. If readings drift, we call before you need to call us.
                    </p>
                    <p class="text-brand-dark/75">
                        Every homeowner receives a digital job folder with equipment manuals, warranty registrations, photos, and inspection reports. When you sell or refinance, all the documentation is ready.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 pt-4">
                        <NuxtLink to="/services" class="btn-primary">Explore our services</NuxtLink>
                        <NuxtLink to="/contact" class="btn-accent">Schedule a consultation</NuxtLink>
                    </div>
                </div>

                <div class="rounded-3xl border border-brand-dark/10 bg-brand-light/80 p-8 shadow-card space-y-4">
                    <h3 class="text-xl font-semibold text-brand-dark">Community focus</h3>
                    <p class="text-brand-dark/75">
                        We sponsor Forest Lake youth sports, support neighborhood energy-efficiency workshops, and donate labor each fall to winterize homes for seniors who need a hand.
                    </p>
                    <p class="text-brand-dark/75">
                        Have a community project or nonprofit facility that needs HVAC help? Reach out—we set aside volunteer hours every quarter.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

useHead({
    title: `About ${siteConfig.siteName} | Forest Lake HVAC Specialists`,
    meta: [
        { name: 'description', content: `${siteConfig.siteName} provides heating and cooling installs, repairs, and maintenance throughout Forest Lake and East Central MN with licensed HVAC technicians.` },
    ],
})
</script>
