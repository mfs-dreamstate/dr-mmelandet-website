'use client'

import { useEffect, useState } from 'react'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    budget: '',
    startDate: '',
    referral: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Tak for din besked! Vi vender tilbage inden 24 timer.')
  }

  const faqItems = [
    {
      question: 'Hvilke typer projekter arbejder I med?',
      answer: 'Vi arbejder med enhver organisation der har ambitioner om transformation og vækst. Det kan være alt fra startup skalering til etablerede virksomheders digitale transformation eller innovative produktudvikling.'
    },
    {
      question: 'Hvor lang tid tager et typisk projekt?',
      answer: 'Det varierer baseret på scope og kompleksitet. Strategiske projekter kan tage 4-12 uger, mens omfattende transformationer ofte løber over 6-18 måneder. Vi tilpasser altid vores tilgang til dine specifikke behov og timeline.'
    },
    {
      question: 'Arbejder I kun med danske virksomheder?',
      answer: 'Primært arbejder vi med danske virksomheder, men vi har også erfaring med nordiske og internationale projekter. Dansk er vores modersmål, men vi er flydende i engelsk og har erfaring med tværkulturelle projekter.'
    },
    {
      question: 'Hvad koster jeres services?',
      answer: 'Vores priser afhænger af projektets scope, kompleksitet og varighed. Vi tilbyder altid en uforpligtende konsultation hvor vi diskuterer dine behov og giver et skræddersyet tilbud.'
    },
    {
      question: 'Kan I garantere resultater?',
      answer: 'Vi har stærk track record og er så sikre på vores tilgang at vi tilbyder performance-baserede engagement modeller på udvalgte projekter. Din success er vores success.'
    },
    {
      question: 'Hvordan sikrer I at projektet bliver en success?',
      answer: 'Vi starter altid med grundig discovery og alignment omkring mål og expectations. Løbende kommunikation, transparent reporting og adaptive approach sikrer at vi holder fokus på resultater gennem hele forløbet.'
    }
  ]

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hej@drømmelandet.dk',
      description: 'Send os en besked, vi svarer inden 24 timer'
    },
    {
      icon: '📞',
      title: 'Telefon',
      value: '+45 27 83 14 44',
      description: 'Ring direkte for akutte spørgsmål'
    },
    {
      icon: '🕒',
      title: 'Åbningstider',
      value: 'Man-Fre 09:00-17:00',
      description: 'Vi er tilgængelige i normal arbejdstid'
    },
    {
      icon: '💬',
      title: 'Responstid',
      value: 'Inden 24 timer',
      description: 'Vi prioriterer hurtig og kvalificeret feedback'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-hero">
              Lad os tale om din vision
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Første skridt mod at realisere dine drømme starter med en samtale
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`glass-card p-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-h1 font-semibold mb-4">Fortæl os om dit projekt</h2>
                    <p className="text-body text-gray-600">
                      Jo mere du fortæller os, desto bedre kan vi forberede vores første samtale og give dig relevant rådgivning.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="input-floating">
                        <input
                          type="text"
                          name="name"
                          placeholder=" "
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <label>Dit navn *</label>
                      </div>

                      <div className="input-floating">
                        <input
                          type="email"
                          name="email"
                          placeholder=" "
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <label>Email adresse *</label>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="input-floating">
                        <input
                          type="tel"
                          name="phone"
                          placeholder=" "
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <label>Telefonnummer</label>
                      </div>

                      <div className="input-floating">
                        <input
                          type="text"
                          name="company"
                          placeholder=" "
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                        <label>Virksomhed</label>
                      </div>
                    </div>

                    <div className="input-floating">
                      <input
                        type="text"
                        name="role"
                        placeholder=" "
                        value={formData.role}
                        onChange={handleInputChange}
                      />
                      <label>Din rolle/titel</label>
                    </div>

                    <div className="input-floating">
                      <textarea
                        name="message"
                        rows={6}
                        placeholder=" "
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                      <label>Beskriv din vision eller udfordring *</label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="input-floating">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full h-[60px] pt-6 pb-2 px-4 bg-white/60 border-2 border-gray-300 rounded-lg"
                        >
                          <option value="">Vælg budget range</option>
                          <option value="under-100k">Under 100.000 DKK</option>
                          <option value="100k-500k">100.000 - 500.000 DKK</option>
                          <option value="500k-1m">500.000 - 1.000.000 DKK</option>
                          <option value="over-1m">Over 1.000.000 DKK</option>
                          <option value="discuss">Lad os diskutere det</option>
                        </select>
                        <label className="top-2 text-xs text-primary-600 font-medium">Budget range</label>
                      </div>

                      <div className="input-floating">
                        <input
                          type="text"
                          name="startDate"
                          placeholder=" "
                          value={formData.startDate}
                          onChange={handleInputChange}
                        />
                        <label>Ønsket start dato</label>
                      </div>
                    </div>

                    <div className="input-floating">
                      <select
                        name="referral"
                        value={formData.referral}
                        onChange={handleInputChange}
                        className="w-full h-[60px] pt-6 pb-2 px-4 bg-white/60 border-2 border-gray-300 rounded-lg"
                      >
                        <option value="">Hvordan hørte du om os?</option>
                        <option value="google">Google søgning</option>
                        <option value="social">Sociale medier</option>
                        <option value="referral">Anbefaling fra kollega</option>
                        <option value="website">Direkte til website</option>
                        <option value="event">Event eller konference</option>
                        <option value="other">Andet</option>
                      </select>
                      <label className="top-2 text-xs text-primary-600 font-medium">Referral kilde</label>
                    </div>

                    <button type="submit" className="btn-hero w-full">
                      Book uforpligtende konsultation
                    </button>

                    <p className="text-center text-small text-gray-500">
                      Ved at sende denne formular accepterer du vores{' '}
                      <a href="/privatpolitik" className="text-primary-600 hover:underline">
                        privatlivspolitik
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h3 className="text-h2 font-semibold">Kontakt information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="glass-card p-4 space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{info.icon}</span>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-primary-600 font-medium">{info.value}</p>
                        </div>
                      </div>
                      <p className="text-small text-gray-600 ml-11">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Happens Next */}
              <div className={`glass-card p-6 space-y-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h3 className="text-h3 font-semibold">Hvad sker der nu?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                    <p className="text-small">Vi gennemgår din besked og forbereder relevant materiale</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                    <p className="text-small">Vi kontakter dig inden 24 timer for at aftale en tid</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                    <p className="text-small">Vi holder en uforpligtende konsultation (30-60 min)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                    <p className="text-small">Vi sender et skræddersyet forslag inden 1 uge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className={`text-center space-y-6 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-display-lg">Ofte stillede spørgsmål</h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${1000 + index * 100}ms` }}
                >
                  <h3 className="text-h3 font-semibold">{item.question}</h3>
                  <p className="text-body text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}