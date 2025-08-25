import Link from 'next/link'
import { ExternalLink, Heart } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-muted/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg" />
              <span className="font-space-grotesk font-bold text-xl text-fg">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-muted body-medium max-w-md">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-fg mb-4">
              Enlaces
            </h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-fg transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-fg mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-muted hover:text-fg transition-colors duration-200"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted hover:text-fg transition-colors duration-200"
              >
                <span>LinkedIn</span>
                <ExternalLink size={16} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted hover:text-fg transition-colors duration-200"
              >
                <span>Instagram</span>
                <ExternalLink size={16} />
              </a>
              <a
                href={siteConfig.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted hover:text-fg transition-colors duration-200"
              >
                <span>Behance</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted">
              <span>© {currentYear} {siteConfig.name}. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted">
              <Link
                href="/privacy"
                className="hover:text-fg transition-colors duration-200"
              >
                Privacidad
              </Link>
              <Link
                href="/terms"
                className="hover:text-fg transition-colors duration-200"
              >
                Términos
              </Link>
              <Link
                href="/sitemap.xml"
                className="hover:text-fg transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-muted text-sm">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>en {siteConfig.city}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
