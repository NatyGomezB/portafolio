'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'

export default function Marquee() {
  return (
    <section className="py-16 bg-muted/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-3 mb-4">
            Herramientas y <span className="gradient-text">tecnologías</span>
          </h2>
          <p className="text-muted body-medium max-w-2xl mx-auto">
            Domino un amplio espectro de herramientas para llevar ideas del concepto a la realidad
          </p>
        </motion.div>

        {/* Tools Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            {[...siteConfig.tools, ...siteConfig.tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 py-2 bg-bg border border-muted/20 rounded-full text-muted hover:text-fg hover:border-primary/30 transition-all duration-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="heading-3 mb-8">
            Áreas de <span className="gradient-text">especialización</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {siteConfig.expertise.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-bg border border-muted/20 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <div className="text-sm font-medium text-fg">{area}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
