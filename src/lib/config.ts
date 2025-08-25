export const siteConfig = {
  name: 'Ana María Rodríguez',
  title: 'Ingeniera en Diseño Industrial',
  city: 'Medellín, Colombia',
  email: 'ana@example.com',
  whatsapp: '+573001234567',
  linkedin: 'https://www.linkedin.com/in/ana-rodriguez',
  instagram: 'https://www.instagram.com/ana.design',
  behance: 'https://www.behance.net/ana-rodriguez',
  
  // Paleta de colores
  colors: {
    bg: '#0b0c0f',
    fg: '#e6e8ec',
    muted: '#9aa0a6',
    primary: '#7c3aed',
    accent: '#22d3ee',
  },
  
  // Idiomas soportados
  languages: ['es', 'en'],
  defaultLanguage: 'es',
  
  // Mensaje pre-llenado para WhatsApp
  whatsappMessage: 'Hola Ana, vi tu portafolio y me interesa trabajar en un proyecto de diseño industrial. ¿Tienes disponibilidad este mes?',
  
  // Descripción del sitio
  description: 'Portafolio profesional de Ana María Rodríguez, Ingeniera en Diseño Industrial especializada en UX/UI, prototipado y consultoría de manufactura.',
  
  // URLs
  url: 'https://ana-rodriguez.vercel.app',
  
  // Redes sociales
  social: {
    linkedin: 'https://www.linkedin.com/in/ana-rodriguez',
    instagram: 'https://www.instagram.com/ana.design',
    behance: 'https://www.behance.net/ana-rodriguez',
  },
  
  // Navegación
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/work' },
    { label: 'Servicios', href: '/services' },
    { label: 'Sobre mí', href: '/about' },
    { label: 'Contacto', href: '/contact' },
  ],
  
  // Servicios principales
  services: [
    {
      name: 'Diseño de Producto Físico',
      description: 'Desde la investigación hasta la fabricación, diseño productos que conectan con los usuarios.',
      deliverables: ['Research & Insights', 'Conceptos & Ideación', 'CAD & Modelado 3D', 'CMF & Materiales', 'Prototipado', 'Factibilidad de Manufactura'],
      fromPrice: 'Desde $2,500 USD',
    },
    {
      name: 'UX/UI & Experiencia Digital',
      description: 'Diseño interfaces intuitivas y flujos de usuario que mejoran la experiencia del producto.',
      deliverables: ['User Research', 'User Flows', 'Wireframes', 'UI System', 'Prototipos Interactivos', 'Testing con Usuarios'],
      fromPrice: 'Desde $1,800 USD',
    },
    {
      name: 'Prototipado & Validación',
      description: 'Creo prototipos físicos y digitales para validar conceptos antes de la producción.',
      deliverables: ['Prototipos 3D', 'Soft Tooling', 'Validación con Usuarios', 'Iteración Rápida', 'Documentación Técnica'],
      fromPrice: 'Desde $1,200 USD',
    },
    {
      name: 'Consultoría de Diseño',
      description: 'Auditoría de productos existentes y design sprints para optimizar procesos.',
      deliverables: ['Auditoría de Producto', 'Design Sprints', 'Workshops de Ideación', 'Análisis de Competencia', 'Roadmap de Producto'],
      fromPrice: 'Desde $800 USD',
    },
  ],
  
  // Herramientas y tecnologías
  tools: [
    'Fusion 360', 'SolidWorks', 'Rhino', 'Keyshot', 'Figma', 'Adobe Creative Suite',
    '3D Printing', 'Laser Cutting', 'CNC Milling', 'User Research', 'Prototyping'
  ],
  
  // Áreas de especialización
  expertise: [
    'Diseño Industrial', 'UX/UI', 'CMF Design', 'Prototipado Rápido', 'Manufactura Digital',
    'Investigación de Usuarios', 'Design Thinking', 'Sostenibilidad', 'Ergonomía'
  ],
}
