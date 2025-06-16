'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: 'Strategisk Rådgivning',
      headline: 'Strategisk rådgivning der skaber retning',
      subheadline: 'Fra vision til actionable strategy',
      description: 'Enhver stor transformation starter med den rigtige strategi. Vores strategiske rådgivning hjælper dig med at definere klar retning, identificere de største muligheder og skabe konkrete handlingsplaner der leverer målbare resultater.',
      whatYouGet: [
        'Comprehensive situationsanalyse og markedsforståelse',
        'Klar strategic roadmap med prioriterede initiativer',
        'Risk assessment og mitigation strategies',
        'KPI framework og success metrics',
        'Løbende strategic guidance og optimering'
      ],
      perfectFor: [
        'Virksomheder i transition eller vækstfase',
        'Organisationer med ambitiøse ekspansionsplaner',
        'Ledere der står overfor komplekse beslutninger',
        'Teams der har brug for alignment omkring retning'
      ],
      icon: '🎯',
      href: '/services/strategisk-raadgivning',
      cta: 'Book strategisk konsultation'
    },
    {
      title: 'Innovationsudvikling',
      headline: 'Innovation der skaber konkurrencefordele',
      subheadline: 'Fra cutting-edge idé til markedsførende løsning',
      description: 'Innovation er nøglen til varig success. Vi hjælper dig med at systematisere innovation, fra idegenering til markedsintroduktion, og sikrer at dine investeringer i innovation skaber reel værdi.',
      whatYouGet: [
        'Innovation audit og opportunity mapping',
        'Strukturerede innovationsprocesser',
        'Prototype udvikling og testing',
        'Go-to-market strategier',
        'Intellectual property protection'
      ],
      perfectFor: [
        'Tech virksomheder der vil accelerere produktudvikling',
        'Etablerede virksomheder der vil genopfinde sig selv',
        'Startups der har brug for systematic approach til innovation',
        'Organisationer der vil skabe new revenue streams'
      ],
      icon: '💡',
      href: '/services/innovation',
      cta: 'Ignite innovation'
    },
    {
      title: 'Transformationsledelse',
      headline: 'Transformationsledelse der sikrer success',
      subheadline: 'Navigér komplekse forandringer med ekspert guidance',
      description: 'Forandring er svært. Succesfuld transformation kræver ikke bare den rigtige strategi, men også ekspert execution. Vi guider dig gennem hele processen og sikrer at forandringen sker på en måde der skaber buy-in og varige resultater.',
      whatYouGet: [
        'Change readiness assessment',
        'Comprehensive transformation roadmap',
        'Change management og communication strategies',
        'Leadership coaching og team development',
        'Performance monitoring og kontinuerlig optimering'
      ],
      perfectFor: [
        'Organisationer der gennemgår digital transformation',
        'Virksomheder der merger eller akquirer',
        'Teams der implementerer nye systemer eller processer',
        'Ledere der skal drive cultural change'
      ],
      icon: '🚀',
      href: '/services/transformation',
      cta: 'Start transformation'
    }
  ]

  const approach = [
    {
      title: 'Holistisk tilgang',
      description: 'Vi ser på hele økosystemet og sikrer sammenhæng mellem strategi, mennesker og teknologi.',
      icon: '🔄'
    },
    {
      title: 'Data-drevet beslutninger',
      description: 'Alle anbefalinger er baseret på solid analyse og dokumenteret evidens.',
      icon: '📊'
    },
    {
      title: 'Agil implementering',
      description: 'Vi tilpasser løbende baseret på læring og feedback for at sikre optimal værdi.',
      icon: '⚡'
    },
    {
      title: 'Langsigtede partnerskaber',
      description: 'Vi investerer i din success og sikrer vedvarende værdi over tid.',
      icon: '🤝'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-hero">
              Ekspertise der forvandler visioner til virkelighed
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Uanset hvor ambitiøs din drøm er, har vi ekspertisen til at gøre den til virkelighed
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 300}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div>
                        <h2 className="text-display-md font-semibold text-primary-600">
                          {service.title}
                        </h2>
                        <p className="text-h3 text-gray-600 mt-2">{service.subheadline}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-h2 font-semibold">{service.headline}</h3>
                      <p className="text-body text-gray-600">{service.description}</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-h3 font-semibold mb-4">What You Get:</h4>
                        <ul className="space-y-2">
                          {service.whatYouGet.map((item, idx) => (
                            <li key={idx} className="text-body text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-h3 font-semibold mb-4">Perfect For:</h4>
                        <ul className="space-y-2">
                          {service.perfectFor.map((item, idx) => (
                            <li key={idx} className="text-body text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href={service.href} className="btn-primary inline-block">
                      {service.cta}
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="glass-card p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600"></div>
                      </div>
                      
                      {/* Icon */}
                      <div className="text-9xl relative z-10">
                        {service.icon}
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl floating-element"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full opacity-20 blur-xl floating-element"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            <div className={`text-center space-y-6 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-display-lg">Vores tilgang</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Vi følger en proven metodologi der sikrer konsistente resultater på tværs af alle projekter og industrier.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 text-center space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${1200 + index * 200}ms` }}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-h3 font-semibold">{item.title}</h3>
                  <p className="text-body text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto space-y-6">
              <h2 className="text-h1 font-semibold">
                Klar til at komme i gang?
              </h2>
              <p className="text-body text-gray-600">
                Lad os diskutere hvordan vores ekspertise kan hjælpe dig med at realisere dine ambitioner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt" className="btn-hero">
                  Book gratis konsultation
                </Link>
                <Link href="/cases" className="btn-ghost">
                  Se vores cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}