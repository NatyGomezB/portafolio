import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getProjects } from '@/lib/projects'
import { getUniqueTags } from '@/lib/utils'
import ProjectGrid from '@/components/ProjectGrid'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Portafolio de proyectos de diseño industrial, UX/UI y prototipado. Explora mis trabajos más recientes y casos de estudio.',
}

export default async function WorkPage() {
  const projects = await getProjects()
  const allTags = getUniqueTags(projects)

  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">
              Mi <span className="gradient-text">portafolio</span>
            </h1>
            <p className="body-large text-muted max-w-3xl mx-auto">
              Una colección de proyectos que demuestran mi enfoque en diseño centrado en el usuario, 
              innovación tecnológica y soluciones sostenibles. Desde productos físicos hasta experiencias digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid with Filters */}
      <ProjectGrid projects={projects} allTags={allTags} />
      
      <Footer />
    </main>
  )
}
