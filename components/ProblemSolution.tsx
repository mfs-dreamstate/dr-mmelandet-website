'use client'

import { useEffect, useState } from 'react'

export default function ProblemSolution() {
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

    const element = document.getElementById('problem-solution')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: '✨',
      title: 'Visionær strategi',
      description: 'Vi tænker stort og handler smart'
    },
    {
      icon: '🎯',
      title: 'Målbare resultater',
      description: 'Konkrete outcomes du kan måle på'
    },
    {
      icon: '🤝',
      title: 'Ægte partnerskab',
      description: 'Vi er investeret i din langsigtede success'
    },
    {
      icon: '🇩🇰',
      title: 'Dansk kvalitet',
      description: 'Excellence i hver detalje'
    },
    {
      icon: '🚀',
      title: 'Proven process',
      description: 'Testet og verificeret tilgang'
    }
  ]

  return (
    <section id="problem-solution" className="section bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Section Header */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-display-lg">
              Fra vision til virkelighed – vi gør det muligt
            </h2>
          </div>

          {/* Problem Statement */}
          <div className={`glass-card p-8 md:p-12 space-y-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-h1 text-red-600 font-semibold">Udfordringen</h3>
              <p className="text-lead">
                Du har store drømme og ambitiøse mål. Men mellem vision og virkelighed ligger ofte komplekse udfordringer der kræver specialiseret ekspertise, innovative tilgange og pålidelig udførelse.
              </p>
            </div>
          </div>

          {/* Solution Statement */}
          <div className={`glass-card p-8 md:p-12 space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-h1 text-green-600 font-semibold">Løsningen</h3>
              <p className="text-lead">
                drømmelandet bygger broen mellem dine ambitioner og reelle resultater. Med vores holistiske tilgang, dokumenterede track record og passion for at skabe forandring, forvandler vi dine største visioner til konkrete succeser.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`glass-card p-6 text-center space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-h3 font-semibold text-primary-600">{benefit.title}</h4>
                <p className="text-body text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}