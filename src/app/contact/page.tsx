import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contacto',
  description: '¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad. Contacto directo y WhatsApp disponible.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">
              Hablemos de tu <span className="gradient-text">proyecto</span>
            </h1>
            <p className="body-large text-muted max-w-3xl mx-auto">
              ¿Tienes una idea que quieres desarrollar? ¿Necesitas ayuda con un proyecto existente? 
              Estoy aquí para escucharte y trabajar juntos en hacerlo realidad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-8">Envíame un mensaje</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 mb-6">Otras formas de contacto</h2>
                <p className="body-medium text-muted mb-8">
                  Prefieres contactarme directamente? Aquí tienes todas mis formas de contacto.
                </p>
              </div>

              {/* WhatsApp */}
              <div className="p-6 bg-bg border border-muted/20 rounded-xl hover:border-primary/30 transition-all duration-300">
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  WhatsApp
                </h3>
                <p className="text-muted body-medium mb-4">
                  Para consultas rápidas y respuestas inmediatas. Perfecto para proyectos urgentes.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-accent inline-flex items-center"
                >
                  Chatear por WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="p-6 bg-bg border border-muted/20 rounded-xl hover:border-primary/30 transition-all duration-300">
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  Email
                </h3>
                <p className="text-muted body-medium mb-4">
                  Para proyectos detallados y documentación. Te respondo en 24 horas.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="button-secondary inline-flex items-center"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Social Media */}
              <div className="p-6 bg-bg border border-muted/20 rounded-xl hover:border-primary/30 transition-all duration-300">
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  Redes sociales
                </h3>
                <p className="text-muted body-medium mb-4">
                  Sígueme para ver mi trabajo más reciente y estar al día con las tendencias.
                </p>
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors duration-200"
                    aria-label="Behance"
                  >
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/5">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>
            <p className="body-large text-muted">
              Respuestas a las preguntas más comunes sobre mi trabajo y proceso
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: '¿Cuánto tiempo toma completar un proyecto?',
                a: 'El tiempo varía según la complejidad. Un proyecto de UX/UI puede tomar 2-4 semanas, mientras que un producto físico completo puede tomar 8-12 semanas. Siempre te doy un timeline detallado al inicio.',
              },
              {
                q: '¿Trabajas con clientes internacionales?',
                a: '¡Absolutamente! He trabajado con clientes de diferentes países. Las reuniones se pueden hacer por video llamada y la comunicación es fluida en español e inglés.',
              },
              {
                q: '¿Ofreces servicios de mantenimiento post-lanzamiento?',
                a: 'Sí, ofrezco paquetes de mantenimiento y soporte continuo para asegurar que tu producto o servicio siga funcionando perfectamente.',
              },
              {
                q: '¿Puedes trabajar con mi equipo interno?',
                a: 'Por supuesto. Me adapto a tu estructura de trabajo y puedo colaborar con tu equipo de desarrollo, marketing o cualquier otro departamento.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-bg border border-muted/20 rounded-xl">
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  {faq.q}
                </h3>
                <p className="text-muted body-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">
              ¿Listo para <span className="gradient-text">empezar</span>?
            </h2>
            <p className="body-large text-muted mb-8">
              No importa en qué etapa esté tu proyecto, estoy aquí para ayudarte. 
              La primera consulta es gratuita y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                WhatsApp rápido
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="button-secondary"
              >
                Email detallado
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
