'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-secondary-400/20 to-secondary-600/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-primary-300/15 to-primary-500/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Hero Headline */}
            <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h1 className="text-hero">
                Forvandl dine drømme til virkelighed
              </h1>
              
              <p className="text-lead max-w-2xl">
                Din betroede partner for enestående løsninger der skaber målbar værdi og varig forandring
              </p>
              
              <div className="text-body max-w-2xl">
                I drømmelandet tror vi på, at enhver vision kan blive til virkelighed med de rigtige eksperter ved din side. Vi kombinerer dansk kvalitet med international innovation for at levere løsninger der ikke bare møder dine forventninger – de overgår dem.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <Link href="/kontakt" className="btn-hero">
                Start din transformation
              </Link>
              <Link href="/cases" className="btn-ghost">
                Se vores resultater
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center gap-8 pt-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-small text-gray-600">5.0 kundetilfredshed</span>
              </div>
              
              <div className="text-small text-gray-600">
                200+ succesfulde transformationer
              </div>
              
              <div className="text-small text-gray-600">
                15+ års ekspertise
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:col-span-5">
            <div className={`relative transform transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              {/* Main Glass Card */}
              <div className="glass-card p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-h2 font-semibold">Klar til at transformere din virksomhed?</h3>
                  <p className="text-body">
                    Book en uforpligtende konsultation og oplev hvordan vi kan hjælpe dig med at realisere dine ambitioner.
                  </p>
                </div>
                
                {/* Quick Contact Form Preview */}
                <div className="space-y-4">
                  <div className="input-floating">
                    <input 
                      type="text" 
                      placeholder=" " 
                      className="w-full"
                      readOnly
                    />
                    <label>Dit navn</label>
                  </div>
                  
                  <div className="input-floating">
                    <input 
                      type="email" 
                      placeholder=" " 
                      className="w-full"
                      readOnly
                    />
                    <label>Email adresse</label>
                  </div>
                  
                  <Link href="/kontakt" className="btn-primary w-full text-center block">
                    Book gratis konsultation
                  </Link>
                </div>
                
                <div className="text-center">
                  <p className="text-small text-gray-500">
                    Ingen forpligtelser • Svar inden 24 timer
                  </p>
                </div>
              </div>

              {/* Floating Elements around the card */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl floating-element"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full opacity-20 blur-xl floating-element"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}