import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Ana María Rodríguez, Ingeniera en Diseño Industrial especializada en UX/UI, prototipado y consultoría de manufactura en Medellín, Colombia.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">
                Hola, soy <span className="gradient-text">{siteConfig.name}</span>
              </h1>
              <p className="body-large text-muted mb-8">
                Soy {siteConfig.title} en {siteConfig.city}. Combino investigación, 
                diseño de producto/UX y prototipado para llevar conceptos a resultados medibles.
              </p>
              <p className="body-medium text-muted mb-8">
                Con más de 5 años de experiencia, he trabajado en proyectos que van desde 
                wearables inteligentes hasta sistemas de mobiliario modular. Mi enfoque se 
                centra en crear soluciones que no solo se vean bien, sino que resuelvan 
                problemas reales de manera efectiva y sostenible.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Ver LinkedIn
                </a>
                <a
                  href="/contact"
                  className="button-primary"
                >
                  Hablemos
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/5">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">
              Mis <span className="gradient-text">valores</span>
            </h2>
            <p className="body-large text-muted">
              Los principios que guían mi trabajo y mi relación con cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Centrado en el Usuario',
                description: 'Cada decisión de diseño se basa en la comprensión profunda de las necesidades y comportamientos de los usuarios.',
                icon: '👥',
              },
              {
                title: 'Innovación Sostenible',
                description: 'Busco crear soluciones que no solo resuelvan problemas inmediatos, sino que también consideren el impacto a largo plazo.',
                icon: '🌱',
              },
              {
                title: 'Excelencia Técnica',
                description: 'Combino creatividad con rigor técnico para asegurar que cada solución sea tanto hermosa como funcional.',
                icon: '⚡',
              },
            ].map((value, index) => (
              <div key={value.title} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  {value.title}
                </h3>
                <p className="text-muted body-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-12 text-center">
              Mi <span className="gradient-text">experiencia</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  year: '2024 - Presente',
                  title: 'Diseñadora Industrial Senior',
                  company: 'Estudio de Diseño Independiente',
                  description: 'Liderando proyectos de diseño de producto y UX/UI para startups y empresas establecidas.',
                },
                {
                  year: '2022 - 2024',
                  title: 'Diseñadora de Producto',
                  company: 'InnovaciónCorp',
                  description: 'Desarrollo de productos IoT y wearables, desde concepto hasta prototipado y validación.',
                },
                {
                  year: '2020 - 2022',
                  title: 'Diseñadora UX/UI',
                  company: 'TechStartup',
                  description: 'Diseño de interfaces digitales y experiencias de usuario para aplicaciones móviles y web.',
                },
                {
                  year: '2019 - 2020',
                  title: 'Diseñadora Industrial Junior',
                  company: 'ManufacturaPro',
                  description: 'Diseño de productos de consumo y optimización de procesos de manufactura.',
                },
              ].map((experience, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-bg border border-muted/20 rounded-xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-20 text-primary font-semibold">
                    {experience.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk font-semibold text-fg mb-1">
                      {experience.title}
                    </h3>
                    <div className="text-primary font-medium mb-2">
                      {experience.company}
                    </div>
                    <p className="text-muted body-medium">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 bg-muted/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-12 text-center">
              Educación y <span className="gradient-text">certificaciones</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-bg border border-muted/20 rounded-xl">
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  Ingeniería en Diseño Industrial
                </h3>
                <div className="text-primary font-medium mb-2">
                  Universidad de Antioquia
                </div>
                <div className="text-muted text-sm mb-3">2015 - 2019</div>
                <p className="text-muted body-small">
                  Especialización en diseño de producto, ergonomía y metodologías de diseño centrado en el usuario.
                </p>
              </div>

              <div className="p-6 bg-bg border border-muted/20 rounded-xl">
                <h3 className="font-space-grotesk font-semibold text-fg mb-3">
                  Certificación UX Design
                </h3>
                <div className="text-primary font-medium mb-2">
                  Google UX Design Certificate
                </div>
                <div className="text-muted text-sm mb-3">2021</div>
                <p className="text-muted body-small">
                  Programa completo de UX/UI design con enfoque en investigación de usuarios y prototipado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">
              ¿Te gustaría <span className="gradient-text">trabajar</span> conmigo?
            </h2>
            <p className="body-large text-muted mb-8">
              Estoy siempre abierta a nuevas oportunidades y proyectos desafiantes. 
              Si tienes una idea que quieres desarrollar, hablemos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="button-primary"
              >
                Iniciar conversación
              </a>
              <a
                href="/work"
                className="button-secondary"
              >
                Ver mi trabajo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
