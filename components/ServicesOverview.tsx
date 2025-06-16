'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services-overview')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'Strategisk Rådgivning',
      headline: 'Transformer din vision til handling',
      description: 'Vi hjælper dig med at definere retning, identificere muligheder og skabe konkrete handlingsplaner der leverer resultater.',
      benefits: ['Klar strategi', 'Reduceret risiko', 'Accelereret vækst'],
      icon: '🎯',
      href: '/services/strategisk-raadgivning'
    },
    {
      title: 'Innovationsudvikling',
      headline: 'Fra ide til markedsførende løsning',
      description: 'Vi realiserer dine mest ambitiøse ideer gennem systematisk innovation og cutting-edge implementering.',
      benefits: ['Kompetitiv fordel', 'First-mover advantage', 'Skalerbar innovation'],
      icon: '💡',
      href: '/services/innovation'
    },
    {
      title: 'Transformationsledelse',
      headline: 'Navigér forandring med ekspert guidance',
      description: 'Vi guider dig gennem komplekse transformationer og sikrer succesfuld implementering på alle niveauer.',
      benefits: ['Smooth transitions', 'Medarbejder buy-in', 'Varige forandringer'],
      icon: '🚀',
      href: '/services/transformation'
    }
  ]

  return (
    <section id="services-overview" className="section">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-display-lg">
              Vores ekspertise. Dine resultater.
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Vi tilbyder skræddersyede løsninger der transformerer visioner til virkelighed gennem dokumenteret ekspertise og innovative tilgange.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`service-card block transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                <div className="icon">
                  {service.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-h2 font-semibold text-primary-600">
                    {service.title}
                  </h3>
                  
                  <h4 className="text-h3 font-medium text-gray-800">
                    {service.headline}
                  </h4>
                  
                  <p className="text-body text-gray-600">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-small font-medium text-gray-700">Key Benefits:</p>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-small text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <span className="inline-flex items-center text-primary-600 font-medium group">
                      Læs mere
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto space-y-6">
              <h3 className="text-h1 font-semibold">
                Klar til at komme i gang?
              </h3>
              <p className="text-body text-gray-600">
                Book en uforpligtende konsultation og lad os diskutere hvordan vi kan hjælpe dig med at opnå dine mål.
              </p>
              <Link href="/kontakt" className="btn-hero">
                Start din transformation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}