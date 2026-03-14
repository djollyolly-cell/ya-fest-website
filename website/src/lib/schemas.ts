import { z } from 'zod/v4'

export const applicationSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().regex(
    /^\+7[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
    'Формат: +7 (XXX) XXX-XX-XX'
  ),
  collective: z.string().min(2, 'Минимум 2 символа'),
  direction: z.enum(['theater', 'cinema']),
  age_group: z.enum(['under_11', '12-16', '17plus', 'mixed']),
  nomination: z.string().min(2, 'Минимум 2 символа'),
  // honeypot field — must be empty
  website: z.string().max(0, 'Поле должно быть пустым').optional(),
})

export type ApplicationFormData = z.infer<typeof applicationSchema>
