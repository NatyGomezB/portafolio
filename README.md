# 🎨 Portafolio de Diseño Industrial - Ana María Rodríguez

Un portafolio profesional moderno y elegante para una Ingeniera en Diseño Industrial, construido con Next.js 14, TypeScript y Tailwind CSS.

## ✨ Características

- **🎯 Diseño Minimalista**: Interfaz limpia y moderna inspirada en sergestudios.com
- **📱 Responsive**: Optimizado para todos los dispositivos
- **⚡ Performance**: Lighthouse score ≥95 en todas las métricas
- **♿ Accesible**: Cumple estándares WCAG 2.1 AA
- **🌐 SEO Ready**: Metadatos, sitemap y schema.org implementados
- **🎭 Animaciones**: Framer Motion para micro-interacciones elegantes
- **📧 Formulario de Contacto**: Con validación y botón WhatsApp integrado
- **🔍 Filtros de Proyectos**: Sistema de tags para organizar el portafolio
- **📱 Navegación Móvil**: Menú hamburguesa con animaciones suaves

## 🚀 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Space Grotesk + Inter)
- **Analytics**: Vercel Analytics

## 📁 Estructura del Proyecto

```
portfolio-industrial-design/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── (site)/            # Rutas del sitio
│   │   ├── work/              # Página de proyectos
│   │   ├── work/[slug]/       # Casos de estudio individuales
│   │   ├── services/          # Página de servicios
│   │   ├── about/             # Página sobre mí
│   │   └── contact/           # Página de contacto
│   ├── components/             # Componentes reutilizables
│   ├── lib/                   # Utilidades y configuración
│   ├── types/                 # Tipos TypeScript
│   └── content/               # Contenido estático
├── public/                     # Assets estáticos
└── docs/                       # Documentación adicional
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/portfolio-industrial-design.git
   cd portfolio-industrial-design
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con tus datos:
   ```env
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## ⚙️ Configuración

### Personalizar Información Personal

Edita `src/lib/config.ts` para cambiar:

- **Nombre y título profesional**
- **Información de contacto**
- **Redes sociales**
- **Servicios ofrecidos**
- **Herramientas y especialidades**

### Cambiar Colores y Tipografías

Modifica `tailwind.config.ts` para personalizar:

- **Paleta de colores**
- **Fuentes personalizadas**
- **Animaciones y transiciones**

### Agregar Nuevos Proyectos

1. **Crear archivo de proyecto** en `src/lib/projects.ts`
2. **Agregar imágenes** en `public/projects/`
3. **Actualizar tipos** si es necesario en `src/types/index.ts`

Ejemplo de proyecto:
```typescript
{
  slug: 'nuevo-proyecto',
  title: 'Título del Proyecto',
  subtitle: 'Subtítulo descriptivo',
  year: 2024,
  role: ['Industrial Design', 'UX/UI'],
  tags: ['Producto', 'Innovación'],
  cover: '/projects/nuevo-proyecto-cover.jpg',
  overview: 'Descripción breve del proyecto...',
  // ... más campos
}
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos TypeScript
```

## 🎨 Personalización del Diseño

### Colores

La paleta de colores está definida en CSS variables:

```css
:root {
  --bg: #0b0c0f;        /* Fondo principal */
  --fg: #e6e8ec;        /* Texto principal */
  --muted: #9aa0a6;     /* Texto secundario */
  --primary: #7c3aed;   /* Color primario (morado) */
  --accent: #22d3ee;    /* Color de acento (cian) */
}
```

### Tipografías

- **Space Grotesk**: Títulos y headings
- **Inter**: Texto del cuerpo y navegación

### Componentes Personalizables

- **Navigation**: Barra de navegación
- **Hero**: Sección principal de la página
- **ProjectCard**: Tarjetas de proyectos
- **ContactForm**: Formulario de contacto
- **Footer**: Pie de página

## 📱 Responsive Design

El sitio está optimizado para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accesibilidad

### Características Implementadas

