import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Tag } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

interface CaseStudyPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: `${project.title} | ${project.subtitle || 'Case Study'}`,
    description: project.overview,
    openGraph: {
      title: project.title,
      description: project.overview,
      images: [project.cover],
    },
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

  const allProjects = await getProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === params.slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          {/* Back Button */}
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-muted hover:text-fg transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Volver a proyectos</span>
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="heading-1 mb-4">{project.title}</h1>
              
              {project.subtitle && (
                <p className="body-large text-muted mb-6">{project.subtitle}</p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-muted">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={20} />
                  <span>{project.role.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overview */}
            <div className="prose prose-invert max-w-none">
              <h2 className="heading-3 mb-4">Resumen del proyecto</h2>
              <p className="body-large text-muted mb-8">{project.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none space-y-16">
              {/* Context */}
              {project.context && (
                <div>
                  <h2 className="heading-3 mb-6">Contexto</h2>
                  <p className="body-large text-muted">{project.context}</p>
                </div>
              )}

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="heading-3 mb-6">El reto</h2>
                  <p className="body-large text-muted">{project.challenge}</p>
                </div>
              )}

              {/* Process */}
              {project.process && (
                <div>
                  <h2 className="heading-3 mb-6">Proceso</h2>
                  <div className="space-y-4">
                    {project.process.split('\n').map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="body-large text-muted">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="heading-3 mb-6">Solución</h2>
                  <p className="body-large text-muted">{project.solution}</p>
                </div>
              )}

              {/* Impact */}
              {project.impact && (
                <div>
                  <h2 className="heading-3 mb-6">Impacto y resultados</h2>
                  <p className="body-large text-muted">{project.impact}</p>
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h2 className="heading-3 mb-6">Galería del proyecto</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} - Imagen ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Credits */}
              {project.credits && project.credits.length > 0 && (
                <div>
                  <h2 className="heading-3 mb-6">Créditos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.credits.map((credit, index) => (
                      <div key={index} className="text-muted body-medium">
                        {credit}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div>
                  <h2 className="heading-3 mb-6">Enlaces relacionados</h2>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary inline-flex items-center"
                      >
                        {link.label}
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-muted/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {prevProject ? (
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="group flex items-center space-x-4 text-left"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
                  <div>
                    <div className="text-sm text-muted">Proyecto anterior</div>
                    <div className="font-medium text-fg">{prevProject.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group flex items-center space-x-4 text-right"
                >
                  <div>
                    <div className="text-sm text-muted">Siguiente proyecto</div>
                    <div className="font-medium text-fg">{nextProject.title}</div>
                  </div>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
