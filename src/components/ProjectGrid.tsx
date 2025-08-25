'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { Project } from '@/types'
import { filterProjectsByTags } from '@/lib/utils'

interface ProjectGridProps {
  projects: Project[]
  allTags: string[]
}

export default function ProjectGrid({ projects, allTags }: ProjectGridProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    return filterProjectsByTags(projects, selectedTags)
  }, [projects, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="heading-3">
              Filtrar por <span className="gradient-text">categoría</span>
            </h2>
            {selectedTags.length > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-muted hover:text-fg transition-colors duration-200"
              >
                <X size={16} />
                <span>Limpiar filtros</span>
              </button>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-white border border-primary'
                    : 'bg-bg text-muted border border-muted/20 hover:border-primary/30 hover:text-fg'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Active Filters */}
          {selectedTags.length > 0 && (
            <div className="mt-4">
              <span className="text-muted text-sm">
                Mostrando {filteredProjects.length} de {projects.length} proyectos
              </span>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedTags.join(',')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-muted body-large">
                No se encontraron proyectos con los filtros seleccionados.
              </div>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:text-primary-dark transition-colors duration-200"
              >
                Ver todos los proyectos
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