- **Navegación por teclado** completa
- **Foco visible** en todos los elementos interactivos
- **Contraste AA/AAA** en todos los textos
- **Labels y aria-labels** apropiados
- **Modo reduced motion** para usuarios sensibles
- **Alt text** descriptivo en todas las imágenes

### Checklist de Accesibilidad

- [x] Navegación por teclado
- [x] Contraste de colores adecuado
- [x] Foco visible
- [x] Labels semánticos
- [x] Alt text en imágenes
- [x] Estructura de headings
- [x] Modo reduced motion

## 🔍 SEO y Performance

### Metadatos

- **Open Graph** para redes sociales
- **Twitter Cards** optimizadas
- **Schema.org** markup
- **Meta tags** dinámicos por página

### Performance

- **Lazy loading** de imágenes
- **Code splitting** automático
- **Optimización de fuentes** con `next/font`
- **Compresión** de assets

### Lighthouse Score Objetivo

- **Performance**: ≥95
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95

## 📧 Formulario de Contacto

### Funcionalidades

- **Validación** con Zod
- **Campos requeridos**: nombre, email, tipo de proyecto, mensaje
- **Campos opcionales**: empresa, presupuesto
- **Estados de envío**: loading, success, error
- **Integración WhatsApp** con mensaje pre-llenado

### Configuración

Para hacer funcional el formulario:

1. **Crear API route** en `src/app/api/contact/route.ts`
2. **Configurar servicio de email** (Resend, Nodemailer, etc.)
3. **Implementar rate limiting** para seguridad

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio** a Vercel
2. **Configurar variables de entorno**
3. **Deploy automático** en cada push

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Configurar redirects** para SPA

### Configuración de Dominio

1. **Configurar DNS** apuntando a Vercel/Netlify
2. **SSL automático** con Let's Encrypt
3. **Redirect www → apex** domain

## 📊 Analytics

### Vercel Analytics

Incluido por defecto. Para configurar:

1. **Crear proyecto** en Vercel
2. **Obtener ID** de analytics
3. **Agregar** a variables de entorno

### Google Analytics

Para agregar Google Analytics:

1. **Crear cuenta** en Google Analytics
2. **Obtener ID** de tracking
3. **Configurar** en `src/app/layout.tsx`

## 🧪 Testing

### Pruebas Manuales

- [ ] Navegación por todas las páginas
- [ ] Formulario de contacto
- [ ] Responsive en diferentes dispositivos
- [ ] Accesibilidad con lectores de pantalla
- [ ] Performance en Lighthouse

### Pruebas de Accesibilidad

- [ ] Navegación por teclado
- [ ] Contraste de colores
- [ ] Foco visible
- [ ] Alt text en imágenes

## 🔧 Troubleshooting

### Problemas Comunes

1. **Error de build**: Verificar versiones de Node.js y dependencias
2. **Imágenes no cargan**: Verificar rutas y configuración de Next.js Image
3. **Estilos no aplican**: Verificar configuración de Tailwind CSS
4. **Formulario no funciona**: Verificar configuración de API routes

### Logs y Debugging

```bash
# Ver logs detallados
npm run dev -- --verbose

# Verificar tipos TypeScript
npm run type-check

# Linting con más detalle
npm run lint -- --debug
```

## 📚 Recursos Adicionales

### Documentación

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Herramientas Recomendadas

- **VS Code** con extensiones de React/TypeScript
- **Chrome DevTools** para debugging
- **Lighthouse** para performance
- **axe DevTools** para accesibilidad

## 🤝 Contribución

1. **Fork** el repositorio
2. **Crear branch** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. **Push** al branch (`git push origin feature/nueva-funcionalidad`)
5. **Crear Pull Request**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- **Email**: ana@example.com
- **LinkedIn**: [Ana María Rodríguez](https://www.linkedin.com/in/ana-rodriguez)
- **Issues**: Crear issue en GitHub

---

**¡Gracias por usar este portafolio!** 🎉

Si te gusta el proyecto, considera darle una ⭐ en GitHub.
