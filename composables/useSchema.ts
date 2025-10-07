import { siteConfig } from '~/site.config'

export const useSchema = () => {
  
  const getLocalBusinessSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': siteConfig.businessType || 'LocalBusiness',
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
        postalCode: siteConfig.location.zip,
        addressCountry: siteConfig.location.country
      },
      openingHours: siteConfig.hours,
      geo: siteConfig.location.latitude && siteConfig.location.longitude ? {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.location.latitude,
        longitude: siteConfig.location.longitude
      } : undefined,
      areaServed: siteConfig.serviceAreas,
      ...(siteConfig.businessType === 'HVACBusiness' && {
        '@type': 'HVACBusiness',
        serviceType: 'Heating, Ventilation, and Air Conditioning'
      }),
      ...(siteConfig.businessType === 'AutoRepair' && {
        '@type': 'AutoRepair',
        serviceType: 'Automotive Repair Services'
      })
    }
  }
  
  const getServiceSchema = (service: any) => {
    const pageUrl = `${siteConfig.siteUrl}/services/${service.slug}`

    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: service.title,
      description: service.summary,
      serviceType: service.title,
      areaServed: siteConfig.serviceAreas,
      url: pageUrl,
      provider: {
        '@type': siteConfig.businessType || 'LocalBusiness',
        name: siteConfig.siteName,
        telephone: siteConfig.phone,
        areaServed: siteConfig.serviceAreas,
        url: siteConfig.siteUrl
      }
    }
  }
  
  return {
    getLocalBusinessSchema,
    getServiceSchema
  }
}
