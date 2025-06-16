'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CasesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const cases = [
    {
      title: 'TechForward ApS',
      category: 'Strategisk Transformation',
      challenge: 'Skalering fra startup til markedsleder',
      solution: 'Omfattende vækststrategi og operational excellence program',
      results: ['400% vækst i omsætning', '45 medarbejdere ansat', 'Markedsleder på 18 måneder'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      testimonial: 'drømmelandet forvandlede vores virksomhed fuldstændigt. Fra en lille startup til markedsleder på 18 måneder – de så potentialet vi ikke selv kunne se.',
      client: 'Sarah Nielsen, CEO'
    },
    {
      title: 'Sustainable Solutions',
      category: 'Innovationsudvikling',
      challenge: 'International ekspansion med bæredygtige løsninger',
      solution: 'Innovation roadmap og go-to-market strategi for nordiske markeder',
      results: ['International ekspansion', 'Nye produktlinjer lanceret', '3x øget markedsandel'],
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop',
      testimonial: 'Det er ikke bare deres tekniske ekspertise – det er deres evne til at forstå vores vision og gøre den til virkelighed.',
      client: 'Michael Larsen, Grundlægger'
    },
    {
      title: 'Nordic Consulting Group',
      category: 'Operationel Transformation',
      challenge: 'Efficiency optimization og digital transformation',
      solution: 'Comprehensive process redesign og technology implementation',
      results: ['60% operationel effektivisering', 'Digital workflow implementation', 'Improved client satisfaction'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      testimonial: 'Deres tilgang er helt unik. De tænker ikke bare i løsninger, men i transformation. Vi er ikke den samme virksomhed – vi er meget stærkere.',
      client: 'Anna Møller, COO'
    }
  ]

  const stats = [
    { number: '200+', label: 'Succesfulde transformationer', icon: '🎯' },
    { number: '95%', label: 'Kundetilfredshed', icon: '⭐' },
    { number: '15+', label: 'År med ekspertise', icon: '📅' },
    { number: '50M+', label: 'DKK værdi skabt', icon: '💰' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-hero">
              Resultater der taler for sig selv
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Se hvordan vi har hjulpet virksomheder med at realisere deres visioner og opnå ekstraordinære resultater
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center space-y-4">
                <div className="text-4xl">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary-600">{stat.number}</div>
                <div className="text-small text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            <div className={`text-center space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-display-lg">Featured Case Studies</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Udvalgte successtories der viser vores tilgang og de resultater vi skaber for vores partnere.
              </p>
            </div>

            <div className="space-y-20">
              {cases.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${600 + index * 300}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="space-y-4">
                        <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {caseStudy.category}
                        </div>
                        <h3 className="text-h1 font-semibold">{caseStudy.title}</h3>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-h3 font-semibold mb-2 text-red-600">Udfordring</h4>
                          <p className="text-body text-gray-600">{caseStudy.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-h3 font-semibold mb-2 text-blue-600">Løsning</h4>
                          <p className="text-body text-gray-600">{caseStudy.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-h3 font-semibold mb-3 text-green-600">Resultater</h4>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="text-body text-gray-600 flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="glass-card p-6 space-y-4">
                        <div className="flex items-start space-x-4">
                          <svg className="w-8 h-8 text-primary-200 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                          </svg>
                          <div>
                            <p className="text-body italic text-gray-700 mb-3">"{caseStudy.testimonial}"</p>
                            <p className="text-small font-semibold text-gray-900">{caseStudy.client}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="glass-card p-4 overflow-hidden">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center space-y-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-display-lg">Sådan opnår vi disse resultater</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Vores systematiske tilgang sikrer konsistente resultater på tværs af alle projekter og industrier.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '01', title: 'Discovery', description: 'Dyb forståelse af udfordringer og muligheder' },
                { step: '02', title: 'Strategy', description: 'Skræddersyet strategi og detaljeret roadmap' },
                { step: '03', title: 'Execution', description: 'Hands-on implementering med løbende optimering' },
                { step: '04', title: 'Evolution', description: 'Kontinuerlig support og performance monitoring' }
              ].map((item, index) => (
                <div key={index} className="glass-card p-6 space-y-4 text-center">
                  <div className="text-3xl font-bold text-primary-600">{item.step}</div>
                  <h3 className="text-h3 font-semibold">{item.title}</h3>
                  <p className="text-body text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto space-y-6">
              <h2 className="text-h1 font-semibold">
                Din success story starter her
              </h2>
              <p className="text-body text-gray-600">
                Bliv en del af vores imponerende portfolio af succesfulde transformationer. Lad os hjælpe dig med at skrive din egen succeshistorie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt" className="btn-hero">
                  Start din transformation
                </Link>
                <Link href="/services" className="btn-ghost">
                  Se vores services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}