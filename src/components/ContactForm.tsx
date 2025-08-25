'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { z } from 'zod'
import { ContactFormData } from '@/types'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  company: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  projectType: z.string().min(1, 'Selecciona un tipo de proyecto'),
  budget: z.string().optional(),
})

type ContactFormSchema = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // En un proyecto real, aquí enviarías el formulario a tu API
      // Por ahora, simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      reset()
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    'Diseño de Producto Físico',
    'UX/UI & Experiencia Digital',
    'Prototipado & Validación',
    'Consultoría de Diseño',
    'Otro',
  ]

  const budgetRanges = [
    'Menos de $1,000 USD',
    '$1,000 - $5,000 USD',
    '$5,000 - $10,000 USD',
    '$10,000 - $25,000 USD',
    'Más de $25,000 USD',
    'Por definir',
  ]

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-fg mb-2">
            Nombre completo *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-fg mb-2">
            Empresa (opcional)
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="input-field"
            placeholder="Nombre de tu empresa"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-fg mb-2">
            Tipo de proyecto *
          </label>
          <select
            {...register('projectType')}
            id="projectType"
            className={`input-field ${errors.projectType ? 'border-red-500 focus:ring-red-500' : ''}`}
          >
            <option value="">Selecciona un tipo de proyecto</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-fg mb-2">
            Rango de presupuesto (opcional)
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="input-field"
          >
            <option value="">Selecciona un rango de presupuesto</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-fg mb-2">
            Mensaje *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Cuéntame sobre tu proyecto, objetivos, timeline y cualquier otra información relevante..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Enviando...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Send size={20} />
              <span>Enviar mensaje</span>
            </div>
          )}
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
            >
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-green-500 font-medium">
                ¡Mensaje enviado con éxito! Te responderé en las próximas 24 horas.
              </span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
            >
              <AlertCircle size={20} className="text-red-500" />
              <span className="text-red-500 font-medium">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente.
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Privacy Note */}
        <p className="text-xs text-muted text-center">
          Al enviar este formulario, aceptas que me ponga en contacto contigo para discutir tu proyecto. 
          No compartiré tu información con terceros.
        </p>
      </form>
    </div>
  )
}
