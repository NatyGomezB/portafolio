'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-bg border border-muted/20 hover:border-primary/30 transition-all duration-300 card-hover">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* CTA Arrow */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
              <ArrowRight size={20} className="text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-3 text-sm text-muted">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{project.role[0]}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-space-grotesk font-semibold text-xl text-fg mb-3 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>

            {/* Subtitle */}
            {project.subtitle && (
              <p className="text-muted body-medium mb-4 line-clamp-2">
                {project.subtitle}
              </p>
            )}

            {/* Overview */}
            <p className="text-muted body-small mb-4 line-clamp-2">
              {project.overview}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="tag text-xs"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="tag text-xs">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
