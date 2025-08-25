import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Ofrezco servicios de diseño industrial, UX/UI, prototipado y consultoría. Desde conceptos hasta fabricación, transformo ideas en productos reales.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">
              Mis <span className="gradient-text">servicios</span>
            </h1>
            <p className="body-large text-muted max-w-3xl mx-auto">
              Ofrezco soluciones integrales de diseño que van desde la investigación inicial 
              hasta la fabricación final. Cada proyecto es una oportunidad para innovar y crear valor.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {siteConfig.services.map((service, index) => (
              <div
                key={service.name}
                className="bg-bg border border-muted/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 card-hover"
              >
                <div className="mb-6">
                  <h3 className="heading-3 mb-4">{service.name}</h3>
                  <p className="body-medium text-muted mb-4">{service.description}</p>
                  {service.fromPrice && (
                    <div className="text-primary font-semibold text-lg">
                      {service.fromPrice}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-fg">Entregables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                        <span className="text-muted body-medium">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/5">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">
              Mi <span className="gradient-text">metodología</span>
            </h2>
            <p className="body-large text-muted">
              Un proceso iterativo y centrado en el usuario que asegura resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Descubrimiento',
                description: 'Investigación profunda del problema, usuarios y contexto del proyecto.',
              },
              {
                step: '02',
                title: 'Ideación',
                description: 'Generación de conceptos creativos y validación temprana con usuarios.',
              },
              {
                step: '03',
                title: 'Prototipado',
                description: 'Creación rápida de prototipos para probar y refinar soluciones.',
              },
              {
                step: '04',
                title: 'Implementación',
                description: 'Desarrollo final y entrega del producto o servicio completo.',
              },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted body-small">{phase.description}</p>
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
              ¿Listo para <span className="gradient-text">empezar</span> tu proyecto?
            </h2>
            <p className="body-large text-muted mb-8">
              Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad. 
              Ofrezco consultas gratuitas para entender mejor tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="button-primary"
              >
                Hablemos de tu proyecto
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
