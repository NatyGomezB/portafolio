# Contributing to Portfolio Industrial Design

¡Gracias por tu interés en contribuir a este proyecto! Este documento te guiará a través del proceso de contribución.

## 🚀 Cómo Contribuir

### 1. Configuración del Entorno

1. **Fork** el repositorio
2. **Clone** tu fork localmente:
   ```bash
   git clone https://github.com/tu-usuario/portfolio-industrial-design.git
   cd portfolio-industrial-design
   ```
3. **Instala** las dependencias:
   ```bash
   npm install
   ```
4. **Configura** las variables de entorno:
   ```bash
   cp env.example .env.local
   # Edita .env.local con tus valores
   ```

### 2. Flujo de Trabajo

1. **Crea** una nueva rama para tu feature:
   ```bash
   git checkout -b feature/nombre-de-tu-feature
   ```
2. **Desarrolla** tu feature
3. **Prueba** tu código:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
4. **Commit** tus cambios:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```
5. **Push** a tu fork:
   ```bash
   git push origin feature/nombre-de-tu-feature
   ```
6. **Crea** un Pull Request

### 3. Estándares de Código

#### TypeScript
- Usa tipos estrictos
- Evita `any` cuando sea posible
- Documenta interfaces complejas
- Usa enums para valores constantes

#### React/Next.js
- Usa componentes funcionales con hooks
- Implementa lazy loading cuando sea apropiado
- Optimiza imágenes con `next/image`
- Usa `useCallback` y `useMemo` apropiadamente

#### CSS/Tailwind
- Usa clases de Tailwind cuando sea posible
- Mantén consistencia en el diseño
- Usa variables CSS para valores reutilizables
- Implementa responsive design

#### Accesibilidad
- Incluye `alt` text en todas las imágenes
- Usa `aria-*` attributes apropiadamente
- Asegura navegación por teclado
- Mantén contraste de colores adecuado

### 4. Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Tipos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Cambios de formato
- `refactor`: Refactorización de código
- `test`: Agregar o corregir tests
- `chore`: Cambios en build o herramientas

**Ejemplos:**
```bash
git commit -m "feat: add contact form validation"
git commit -m "fix: resolve navigation mobile menu issue"
git commit -m "docs: update README with deployment instructions"
```

### 5. Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
├── components/             # Componentes reutilizables
├── lib/                   # Utilidades y configuración
├── types/                 # Tipos TypeScript
└── content/               # Contenido estático
```

### 6. Testing

Antes de enviar tu PR, asegúrate de:

- [ ] Ejecutar `npm run lint` (sin errores)
- [ ] Ejecutar `npm run type-check` (sin errores)
- [ ] Ejecutar `npm run build` (build exitoso)
- [ ] Probar en diferentes navegadores
- [ ] Probar responsive design
- [ ] Verificar accesibilidad

### 7. Pull Request Guidelines

- **Título descriptivo** que explique el cambio
- **Descripción detallada** del problema y solución
- **Screenshots** si hay cambios visuales
- **Referencias** a issues relacionados
- **Checklist** completado

### 8. Reportar Bugs

Usa la plantilla de bug report y incluye:

- Descripción clara del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots si es aplicable
- Información del entorno

### 9. Solicitar Features

Usa la plantilla de feature request y describe:

- Problema que resuelve
- Solución propuesta
- Casos de uso
- Impacto esperado

### 10. Comunidad

- **Sé respetuoso** con otros contribuidores
- **Pregunta** si algo no está claro
- **Ayuda** a otros cuando puedas
- **Celebra** los logros del equipo

## 🎯 Áreas de Contribución

### Prioridad Alta
- [ ] Mejoras de accesibilidad
- [ ] Optimización de performance
- [ ] Tests automatizados
- [ ] Documentación de API

### Prioridad Media
- [ ] Nuevas funcionalidades
- [ ] Mejoras de UX/UI
- [ ] Refactorización de código
- [ ] Internacionalización

### Prioridad Baja
- [ ] Mejoras de estilo
- [ ] Optimizaciones menores
- [ ] Documentación adicional
- [ ] Herramientas de desarrollo

## 🚨 Código de Conducta

Este proyecto sigue el [Código de Conducta de Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

## 📞 Obtener Ayuda

- **Issues**: Para bugs y feature requests
- **Discussions**: Para preguntas y discusiones
- **Email**: ana@example.com
- **LinkedIn**: [Ana María Rodríguez](https://www.linkedin.com/in/ana-rodriguez)

## 🎉 Reconocimiento

Todas las contribuciones serán reconocidas en:
- README del proyecto
- Changelog
- Créditos del sitio web

---

**¡Gracias por contribuir a hacer este portafolio aún mejor!** 🎨✨
