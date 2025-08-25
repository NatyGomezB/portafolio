import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
  })
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateWhatsAppLink(phone: string, message: string) {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodedMessage}`
}

export function truncateText(text: string, length: number) {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

export function getProjectYearRange(projects: { year: number }[]) {
  if (projects.length === 0) return ''
  const years = projects.map(p => p.year).sort((a, b) => a - b)
  const min = years[0]
  const max = years[years.length - 1]
  return min === max ? min.toString() : `${min} - ${max}`
}

export function filterProjectsByTags(projects: any[], tags: string[]) {
  if (tags.length === 0) return projects
  return projects.filter(project =>
    tags.some(tag => project.tags.includes(tag))
  )
}

export function getUniqueTags(projects: any[]) {
  const allTags = projects.flatMap(project => project.tags)
  return [...new Set(allTags)].sort()
}
