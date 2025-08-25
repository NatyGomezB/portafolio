'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-muted/20'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <span className="font-space-grotesk font-bold text-xl text-fg">
                {siteConfig.name.split(' ')[0]}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-fg/80 hover:text-fg transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="button-primary"
              >
                Hablemos
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-fg hover:text-primary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg/95 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-bg border-b border-muted/20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-custom py-8">
                <div className="flex flex-col space-y-6">
                  {siteConfig.navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={toggleMenu}
                      className="text-2xl font-space-grotesk font-semibold text-fg hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="pt-6 border-t border-muted/20">
                    <Link
                      href="/contact"
                      onClick={toggleMenu}
                      className="button-primary w-full text-center"
                    >
                      Hablemos
                    </Link>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-muted/20">
                    <div className="flex items-center justify-center space-x-6">
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg/60 hover:text-primary transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg/60 hover:text-primary transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={siteConfig.social.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg/60 hover:text-primary transition-colors duration-200"
                        aria-label="Behance"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
