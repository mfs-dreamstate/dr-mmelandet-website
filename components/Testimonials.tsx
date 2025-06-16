'use client'

import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('testimonials')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      quote: 'drømmelandet forvandlede vores virksomhed fuldstændigt. Fra en lille startup til markedsleder på 18 måneder – de så potentialet vi ikke selv kunne se.',
      name: 'Sarah Nielsen',
      title: 'CEO, TechForward ApS',
      companySize: '45 medarbejdere',
      result: '400% vækst i omsætning',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      quote: 'Det er ikke bare deres tekniske ekspertise – det er deres evne til at forstå vores vision og gøre den til virkelighed. Vi kunne ikke have ønsket os en bedre partner.',
      name: 'Michael Larsen',
      title: 'Grundlægger, Sustainable Solutions',
      companySize: '12 medarbejdere',
      result: 'International ekspansion',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      quote: 'Deres tilgang er helt unik. De tænker ikke bare i løsninger, men i transformation. Vi er ikke den samme virksomhed – vi er meget stærkere.',
      name: 'Anna Møller',
      title: 'COO, Nordic Consulting Group',
      companySize: '85 medarbejdere',
      result: 'Operationel effektivisering på 60%',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-display-lg">
              Hvad vores partnere siger
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Se hvordan vi har hjulpet virksomheder med at realisere deres visioner og opnå ekstraordinære resultater.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`glass-card p-8 md:p-12 text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                      {/* Quote */}
                      <div className="relative">
                        <svg className="absolute -top-4 -left-4 w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                        <blockquote className="text-lead italic text-gray-700 relative z-10">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      {/* Client Info */}
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-center md:text-left">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.title}</div>
                          <div className="text-sm text-gray-500">{testimonial.companySize}</div>
                        </div>
                      </div>

                      {/* Result Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {testimonial.result}
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-primary-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { number: '200+', label: 'Succesfulde transformationer' },
              { number: '95%', label: 'Kundetilfredshed' },
              { number: '15+', label: 'År med ekspertise' },
              { number: '50M+', label: 'DKK værdi skabt' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">{stat.number}</div>
                <div className="text-small text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}