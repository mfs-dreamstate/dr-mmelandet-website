'use client'

import { useEffect, useState } from 'react'
import { Metadata } from 'next'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      title: 'Innovation i hjertet',
      description: 'Vi pusher grænserne og finder nye veje til bedre resultater. Innovation er ikke bare hvad vi gør – det er hvem vi er.',
      icon: '💡'
    },
    {
      title: 'Autentisk partnerskab',
      description: 'Vi ser dig som partner, ikke kunde. Din success er vores success, og vi investerer i langsigtede relationer baseret på gensidig respekt og tillid.',
      icon: '🤝'
    },
    {
      title: 'Dansk kvalitet',
      description: 'Vi er stolte af vores danske rødder og de værdier det repræsenterer: grundighed, pålidelighed, innovation og attention to detail.',
      icon: '🇩🇰'
    },
    {
      title: 'Resultater der betyder noget',
      description: 'Vi måles på dine resultater. Alt hvad vi gør, er designet til at skabe målbar værdi og positive forandringer.',
      icon: '📈'
    },
    {
      title: 'Kontinuerlig læring',
      description: 'Vi tror på at blive bedre hver dag. Vi lærer af hvert projekt og bruger denne viden til at levere endnu bedre resultater næste gang.',
      icon: '📚'
    }
  ]

  const milestones = [
    {
      year: '2009',
      title: 'Grundlæggelse',
      description: 'drømmelandet blev grundlagt med en mission om at bygge broen mellem vision og virkelighed.'
    },
    {
      year: '2012',
      title: 'Første store transformation',
      description: 'Succesfuld transformation af førende dansk teknologivirksomhed.'
    },
    {
      year: '2015',
      title: '100 projekter',
      description: 'Nåede milepælen på 100 succesfulde transformationsprojekter.'
    },
    {
      year: '2018',
      title: 'International ekspansion',
      description: 'Udvidelse til nordiske markeder med focus på innovation.'
    },
    {
      year: '2023',
      title: '200+ transformationer',
      description: 'Over 200 succesfulde transformationer med 95% kundetilfredshed.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-hero">
              Historien bag drømmelandet
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Grundlagt på troen om at enhver vision kan blive til virkelighed
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className={`text-center space-y-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-display-lg">
                Fra drøm til Danmarks foretrukne transformationspartner
              </h2>
            </div>

            <div className={`glass-card p-8 md:p-12 space-y-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="space-y-6">
                <p className="text-lead">
                  Det hele startede med en simpel observation: Alt for mange virksomheder og visionaire ledere havde fantastiske ideer, men manglede de rigtige værktøjer og ekspertise til at realisere dem.
                </p>
                
                <p className="text-body">
                  I 2009 grundlagde vi drømmelandet med en mission om at bygge broen mellem vision og virkelighed. Vi troede på, at med den rette kombination af strategisk tænkning, innovativ tilgang og dansk kvalitet, kunne vi hjælpe ambitiøse organisationer med at opnå ekstraordinære resultater.
                </p>
                
                <p className="text-body">
                  I dag, mere end et årti senere, har vi transformeret hundredvis af virksomheder og skabt millioner i værdi for vores partnere. Men vores mission forbliver den samme: at gøre det muligt for visionære ledere at realisere deres største drømme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className={`text-center space-y-6 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-display-md">
                Vores rejse gennem årene
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 transform md:-translate-x-1/2"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 z-10">
                      <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping opacity-20"></div>
                    </div>

                    {/* Content */}
                    <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                      <div className="glass-card p-6 space-y-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-h2 font-semibold">{milestone.title}</h3>
                        <p className="text-body text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className={`glass-card p-8 space-y-6 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-h1 font-semibold text-primary-600">Vores mission</h2>
              <p className="text-body">
                At være Danmarks foretrukne partner for transformationer der skaber varig værdi og positive forandringer gennem innovation, ekspertise og autentisk dansk kvalitet.
              </p>
            </div>

            <div className={`glass-card p-8 space-y-6 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-h1 font-semibold text-primary-600">Vores vision</h2>
              <p className="text-body">
                Et Danmark hvor ingen drømme forbliver drømme – hvor visioner bliver til virkelighed gennem det rigtige partnerskab og den rette ekspertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            <div className={`text-center space-y-6 transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-display-lg">
                Vores værdier guide alt hvad vi gør
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`glass-card p-8 space-y-6 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${1600 + index * 200}ms` }}
                >
                  <div className="text-5xl">{value.icon}</div>
                  <h3 className="text-h2 font-semibold text-primary-600">{value.title}</h3>
                  <p className="text-body text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 delay-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto space-y-6">
              <h2 className="text-h1 font-semibold">
                Lad os lære dig at kende
              </h2>
              <p className="text-body text-gray-600">
                Vi tror på personlige relationer og ægte partnerskaber. Lad os tale om hvordan vi kan hjælpe dig med at realisere dine drømme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/kontakt" className="btn-hero">
                  Book gratis konsultation
                </a>
                <a href="/cases" className="btn-ghost">
                  Se vores succeser
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}