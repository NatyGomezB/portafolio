// Proyecto / Case Study
export type Project = {
  slug: string
  title: string
  subtitle?: string
  year: number
  role: string[] // p.ej. "Industrial Design", "UX/UI"
  tags: string[] // p.ej. "CMF", "Prototyping"
  cover: string // ruta imagen
  gallery?: string[]
  overview: string // resumen
  context?: string
  challenge?: string
  process?: string // etapas con viñetas
  solution?: string
  impact?: string // métricas/KPIs reales
  credits?: string[]
  links?: { label: string; href: string }[]
}

export type Testimonial = {
  quote: string
  author: string
  role?: string
  company?: string
  location?: string
  avatar?: string
}

export type Service = {
  name: string
  description: string
  deliverables: string[]
  fromPrice?: string // "Desde $X"
}

export type FAQ = { 
  q: string; 
  a: string 
}

export type ContactFormData = {
  name: string
  email: string
  company?: string
  message: string
  projectType: string
  budget?: string
}

export type NavigationItem = {
  label: string
  href: string
  external?: boolean
}
