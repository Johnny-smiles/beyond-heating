// site.config.ts
export const siteConfig = {
    siteName: 'Beyond Heating & Air',
    siteUrl: 'https://www.beyondheatingandair.com',
    businessType: 'HVACBusiness',

    // Contact
    phone: '+1-763-516-0494',
    phoneDisplay: '(763) 516-0494',
    email: 'beyondheatingandairllc@gmail.com',

    // Location
    location: {
        street: '',
        city: 'Forest Lake',
        state: 'MN',
        zip: '',
        country: 'US',
        latitude: 45.2786,
        longitude: -93.0093,
    },

    // Business meta
    description: 'Residential & light commercial HVAC in the Twin Cities and East Central Minnesota—furnaces, A/C, heat pumps, mini-splits, maintenance, and indoor air quality.',
    hours: 'Mo-Fr 08:00-18:00, Sa 09:00-14:00',

    // Assets
    socialImage: '/og-image.jpg',
    favicon: '/favicon.png',

    // Theme (used for quick references within components)
    theme: {
        primaryColor: '#0f172a',
        secondaryColor: '#f3f4f6',
        accentColor: '#1d4ed8',
        gradientFrom: '#0ea5e9',
        gradientTo: '#1d4ed8',
        fontFamilyHeading: 'Montserrat, sans-serif',
        fontFamilyBody: 'Inter, system-ui, sans-serif',
        borderRadius: '0.75rem',
    },

    // Hero + intro content
    hero: {
        eyebrow: 'Trusted HVAC Specialists',
        headline: 'Forest Lake heating & cooling fixes near you',
        subheadline: 'Right-sized installs, fast repairs, and precision tune-ups for every season in East Central Minnesota.',
        intro: 'From frozen Forest Lake nights to muggy Twin Cities Metro afternoons, Beyond Heating & Air keeps homes running efficiently. Our certified technicians handle furnace changeouts, cold-climate heat pumps, ductless zones, and precision maintenance built around your schedule. We arrive in stocked trucks, document every step, and specify right-sized equipment so you only pay for what you need. Neighbors call us when they want transparent pricing, clean installs, and responsive follow-ups near me.',
        bullets: [
            'Energy-smart system design for Minnesota weather',
            'Licensed, insured, and EPA-certified technicians',
            'Straightforward rebate and financing guidance',
            'Same-week installs with 24/7 emergency diagnostics'
        ],
        ctaPrimaryLabel: 'Schedule Service',
        ctaSecondaryLabel: 'Request a Quote',
    },

    // Why choose us
    valueProps: [
        {
            title: 'Load Calculations that Fit Your Home',
            text: 'Manual J and duct evaluations ensure Forest Lake homes get equipment sized for actual demand, not guesswork.',
        },
        {
            title: 'Respectful, Prepared Crews',
            text: 'Boot covers, drop cloths, and stocked trucks mean tidy workspaces and solutions finished on the first visit.',
        },
        {
            title: 'Transparent Options & Follow-Through',
            text: 'Side-by-side estimates, rebate paperwork guidance, and post-install check-ins keep your comfort plan on track.',
        },
    ],

    reviews: [
        {
            name: 'Lena W.',
            text: 'Beyond replaced our aging furnace and balanced the ductwork—our bedrooms finally heat evenly and the crew left everything spotless.',
        },
        {
            name: 'Marcus J.',
            text: 'They found a failing blower motor during a tune-up and had the part on the truck. Same-day fix before the next cold snap.',
        },
        {
            name: 'Priya S.',
            text: 'Our Forest Lake lakehouse now has quiet ductless zones. The team handled electrical, permits, and rebate paperwork without a hitch.',
        },
    ],

    faqs: [
        {
            q: 'Do you offer emergency heating repairs in winter?',
            a: 'Yes. Call our main line and an on-call technician will return winter emergency requests within 30 minutes to get heat restored safely.',
        },
        {
            q: 'Can you help with utility rebates on new equipment?',
            a: 'We register qualifying furnaces, A/C systems, and heat pumps with Xcel Energy and local co-ops so you can submit rebates with complete documentation.',
        },
        {
            q: 'What brands do you service?',
            a: 'Our technicians are trained on the leading HVAC brands and carry universal parts for Bryant, Lennox, Carrier, Trane, Goodman, and more.',
        },
        {
            q: 'How often should my HVAC system be tuned?',
            a: 'We recommend twice-yearly visits—once in spring for cooling, once in fall for heating—to keep warranties valid and efficiency high.',
        },
        {
            q: 'Do you work on light commercial properties?',
            a: 'Yes. Rooftop units, split systems, and controls for small offices or retail spaces are all part of our service offerings.',
        },
        {
            q: 'Can you install smart thermostats?',
            a: 'Absolutely. We set up smart thermostats, configure schedules, and train your household on getting the most from connected controls.',
        },
    ],

    serviceAreas: ['Forest Lake', 'East Central MN', 'Twin Cities Metro'],

    social: {
        website: 'https://www.beyondheatingandair.com',
        facebook: '',
        instagram: '',
        yelp: '',
        gbp: '',
    },
}
