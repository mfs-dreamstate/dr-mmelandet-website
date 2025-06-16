import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Strategisk rådgivning', href: '/services/strategisk-raadgivning' },
        { label: 'Innovationsudvikling', href: '/services/innovation' },
        { label: 'Transformationsledelse', href: '/services/transformation' },
        { label: 'Se alle services', href: '/services' }
      ]
    },
    {
      title: 'Ressourcer',
      links: [
        { label: 'Case studies', href: '/cases' },
        { label: 'Indsigter og guides', href: '/indsigter' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Book konsultation', href: '/kontakt' }
      ]
    },
    {
      title: 'Virksomheden',
      links: [
        { label: 'Om drømmelandet', href: '/om-os' },
        { label: 'Vores team', href: '/om-os#team' },
        { label: 'Vores tilgang', href: '/om-os#approach' },
        { label: 'Kontakt os', href: '/kontakt' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-hero text-3xl font-bold mb-4">
                  drømmelandet
                </h3>
                <p className="text-lead text-gray-300 max-w-md">
                  Vi forvandler drømme til virkelighed gennem ekspertise, innovation og dansk kvalitet.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">hej@drømmelandet.dk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+45 27 83 14 44</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Man-Fre 09:00-17:00</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-h3 font-semibold text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="section-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-h2 font-semibold">
                Hold dig opdateret
              </h3>
              <p className="text-body text-gray-300">
                Få værdifulde indsigter og tips til transformation direkte i din indbakke.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="input-floating flex-1">
                  <input 
                    type="email" 
                    placeholder=" " 
                    className="w-full bg-gray-800 border-gray-700 text-white"
                  />
                  <label className="text-gray-400">Din email adresse</label>
                </div>
                <button className="btn-primary">
                  Tilmeld
                </button>
              </div>
              <p className="text-small text-gray-400">
                Vi respekterer din privatliv. Ingen spam, kun værdifuldt indhold.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} drømmelandet. Alle rettigheder forbeholdes.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privatpolitik" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privatlivspolitik
              </Link>
              <Link href="/handelsbetingelser" className="text-gray-400 hover:text-white text-sm transition-colors">
                Handelsbetingelser
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie politik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}