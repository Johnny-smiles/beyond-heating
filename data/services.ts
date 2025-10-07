export type ServiceFaq = {
    q: string
    a: string
}

export type Service = {
    slug: string
    title: string
    summary: string
    intro: string
    bullets: string[]
    body: string
    microCta: string
    faqs: ServiceFaq[]
}

export const services: Service[] = [
    {
        slug: 'furnace-installation-repair',
        title: 'Furnace Installation & Repair',
        summary: 'Design/build furnace replacements, emergency repairs, and combustion tuning for tight Minnesota homes.',
        intro: 'When single-digit temps hit Forest Lake you cannot wait for heat. Our licensed technicians evaluate gas lines, chimneys, airflow, and home insulation before recommending a properly sized furnace. We install high-efficiency two-stage and modulating systems, double-check static pressure, and balance registers so every room holds temperature even through polar vortex stretches.',
        bullets: [
            'Manual J sizing and duct balancing before every install',
            'High-efficiency two-stage and modulating gas furnaces',
            'Emergency diagnostics with stocked ignitors, boards, and motors',
            'Combustion analysis and carbon monoxide safety reports',
            'Humidifier and IAQ upgrades tied into new equipment',
        ],
        body: [
            'If your existing furnace is nursing cracked heat exchangers or short cycling, we document the deficiencies and show you repair versus replace options. Our crews protect flooring, remove old equipment responsibly, and coordinate electrical and venting updates on the same day so you are never without heat overnight.',
            'Post-install we commission the system, set blower profiles, and register warranties. Expect a follow-up call after the next cold snap to confirm everything stays evenly heated.',
        ].join('\n\n'),
        microCta: 'Book furnace diagnostics',
        faqs: [
            {
                q: 'Can you replace a furnace in one day?',
                a: 'Yes. Most changeouts are completed in a single visit, including haul-away and commissioning, provided existing ductwork is in good shape.',
            },
            {
                q: 'Do you service oil-to-gas conversions?',
                a: 'We handle the HVAC portion and coordinate with trusted plumbers to run new gas piping and verify venting for safe operation.',
            },
            {
                q: 'What efficiency ratings do you recommend?',
                a: 'In Minnesota we recommend 95%+ AFUE two-stage units so you get comfort stability and the best rebate options from local utilities.',
            },
            {
                q: 'Will my thermostat need to be upgraded?',
                a: 'Variable-speed furnaces benefit from communicating thermostats. We install and program them so you can manage staging easily.',
            },
        ],
    },
    {
        slug: 'air-conditioning',
        title: 'Air Conditioning',
        summary: 'Precision A/C installs, coil cleanings, and repairs that beat humid Twin Cities summers.',
        intro: 'A sticky July afternoon in East Central MN tests every air conditioner. We evaluate your ductwork, blower settings, and refrigerant line placement before matching you with a SEER2-compliant system. Our teams arrive with drop cloths, vacuum pumps, and digital gauges to ensure tight connections and perfect charge levels, even on retrofit installations.',
        bullets: [
            'High-efficiency SEER2 equipment sized to your home',
            'Evaporator coil cleaning and sanitizing for airflow',
            'Refrigerant leak detection and recharge services',
            'Smart thermostat setup for humidity and staging control',
            'Condensate management and overflow protection',
        ],
        body: [
            'We replace failing condensers, rebuild airflow bottlenecks, and integrate variable-speed indoor motors so cooling stays even on the hottest days. Every system is commissioned with superheat/subcool verification and airflow measurements at key registers.',
            'If a breakdown happens mid-season, we prioritize stocked parts and offer loaner window units while we complete larger repairs so your family stays comfortable.',
        ].join('\n\n'),
        microCta: 'Schedule A/C evaluation',
        faqs: [
            {
                q: 'Do you offer same-day cooling repairs?',
                a: 'During peak season we reserve technician slots for emergency A/C calls and can often restore cooling the same day with stocked parts.',
            },
            {
                q: 'Can you add A/C to a home without existing ductwork?',
                a: 'Yes. We can install ductless mini-splits or run new high-velocity ductwork depending on the layout and budget.',
            },
            {
                q: 'Will a new A/C reduce my energy bills?',
                a: 'Modern SEER2 systems paired with ECM blowers typically reduce energy use by 20–30% compared to legacy single-stage equipment.',
            },
            {
                q: 'Do you handle warranty repairs?',
                a: 'We service most major brands and process manufacturer warranty claims on behalf of our clients.',
            },
        ],
    },
    {
        slug: 'heat-pumps',
        title: 'Heat Pumps',
        summary: 'Cold-climate heat pumps, dual-fuel hybrids, and control strategies tailored to Minnesota winters.',
        intro: 'Heat pumps are now a realistic option for Forest Lake homes thanks to cold-climate inverter technology. We analyze your existing distribution system, electrical capacity, and fuel costs to determine whether an all-electric or dual-fuel setup makes sense. Every install includes commissioning that verifies low-ambient performance and defrost cycles.',
        bullets: [
            'Cold-climate inverter heat pumps rated to -15°F',
            'Hybrid dual-fuel pairing with existing gas furnaces',
            'Utility rebate paperwork and load calculations',
            'Integrated controls that balance comfort and cost',
            'Optional desuperheater and indoor air quality add-ons',
        ],
        body: [
            'Our designs consider back-up heat staging to keep operating costs reasonable when temps dive. We install outdoor units on snow stands, insulate line sets, and program defrost schedules specific to Minnesota weather.',
            'After startup we train you on thermostat settings, monitor energy usage, and offer remote diagnostics so we can tweak performance without rolling a truck.',
        ].join('\n\n'),
        microCta: 'Explore heat pump options',
        faqs: [
            {
                q: 'Will a heat pump work in subzero weather?',
                a: 'Yes. The cold-climate systems we install maintain capacity well below zero and we include supplemental heat for the rare extreme cold snaps.',
            },
            {
                q: 'Can you integrate a heat pump with my existing furnace?',
                a: 'Absolutely. Dual-fuel control boards decide when to run electric or gas heat based on outdoor temperature and energy prices.',
            },
            {
                q: 'What rebates are available?',
                a: 'Xcel Energy, Minnesota Power, and federal incentives can offset thousands on qualifying installations. We provide filled-out paperwork with your receipts.',
            },
            {
                q: 'Do heat pumps require different maintenance?',
                a: 'We clean coils, check refrigerant pressures, update firmware, and confirm defrost sequences during your scheduled tune-ups.',
            },
        ],
    },
    {
        slug: 'ductless-mini-splits',
        title: 'Ductless Mini-Splits',
        summary: 'Quiet, efficient zoned comfort for additions, lake homes, and rooms that refuse to stay balanced.',
        intro: 'When additions, lofts, or lake home bunk rooms never match the rest of the house, ductless mini-splits deliver comfort instantly. We map the room loads, evaluate line-set routes, and choose heads that complement your interior design. Outdoor units are mounted on vibration-isolating brackets to keep things quiet.',
        bullets: [
            'Single and multi-zone systems with inverter compressors',
            'Discrete ceiling cassette and wall-mount options',
            'Cold-climate models that heat effectively through winter',
            'Wireless and app-based controls for every family member',
            'Maintenance plans that keep filters and coils spotless',
        ],
        body: [
            'Installations take one to two days with minimal disruption. We core-drill clean penetrations, protect siding, and flash every exterior transition so weather never gets in.',
            'Each indoor head is paired with washable filters and condensate protection. We show you how to clean components between our professional maintenance visits.',
        ].join('\n\n'),
        microCta: 'Plan your ductless zones',
        faqs: [
            {
                q: 'Can mini-splits heat in Minnesota winters?',
                a: 'Yes. We install cold-climate models that provide reliable heat down to -13°F, perfect for year-round comfort.',
            },
            {
                q: 'How many rooms can one outdoor unit serve?',
                a: 'Multi-zone condensers can support up to eight indoor heads depending on capacity. We design the layout around your floor plan.',
            },
            {
                q: 'Are mini-splits efficient?',
                a: 'They use inverter compressors that modulate output, often cutting energy use by 30–40% compared to electric baseboards or window units.',
            },
            {
                q: 'Do you offer ceiling-recessed options?',
                a: 'We install low-profile ceiling cassettes when wall space is limited, keeping the system discreet.',
            },
        ],
    },
    {
        slug: 'maintenance-and-tune-ups',
        title: 'Maintenance & Tune-Ups',
        summary: 'Seasonal tune-ups and monitoring plans that keep systems efficient and warranties intact.',
        intro: 'Preventive maintenance keeps heating and cooling equipment reliable through Forest Lake winters and humid summers. Our Comfort Club includes two precision tune-ups each year plus priority scheduling and discounts on parts. Every visit is documented so you can see performance trends over time.',
        bullets: [
            'Spring A/C and fall furnace tune-ups with full reporting',
            'Combustion, airflow, and refrigerant diagnostics',
            'Filter programs and coil cleaning for indoor air quality',
            'Water heater, humidifier, and IAQ add-on service',
            'Priority response with waived diagnostic fees for members',
        ],
        body: [
            'During each visit we test safety controls, inspect electrical connections, clean burners, vacuum blower assemblies, and flush condensate drains. Detailed digital reports show readings compared to manufacturer specs.',
            'Members receive reminder texts, filter deliveries on request, and a direct line to our service manager if something sounds off between visits.',
        ].join('\n\n'),
        microCta: 'Join the Comfort Club',
        faqs: [
            {
                q: 'How long does a tune-up take?',
                a: 'Most maintenance visits take 60–90 minutes per system depending on accessibility and any cleaning required.',
            },
            {
                q: 'Do maintenance plans protect my warranty?',
                a: 'Yes. Manufacturers require documented annual service. We keep records and provide copies if you ever need to submit a claim.',
            },
            {
                q: 'Can I add IAQ products during a tune-up?',
                a: 'Absolutely. We can install humidifiers, UV lights, and high-MERV filtration during the same appointment.',
            },
            {
                q: 'What if the tech finds an issue?',
                a: 'We review photos, pricing, and options with you before making any repair so there are no surprises.',
            },
        ],
    },
]
