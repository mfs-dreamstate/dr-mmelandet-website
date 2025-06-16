'use client'

import { useEffect, useState } from 'react'

export default function Process() {
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

    const element = document.getElementById('process')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Vi forstår din drøm',
      subtitle: 'Discovery & Vision',
      description: 'Dyb analyse af dine mål, udfordringer og muligheder. Vi starter altid med at forstå din vision fuldstændigt.',
      duration: '1-2 uger',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Vi designer løsningen',
      subtitle: 'Strategy & Planning',
      description: 'Skræddersyet strategi og detaljeret roadmap der tager dig fra nuværende situation til dit ønskede outcome.',
      duration: '2-3 uger',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Vi realiserer potentialet',
      subtitle: 'Implementation & Execution',
      description: 'Hands-on implementering med løbende optimering og tilpasning baseret på resultater og feedback.',
      duration: '3-12 måneder',
      icon: '⚡'
    },
    {
      number: '04',
      title: 'Vi sikrer vedvarende success',
      subtitle: 'Growth & Evolution',
      description: 'Kontinuerlig support, monitoring og evolution for at sikre langsigtet værdi og løbende forbedringer.',
      duration: 'Ongoing partnership',
      icon: '📈'
    }
  ]

  return (
    <section id="process" className="section bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-display-lg">
              Sådan arbejder vi sammen
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Vores systematiske tilgang sikrer at vi leverer de rigtige resultater i den rigtige rækkefølge, så din transformation bliver en succes.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 transform -translate-x-1/2"></div>

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${200 + index * 200}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{step.icon}</div>
                        <div className="text-6xl font-bold text-gray-200">{step.number}</div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-h1 font-semibold text-primary-600">
                          {step.title}
                        </h3>
                        <h4 className="text-h2 font-medium text-gray-800">
                          {step.subtitle}
                        </h4>
                        <p className="text-body text-gray-600">
                          {step.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="glass-card p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600"></div>
                        </div>
                        
                        {/* Icon */}
                        <div className="text-8xl relative z-10">
                          {step.icon}
                        </div>
                        
                        {/* Step Number */}
                        <div className="absolute top-4 right-4 text-2xl font-bold text-primary-600">
                          {step.number}
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 blur-lg floating-element"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full opacity-20 blur-lg floating-element"></div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Dot for Desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto space-y-6">
              <h3 className="text-h1 font-semibold">
                Klar til at starte din transformation?
              </h3>
              <p className="text-body text-gray-600">
                Lad os tale om hvordan vores proven process kan hjælpe dig med at opnå dine mål hurtigere og mere effektivt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/kontakt" className="btn-hero">
                  Book gratis konsultation
                </a>
                <a href="/cases" className="btn-ghost">
                  Se vores cases
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}